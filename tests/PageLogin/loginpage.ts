import { expect, Location, Locator, Page } from "@playwright/test";

export class LoginPage{

    private userNameTextbox: Locator
    private passworTextbox: Locator
    private loginButton: Locator
    private loginok:Locator
    constructor(page:Page){
        this.userNameTextbox= page.getByRole('textbox',{name:'Username'})
        this.passworTextbox= page.getByRole('textbox',{name:'Password'})
        this.loginButton=page.getByRole('button',{name:'Login'})
        this.loginok= page.locator("//a[contains(@class, 'shopping_cart_link')]")
        
    }
    async fillUsername(username){
       await this.userNameTextbox.fill(username)
    }
    async fillPasswor(password){
       await this.passworTextbox.fill(password)
    }
    async clicOnLogin(){
       await this.loginButton.click()
    }
    async LoginOnSaucedemo(username, password){
        await this.fillUsername(username)
        await this.fillPasswor(password)
        await this.clicOnLogin()
    }
    //aserciones
    async checkLooginok(){
        await expect(this.loginok).toBeVisible()

    }

}