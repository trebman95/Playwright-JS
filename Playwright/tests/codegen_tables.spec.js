import {test, expect} from '@playwright/test';

test('Language Filter', async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-table/');
    const java = page.getByRole('radio', {name: 'Java'})
    await java.check();

    await expect(java).toBeChecked();

    const languages = page.locator('tbody tr:visible td[data-col="language"]');
    await expect(languages).toHaveText(Array(6).fill('Java'));
});