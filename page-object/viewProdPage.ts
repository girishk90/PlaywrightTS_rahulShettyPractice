import{Page,Locator} from "@playwright/test"

export class viewProdPage
{
 readonly page:Page;
 readonly prodName:Locator;
 readonly addToCartBtn:Locator;



 constructor(page:Page)
 {
    this.page=page;
    this.prodName=page.locator("div.rtl-text").locator("h2")
    this.addToCartBtn= page.getByRole('button',({name:"Add to Cart"}))
 }

async clickOnAddToCartBtn()
{
   await this.addToCartBtn.click();
}


}