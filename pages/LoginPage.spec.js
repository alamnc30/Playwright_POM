const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('input[value="Login"]');
  }

  async goto() {
    await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoggedIn() {
    // Example: check that "My Account" heading is visible
    await expect(this.page.locator('h2:has-text("My Account")')).toBeVisible();
  }



  async close() {    await this.page.close();
  }
}

module.exports = { LoginPage };
