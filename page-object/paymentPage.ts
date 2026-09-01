import { Page, Locator } from "@playwright/test";

export class paymentPage {
    readonly page: Page;
    readonly inputFields: Locator;
    readonly ccTxtField: Locator;
    readonly cvvCode: Locator;
    readonly cardName: Locator;
    readonly applyCouponTxt: Locator;
    readonly applyCoupnBtn: Locator;
    readonly cntrySelectionTxt: Locator;
    readonly placeOrderBtn: Locator;
    readonly couponTxt: Locator;
    readonly cntryResultList: Locator;
    readonly cntryNames: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputFields = page.locator("div.field")
        this.ccTxtField = this.inputFields.filter({ hasText: "Credit Card Number" }).locator("input");
        this.cvvCode = this.inputFields.filter({ hasText: "CVV Code" }).locator("input");
        this.cardName = this.inputFields.filter({ hasText: "Name on Card" }).locator("input");
        this.applyCouponTxt = this.inputFields.filter({ hasText: "Apply Coupon" }).locator("input");
        this.applyCoupnBtn = page.getByRole('button', { name: "Apply Coupon" });
        this.cntrySelectionTxt = page.getByPlaceholder("Select Country");
        this.placeOrderBtn = page.getByText("Place Order");
        this.couponTxt = page.locator("p.mt-1");
        this.cntryResultList = page.locator("section.ta-results")
        this.cntryNames = this.cntryResultList.locator("button")
    }


    async enterCreditCardNumber(ccNumber: string) {
        await this.ccTxtField.fill(ccNumber);
    }

    async enterCvvCode(cvvNumber: string) {
        await this.cvvCode.fill(cvvNumber);
    }

    async enterCardName(name: string) {
        await this.cardName.fill(name);
    }

    async applyCouponCode(couponCode: string) {
        await this.applyCouponTxt.fill(couponCode);
        await this.applyCoupnBtn.click();
    }

    async selectCountry(cntryName: string) {
        await this.cntrySelectionTxt.pressSequentially(cntryName);
        for (let i = 0; i < await this.cntryNames.count(); i++) {
            if (await this.cntryNames.nth(i).textContent() === cntryName) {
                await this.cntryNames.nth(i).click();
            }
        }


    }

    async clickOnPlaceOrderBtn() {
        await this.placeOrderBtn.click();

    }

}