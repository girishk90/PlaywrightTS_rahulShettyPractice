import { Page,Locator } from "@playwright/test";

export class loginPage
    {

        readonly page:Page;
        readonly emailTxt:Locator;
        readonly passwordTxt:Locator;
        readonly loginBtn:Locator;



constructor(page:Page)
{
    this.page=page;
    this.emailTxt = page.getByPlaceholder("email@example.com");
    this.passwordTxt =page.getByPlaceholder("enter your passsword");
    this.loginBtn=page.getByRole('button', {name:"Login"})
}

async login(userName:string,passsword:string)
{
await this.emailTxt.fill(userName);
await this.passwordTxt.fill(passsword);
await this.loginBtn.click();
}





    }
