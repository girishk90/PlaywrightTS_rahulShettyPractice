import{Page} from "@playwright/test";
import {loginPage} from "./loginPage";
import { dashboardPage } from "./dashboardPage";

export class pageObjectManager
{
readonly page:Page;
readonly loginPage:loginPage;
readonly dashboardPage:dashboardPage;

constructor(page:Page)
{
    this.page=page;
    this.loginPage=new loginPage(page);
    this.dashboardPage =new dashboardPage(page);
}

getloginPage():loginPage
{
    return this.loginPage;
}

getDashboardPage():dashboardPage
{
    return this.dashboardPage;
}







}