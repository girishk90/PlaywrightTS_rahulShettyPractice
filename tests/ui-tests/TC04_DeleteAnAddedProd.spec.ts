import { expect, Expect,test } from "@playwright/test";
import { pageObjectManager } from "../../page-object/pageObjectManager";
import loginData from "../../test-data/loginData.json";
import dashboardData from "../../test-data/dashboardData.json";

test("Delete Added Prod",async({page})=>
{
const poManager = new pageObjectManager(page);
const dashBoardPage =poManager.getDashboardPage();
const viewProdPage =poManager.getViewProdPage();
const myCartPage = poManager.getMyCartPage();

await page.goto(loginData.url);
await dashBoardPage.clickOnViewProduct(dashboardData.selectedProd);
await expect(viewProdPage.prodName).toHaveText(dashboardData.selectedProd);
await viewProdPage.clickOnAddToCartBtn();
await expect(dashBoardPage.toastMsge).toBeVisible();
await expect(dashBoardPage.toastMsge).toHaveText(dashboardData.prodAddedMsge);
await dashBoardPage.navigateToCartBtn();
 expect(await myCartPage.deleteBtn).toBeVisible();
 await myCartPage.clickOnDeleteBtn();
})