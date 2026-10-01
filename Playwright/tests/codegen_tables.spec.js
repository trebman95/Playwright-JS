import {test, expect} from '@playwright/test';

test('Language Filter', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    const java = page.getByRole('radio', {name: 'Java'})
    await java.check();

    await expect(java).toBeChecked();

    const languages = page.locator('tbody tr:visible td[data-col="language"]');
    await expect(languages).toHaveText(Array(6).fill('Java'));
});

test('Level Filter', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');

    const intermediate = page.getByRole('checkbox', {name: 'Intermediate'});
    const advanced = page.getByRole('checkbox', {name: 'Advanced'});
    const beginner = page.getByRole('checkbox', {name: 'Beginner'});
    await intermediate.uncheck();
    await advanced.uncheck();

    await expect(beginner).toBeChecked();
});

test('Min Enrollments', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');

    await page.getByRole('button', {name: 'Any'}).click();
    const minEnrollments = page.getByRole('listbox', {name: 'Minimum enrollments'});
    const tenThousandOption = minEnrollments.getByRole('option', {name: '10,000+'});
    await tenThousandOption.click();

    const enrollmentShown = page.locator('tbody tr:visible td[data-col="enrollments"]');
    const enrollmentValues = await enrollmentShown.allTextContents();
    expect(enrollmentValues.length).toBeGreaterThan(0);

    for (const value of enrollmentValues) {
        expect(Number(value.replaceAll(',', ''))).toBeGreaterThanOrEqual(10000);
    }

    await expect(minEnrollments).toHaveAttribute('data-value', '10000');
});

test('Combined Filters', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');

    const python = page.getByRole('radio', {name: 'Python'});
    await python.check();

    const intermediate = page.getByRole('checkbox', {name: 'Intermediate'});
    const advanced = page.getByRole('checkbox', {name: 'Advanced'});
    const beginner = page.getByRole('checkbox', {name: 'Beginner'});
    await intermediate.uncheck();
    await advanced.uncheck();

    const minEnrollments = page.getByRole('listbox', {name: 'Minimum enrollments'});
    await minEnrollments.getByRole('button').click();
    await minEnrollments.getByRole('option', {name: '10,000+'}).click();

    await expect(python).toBeChecked();
    await expect(intermediate).not.toBeChecked();
    await expect(advanced).not.toBeChecked();
    await expect(beginner).toBeChecked();
    await expect(minEnrollments).toHaveAttribute('data-value', '10000');

    
    const visibleRows = page.locator('tbody tr:visible');
    await expect(visibleRows).not.toHaveCount(0);
    const visibleCourses = await visibleRows.evaluateAll(rows => rows.map(row => ({
        language: row.querySelector('[data-col="language"]')?.textContent.trim(),
        level: row.querySelector('[data-col="level"]')?.textContent.trim(),
        enrollments: Number(row.querySelector('[data-col="enrollments"]')?.textContent.replaceAll(',', '')),
    })));

    for (const course of visibleCourses) {
        expect(course.language).toBe('Python');
        expect(course.level).toBe('Beginner');
        expect(course.enrollments).toBeGreaterThanOrEqual(10000);
    }

});

test('No Matching Courses', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');

    const noMatchesMessage = page.getByText('No matching courses.', {exact: true});
    await expect(noMatchesMessage).toBeHidden();

    await page.getByRole('radio', {name: 'Python'}).check();
    await page.getByRole('checkbox', {name: 'Beginner'}).uncheck();
    await page.getByRole('checkbox', {name: 'Intermediate'}).uncheck();

    await expect(page.getByRole('checkbox', {name: 'Advanced'})).toBeChecked();
    await expect(page.locator('tbody tr:visible')).toHaveCount(0);
    await expect(noMatchesMessage).toBeVisible();
});

test('Reset Filters', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');

    const resetButton = page.getByRole('button', {name: 'Reset filters'});
    const minEnrollments = page.getByRole('listbox', {name: 'Minimum enrollments'});
    const allRows = page.locator('tbody tr');
    const initialRowCount = await allRows.count();

    await expect(resetButton).toBeHidden();
    await page.getByRole('radio', {name: 'Python'}).check();
    await expect(resetButton).toBeVisible();
    await resetButton.click();

    await expect(page.getByRole('radio', {name: 'Any'})).toBeChecked();
    for (const level of ['Beginner', 'Intermediate', 'Advanced']) {
        await expect(page.getByRole('checkbox', {name: level})).toBeChecked();
    }
    await expect(minEnrollments).toHaveAttribute('data-value', 'any');
    await expect(resetButton).toBeHidden();
    await expect(page.locator('tbody tr:visible')).toHaveCount(initialRowCount);
});

test('Sort Enrollments', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    
    const sortBy = page.locator('#sortBy');
    await sortBy.selectOption({ label: 'Enrollments' });

    const enrollmentCells = page.locator('tbody tr:visible td[data-col="enrollments"]');
    const texts = await enrollmentCells.allTextContents();

    const numbers = [];
    for(const text of texts){
        numbers.push(Number(text.replaceAll(',','')))
    };

    expect(numbers.length).toBeGreaterThan(0);

    for(let i = 1; i < numbers.length; i++){
        expect(numbers[i]).toBeGreaterThanOrEqual(numbers[i - 1]);
    }
});

test('Sort Course Name', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    
    const sortBy = page.locator('#sortBy');
    await sortBy.selectOption({label : 'Course Name'});

    const courseNameCells = page.locator('tbody tr:visible td[data-col="course"]');
    const expectVisibleCoursesSorted = async() => {
        const courseNames = (await courseNameCells.allTextContents()).map(name => name.trim());
        expect(courseNames.length).toBeGreaterThan(0);

        for (let i = 1; i < courseNames.length; i++) {
            expect(courseNames[i].localeCompare(courseNames[i - 1])).toBeGreaterThanOrEqual(0);
        }
    };

    await expectVisibleCoursesSorted();

    await page.getByRole('radio', {name: 'Python'}).check();
    await expectVisibleCoursesSorted();

    await page.getByRole('checkbox', {name: 'Intermediate'}).uncheck();
    await page.getByRole('checkbox', {name: 'Advanced'}).uncheck();
    await expectVisibleCoursesSorted();

    const minEnrollments = page.getByRole('listbox', {name: 'Minimum enrollments'});
    await minEnrollments.getByRole('button').click();
    await minEnrollments.getByRole('option', {name: '10,000+'}).click();
    await expectVisibleCoursesSorted();
});