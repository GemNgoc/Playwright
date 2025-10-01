import { Page, Locator } from "@playwright/test";

export class DropdownAreaPage {
  readonly page: Page;
  readonly dropdownArea: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdownArea = page.locator("#fruits");
  }

  async goto() {
    await this.page.goto("https://output.jsbin.com/osebed/2");
  }

  async selectFruits(fruits: string[]) {
    await this.dropdownArea.selectOption(
      fruits.map((fruit) => ({ label: fruit }))
    );
  }
}
