import{Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep, Status} from "@cucumber/cucumber"
import { chromium,Browser, Page, BrowserContext } from "@playwright/test";
import{pagefixture} from "./pagefixture"

let page:Page;
let browser:Browser;
let context :BrowserContext;

BeforeAll(async function () {
    browser= await chromium.launch({headless:false})

    
})

Before(async function () {
context= await browser.newContext();
    page= await context.newPage();
    pagefixture.page=page;
});


// AfterStep(async function ({pickle,result}) {

//     const img = await pagefixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}`,type:"png"})
//     await this.attach(img, "image/png");

// })

After(async function ({pickle,result}) {
    console.log(result?.status);
    //Screenshot
    if(result?.status == Status.FAILED){
        const img = await pagefixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}`,type:"png"})
        await this.attach(img, "image/png")

    }
  
    await pagefixture.page.close;
    await context.close;

    
})

AfterAll(async function () {
    await browser.close();
    
})