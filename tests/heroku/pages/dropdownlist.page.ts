import { Page, Locator } from "@playwright/test";

export class DropdownListPage {
  readonly page: Page;
  readonly dropdownList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdownList = page.locator("#dropdown");
  }
  async goto() {
    await this.page.goto("/dropdown");
  }

  async selectOption(text: string) {
    await this.dropdownList.selectOption({ label: text });
  }
}
