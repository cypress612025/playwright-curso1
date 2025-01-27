import test from "@playwright/test";
import { LoginPage } from "./PageLogin/loginpage";

test('login', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/');
  
  const loginPage=new LoginPage(page)
  loginPage.fillUsername('standard_user')
  // page.screenshot({path:'screenshopts/login.png', fullPage: true})
  //como tomar screenshot asociandola a un test
  
  loginPage.fillPasswor('secret_sauce')
  loginPage.clicOnLogin()
  await testInfo.attach('login', {
    body: await page.screenshot(),
    contentType:'imagen/png'
  })
  await page.pause()
  //loginPage.LoginOnSaucedemo('locked_out_user','secret_sauce')
 
  //como tomar un  screenshot
  //await page.screenshot({path:'screenshopts/login.png'})
  //loginPage.checkLooginok()
  await page.pause()
  

});
