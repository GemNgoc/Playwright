import { Page, Locator } from "@playwright/test";

export class BasicPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.logoutButton = page.getByRole("link", { name: "Logout" });
  }

  async goto() {
    await this.page.goto("/login");
  }
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async logout() {
    this.logoutButton.click();
  }
  getSuccessMessage(successMessage: string): Locator {
    return this.page.getByText(successMessage);
  }
}
