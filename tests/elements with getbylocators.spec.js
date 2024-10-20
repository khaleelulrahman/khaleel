const {test, expect} = require('@playwright/test');

test.only('getbytext', async({browser})=>
    

    {
//initiate fresh browser and browser
    const context= await browser.newContext();
    const page= await context.newPage();
   await  page.goto('https://rahulshettyacademy.com/angularpractice/');
   page.getByLabel("Check me out if you Love IceCreams!").check();;
   page.getByLabel("Employed").click();
   page.getByLabel("Gender").selectOption("Female");
   await page.pause();

    });