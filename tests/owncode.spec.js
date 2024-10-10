const {test, expect} = require('@playwright/test');


test('google page open', async({browser})=>
    

    {
//initiate fresh browser and browser
    const context= await browser.newContext();
    const page= await context.newPage();
   await  page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   //capture the title of the page and match with the expected title
   console.log(await page.title());
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
   //enter incorrect login credentials and capture the error message
   await page.locator('#username').fill("rahushttyacademy");
   await page.locator('#password').fill("learning");
   await page.locator('#signInBtn').click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText("password");
   //replace with valid credentials and login
   await page.locator('#username').fill("rahulshettyacademy");
   await page.locator('#password').fill("learning");
   await page.locator('#signInBtn').click();
   //click on shop tab 
   await page.locator("[href='/angularpractice/shop']").click();
   //capture text of first and all shopping items from the list
   console.log (await page.locator('.card-body a').first().textContent());
   console.log (await page.locator('.card-body a').nth(0).textContent());
   console.log (await page.locator('.card-body a').allTextContents());

});

test.only('dropdown scenario', async({page})=>
{
    await  page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   //capture the title of the page and match with the expected title
   console.log(await page.title());
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
   //enter incorrect login credentials and capture the error message
   await page.locator('#username').fill("rahushttyacademy");
   await page.locator('#password').fill("learning");
   const dropdown= page.locator("select.form-control");
  await dropdown.selectOption("consult");
  //click on radio button
  await page.locator('.radiotextsty').last().click();
  //clicking okay on popup window
  await page.locator('#okayBtn').click();
// await page.locator('#terms').click();
  await page.locator("signInBtn").click();
await page.pause();

});
    