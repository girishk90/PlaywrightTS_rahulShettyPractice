import { Page, Locator } from "@playwright/test";
import { promises } from "node:dns";

export class dashboardPage {
    readonly page: Page;
    readonly homeTxt: Locator;
    readonly minRangeTxt: Locator;
    readonly maxRangeTxt: Locator;
    readonly prodData: Locator;
    readonly prodPrice: Locator;
    readonly searchTxt: Locator;
    readonly prodNames: Locator;
    readonly toastMsge:Locator;
    readonly fashioncheckbox:Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeTxt = page.getByText("Home").last();
        this.minRangeTxt = page.getByPlaceholder("Min Price").last();
        this.maxRangeTxt = page.getByPlaceholder("Max Price").last();
        this.prodData = page.locator("div.card-body");
        this.prodPrice = this.prodData.locator("div.text-muted");
        this.searchTxt = page.getByPlaceholder("search").last();
        this.prodNames = this.prodData.locator("h5");
        this.toastMsge =page.locator("div#toast-container");
        this.fashioncheckbox=page.locator("div.border-bottom").filter({hasText:"Categories"}).locator("div.form-group").filter({ hasText: 'fashion' })
    .getByRole('checkbox')



    }


    async enterMinAmount(minAmount: string) {
        await this.minRangeTxt.fill(minAmount);
    }

    async enterMaxAmount(maxAmount: string) {
        await this.maxRangeTxt.fill(maxAmount);
    }



    async searchResult(): Promise<number[]> {
        const prodPrices = await this.prodPrice.allTextContents();
        return prodPrices.map(price => Number(price.split(" ")[1]))
    };

    async searchByProductName(prodName: string) {
        await this.searchTxt.fill(prodName)
    }

async selectFashionOption()
{
    await this.fashioncheckbox.click();
}
}
