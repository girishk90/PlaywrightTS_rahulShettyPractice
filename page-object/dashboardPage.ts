import { Page, Locator } from "@playwright/test";

export class dashboardPage {
    readonly page: Page;
    readonly homeTxt: Locator;
    readonly minRangeTxt: Locator;
    readonly maxRangeTxt: Locator;
    readonly prodData: Locator;
    readonly prodPrice:Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.homeTxt = page.getByText("Home").last();
        this.minRangeTxt = page.getByPlaceholder("Min Price").last();
        this.maxRangeTxt = page.getByPlaceholder("Max Price").last();
        this.prodData = page.locator("div.card-body");
        this.prodPrice = this.prodData.locator("div.text-muted");

    }


    async enterMinAmount(minAmount:string)
    {
         await this.minRangeTxt.fill(minAmount);
    }

    async enterMaxAmount(maxAmount:string)
    {
         await this.maxRangeTxt.fill(maxAmount);
    }



async searchResult(): Promise<number[]>
{
    const prodPrices = await this.prodPrice.allTextContents();
     return prodPrices.map(price =>Number(price.split(" ")[1]))
};}