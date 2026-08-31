import { test, expect } from "@playwright/test";
import { pageObjectManager } from "../../page-object/pageObjectManager";
import dashboardData from "../../test-data/dashboardData.json"
import loginData from "../../test-data/loginData.json";

test("Search Product with range", async ({ page }) => {

    const poManager = new pageObjectManager(page);
    const dashboardPage = poManager.getDashboardPage();

    await page.goto(loginData.url);
    await dashboardPage.enterMinAmount(dashboardData.minAmount);
    await dashboardPage.enterMaxAmount(dashboardData.maxAmount);
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
    const prices = await dashboardPage.searchResult();
    for (const price of prices) {
        console.log(price)
        await expect(price).toBeGreaterThan(Number(dashboardData.minAmount));
        await expect(price).toBeLessThan(Number(dashboardData.maxAmount));
    }



})