const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.spec.js');

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Step 1: Navigate to login page
  await loginPage.goto();

  // Step 2: Perform login
  await loginPage.login('john.doe@example.com', 'SecurePass123!');

  // Step 3: Verify login success
  await loginPage.assertLoggedIn();

  await loginPage.close();
});

