const {test,expect} = require('@playwright/test');

test('assessment',async ({page})=>
{
await page.goto('https://rahulshettyacademy.com/client');
console.log(await page.title());

//await expect(page).toHaveTitle("Let's Shop");

await page.locator('#userEmail').fill("test@game.com");
await page.locator('#userPassword').fill("Computer12@");
await page.locator("[type='submit']").click();
console.log(await page.locator('.card-body b').nth(0).textContent());



});