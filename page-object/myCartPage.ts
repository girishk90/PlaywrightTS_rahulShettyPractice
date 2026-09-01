import{Page,Locator} from "@playwright/test";

export class myCartPage
{
 readonly page:Page;
 readonly deleteBtn:Locator;
 readonly checkoutBtn:Locator;

constructor(page:Page)
{
this.page =page
this.deleteBtn = page.locator("button.btn-danger");
this.checkoutBtn = page.getByRole('button',({name:"Checkout"}));
}


async clickOnDeleteBtn()
{
    await this.deleteBtn.click();
}

async clickOnCheckoutBtn()
{
    await this.checkoutBtn.click();
}














}