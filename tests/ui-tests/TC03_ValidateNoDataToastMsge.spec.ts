import{test,expect} from "@playwright/test";
import { pageObjectManager } from "../../page-object/pageObjectManager";
import dashboardData from "../../test-data/dashboardData.json";
import loginData from "../../test-data/loginData.json";

test("Validate No data Toast Msge", async({page})=>
{
const poManager =new pageObjectManager(page);
const dashboardPage =poManager.getDashboardPage();


 await page.goto(loginData.url);
 await dashboardPage.selectFashionOption();
await expect(dashboardPage.toastMsge).toBeVisible();
const noDataToastMsge = await dashboardPage.toastMsge.textContent();
await expect(noDataToastMsge?.trim()).toBe(dashboardData.NoProdMsge)
console.log(await dashboardPage.toastMsge.textContent());

})

