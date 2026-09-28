import {test, expect} from '@playwright/test';

test('NoSuchElementException', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
    await page.getByRole('button', {name: 'Add'}).click();
    
    const row2Input = page.locator('div#row2 input[type="text"]');
    expect(row2Input).toBeVisible;
});

test('ElementNotInteractableException', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
    await page.locator('#add_btn').click({ timeout: 5000 });

    const row2Input = page.locator('div#row2 input[type="text"]');
    await row2Input.waitFor({state: 'visible', timeout: 10000})

    await row2Input.fill('tacos');
    
    await page.locator('#row2').getByRole('button',{name: 'Save'}).click({ timeout: 5000 });

    const confirmText = page.locator('#confirmation');
    expect(confirmText).toHaveText('Row 2 was saved')
});

test('InvalidElementStateException', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
    await page.locator('#edit_btn').click();
    const inputField = page.locator('#row1').getByRole('textbox');
    await inputField.clear();

    await inputField.fill('Jamal')


    expect(inputField).toHaveValue('Jamal')
});

test('StaleElementReferenceException', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
    const instructions = page.locator('#instructions')
    await expect(instructions).toBeVisible();

    await page.getByRole('button', {name: 'Add'}).click()
     
    
    expect(instructions).not.toBeVisible();
});

test('TimeoutException', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
    await page.locator('#add_btn').click();
    
    const row2Input = page.locator('#row2 input');
    await expect(row2Input).toBeVisible({timeout: 10000});
});

