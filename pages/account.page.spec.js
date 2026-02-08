class AccountPage {
  constructor(page) {
    this.page = page;
    this.myAccountLink = page.locator('a').filter({ hasText: 'My Account' }).first()
    this.editAccountLink = page.locator('a:text("Edit Account")')
    this.passwordLink = page.locator('a:text("Password")')
    this.addressBookLink = page.locator('a:text("Address Book")')
    this.wishListLink = page.locator('a').filter({ hasText: 'Wish List' }).first()
  }

  async clickMyAccount() {
    await this.myAccountLink.click();
  }

  async clickEditAccount() {
    await this.editAccountLink.click();
  }

  async clickPassword() {
    await this.passwordLink.click();
  }

  async clickAddressBook() {
    await this.addressBookLink.click();
  }

  async clickWishList() {
    await this.wishListLink.click();
  }
}

module.exports = { AccountPage };
