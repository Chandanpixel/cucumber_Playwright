import {Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import {chromium,Page,Browser, expect} from "@playwright/test"
import {pagefixture} from "../../hook/pagefixture";

setDefaultTimeout(60*1000*2)



     When('user enter the username and password as {string} and {string}', async function (username, password) {
       
        await pagefixture.page.goto("https://rahulshettyacademy.com/client");
        await pagefixture.page.locator("#userEmail").fill(username)
        await pagefixture.page.locator("#userPassword").fill(password)
        await pagefixture.page.locator("[value='Login']").click();
      });

     

      Then('user add a product into cart',  { timeout: 10000 }, async function () {
        await pagefixture.page.getByRole('button', { name: ' Add To Cart' }).first().click();
        await pagefixture.page.getByRole('button', { name: ' Cart' }).click();
        await pagefixture.page.getByRole('heading', { name: 'ZARA COAT' }).click();
        await pagefixture.page.getByRole('button', { name: 'Checkout❯' }).click();
        await pagefixture.page.getByText('ZARA COAT 3')

      });
    
  
   