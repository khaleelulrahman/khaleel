

const { test, expect, request } = require('@playwright/test');
const payload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"}

 
 test.beforeAll( async()=>
 {
const apiconst = await request.newContext();
const loginResponse = await apiconst.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
  {
    data:payload
  })
expect(loginResponse.ok()).toBeTruthy();
const loginrepsonsejson= await loginResponse.json();
const token= loginrepsonsejson.token;
console.log(token);
});



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