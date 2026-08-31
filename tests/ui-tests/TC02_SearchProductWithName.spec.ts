import{test,expect} from "@playwright/test";
import { pageObjectManager } from "../../page-object/pageObjectManager";
import dashboardData from "../../test-data/dashboardData.json";
import loginData from "../../test-data/loginData.json";


test("Search Product with Name",async({page})=>
{
const poManager = new pageObjectManager(page);
const dashBoardPage = poManager.getDashboardPage();

  await page.goto(loginData.url);
await dashBoardPage.searchByProductName(dashboardData.productName);
await page.keyboard.press("Enter");
await dashBoardPage.searchByProductName(dashboardData.productName);
const prodName = await dashBoardPage.prodNames.allTextContents();

for(const name of prodName)
{
    await expect (name).toBe(dashboardData.productName);
    console.log(`Prod Name is : ${name}`)
}








})
