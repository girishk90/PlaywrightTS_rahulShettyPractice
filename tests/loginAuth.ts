import { test, expect } from "@playwright/test";
import { pageObjectManager } from "../page-object/pageObjectManager";
import loginData from "../test-data/loginData.json";

test("Login_Auth", async ({ page }) => {
   const authPath = "auth/userAuth.json";
    const poManager = new pageObjectManager(page);
    const loginPage = poManager.getloginPage();
    const dashboardPage = poManager.getDashboardPage();
console.log("test started")
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log("Page Opened")
    await loginPage.login(loginData.usermail, loginData.password);
    await expect(dashboardPage.homeTxt).toBeVisible();
    await page.context().storageState({path: authPath})


})