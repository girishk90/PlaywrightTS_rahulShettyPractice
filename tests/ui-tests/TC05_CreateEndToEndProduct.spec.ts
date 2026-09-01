import { test,expect } from "@playwright/test";
import loginData from "../../test-data/loginData.json";
import { pageObjectManager } from "../../page-object/pageObjectManager";
import dashboardData from "../../test-data/dashboardData.json";
import paymentData from "../../test-data/paymentData.json"



test("Create and Order Product",async({page})=>
{

const poManager = new pageObjectManager(page);
const dashboardPage = poManager.getDashboardPage();
const myCartPage =poManager.getMyCartPage();
const paymentPage =poManager.getpaymentPage();


await page.goto(loginData.url);
await dashboardPage.selectProductToCart(dashboardData.prodToAddCart);
await expect(dashboardPage.toastMsge).toHaveText(dashboardData.prodAddedMsge);
console.log(await dashboardPage.toastMsge.textContent());
await dashboardPage.navigateToCartBtn();
await myCartPage.clickOnCheckoutBtn();
await expect (paymentPage.placeOrderBtn).toBeVisible();
await paymentPage.enterCardName(paymentData.cardName);
await paymentPage.enterCreditCardNumber(paymentData.couponCode);
await paymentPage.enterCvvCode(paymentData.cvvCode);
await paymentPage.applyCouponCode(paymentData.couponCode);
await expect (paymentPage.couponTxt).toHaveText(paymentData.appliedCouponText);
await paymentPage.selectCountry(paymentData.country);
await paymentPage.clickOnPlaceOrderBtn();




})