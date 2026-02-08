const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.spec.js');
const { AccountPage } = require('../pages/account.page.spec.js');   

test('Login and navigate account links', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  // Go to login page
  await loginPage.goto();

  // Perform login
  await loginPage.login('john.doe@example.com', 'SecurePass123!');

  // Navigate through account links
  await accountPage.clickMyAccount();
  await accountPage.clickEditAccount();
  await accountPage.clickPassword();
  await accountPage.clickAddressBook();
  await accountPage.clickWishList();
});
