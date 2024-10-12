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

test('multiple field type  scenario', async({page})=>
{
    await  page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   //capture the title of the page and match with the expected title
   console.log(await page.title());
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
   //enter incorrect login credentials and capture the error message
   await page.locator('#username').fill("rahulshettyacademy");
   await page.locator('#password').fill("learning");

   //selecting dropdown fields
   const dropdown= page.locator("select.form-control");
  await dropdown.selectOption("consult");
  //click on radio button
  await page.locator(".radiotextsty").last().click();
   // handling popup window
   await page.locator("#okayBtn").click();

  console.log(await page.locator(".radiotextsty").last().isChecked());
await page.locator('#terms').click();
//click on check box
 await page.locator("#signInBtn").click();
 //unchecking check box 
 await page.locator('#terms').uncheck();
 expect(await page.locator('#terms').isChecked()).toBeFalsy();


await page.pause();


});
    
test.only('switching to child window', async({browser})=>
    {
        const context= await browser.newContext();
    const page= await context.newPage();
        await  page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        const linktext= page.locator("[href*='documents-req']");


        const [newpage]=await Promise.all([

context.waitForEvent('page'),
await linktext.click(),
        ])

       const labeltext = await newpage.locator(".red").textContent();
       /*above returns " Please email us at mentor@rahulshettyacademy.com with below 
       template to receive response*/

       // to print Please from above sentence
       const arraytext=labeltext.split("email")
    
       const txtplease=arraytext[0]
       console.log(txtplease)

       //to print us
       const us=labeltext.split("email ")
       const ustxt=us[1].split(" ")[0]
       console.log(ustxt

       )

        

        //to print email id
        const sentence=labeltext.split("@")
        const emailid=sentence[1].split(" ")[0]

        console.log(emailid);

        page.pause();


    });
