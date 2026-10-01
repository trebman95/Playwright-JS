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