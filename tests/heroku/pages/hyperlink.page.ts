import { Page, Locator } from "@playwright/test";

export class HyperlinkPage {
  readonly page: Page;
  readonly hyperlink: Locator;
  readonly hereLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hereLink = page.getByRole("link", { name: "here" });
  }

  async goto() {
    await this.page.goto("/status_codes");
  }

  async clickHyperlink(name: string) {
    await this.page.getByRole("link", { name: name }).click();
  }

  getSuccessMessage(successMessage: string): Locator {
    return this.page.getByText(successMessage);
  }

  async backToHome() {
    await this.hereLink.click();
  }
}
