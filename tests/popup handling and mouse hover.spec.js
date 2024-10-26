const {test, expect } = require('@playwright/test');

test.only( 'popup handling', async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  
   await page.locator("#hide-textbox").click();
 //  await expect(page.locator("#displayed-text")).toBeVisible();
 await expect( page.locator("#displayed-text")).toBeHidden();

 await page.on('dialog', dialog=>dialog.accept());

 
 await page.locator("#confirmbtn").click();
 page.pause();
 await page.locator("#mousehover").hover();
 

  
}

)
