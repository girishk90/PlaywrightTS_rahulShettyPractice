import{Page} from "@playwright/test";
import {loginPage} from "./loginPage";
import { dashboardPage } from "./dashboardPage";
import { viewProdPage } from "./viewProdPage";
import { myCartPage } from './myCartPage';
import { paymentPage } from "./paymentPage";

export class pageObjectManager
{
readonly page:Page;
readonly loginPage:loginPage;
readonly dashboardPage:dashboardPage;
readonly viewProdPage:viewProdPage;
readonly myCartPage:myCartPage;
readonly paymentPage:paymentPage;

constructor(page:Page)
{
    this.page=page;
    this.loginPage=new loginPage(page);
    this.dashboardPage =new dashboardPage(page);
    this.viewProdPage = new viewProdPage(page);
    this.myCartPage = new myCartPage(page);
    this.paymentPage = new paymentPage(page);
}

getloginPage():loginPage
{
    return this.loginPage;
}

getDashboardPage():dashboardPage
{
    return this.dashboardPage;
}

getViewProdPage():viewProdPage
{
    return this.viewProdPage;
}

getMyCartPage():myCartPage
{
    return this.myCartPage;
}

getpaymentPage():paymentPage
{
    return this.paymentPage;
}





}