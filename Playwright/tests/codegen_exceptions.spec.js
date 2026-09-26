import {test, expect} from '@playwright/test';

test('holder', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');
    await page.getByRole('button', {name: 'Add'}).click();
    
    const row2Input = page.locator('id=row2');
    expect(row2Input).toBeVisible;

})

