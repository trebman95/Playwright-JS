import { test, expect } from '@playwright/test';

test('Positive Login', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.pause()
});

test('Negative Username', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('incorrectUser');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123')
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#error')).toBeVisible();
    await page.pause()
})

test('Negative Password', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('incorrectPassword');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#error')).toBeVisible();
    await page.pause()
})

// Run 'npx playwright codegen_login.spec.js' for the full test
// Use '--headed' to run the visual browsers
// Use 'test.only' to run a specific test
