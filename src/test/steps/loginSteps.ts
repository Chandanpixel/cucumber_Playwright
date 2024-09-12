import {Given,When,Then,} from "@cucumber/cucumber"
import {chromium,Page,Browser, expect} from "@playwright/test"
import {pagefixture} from "../../hook/pagefixture";

//setDefaultTimeout(60*1000*2)

let browser: Browser;
let page: Page;

Given('A user navigate to the application', { timeout: 10000 }, async function () {

 await pagefixture.page.goto("https://rahulshettyacademy.com/client")

  });

  Given('user enter the username as {string}', async function (username) {

    await pagefixture.page.locator("#userEmail").fill(username)
    
  });


  Given('user enter the password as {string}', async function (password) {
    await pagefixture.page.locator("#userPassword").fill(password)
    
  });



  When('user click on the login button', async function () {
    await pagefixture.page.locator("[value='Login']").click()
 
  });


  Then('Login should be success', async function () {
    const loggedInElement = await pagefixture.page.locator(".btn.btn-custom").first();
    // Assert that the element exists
    await expect(loggedInElement).not.toBeNull(); 

  });

  
    
  


