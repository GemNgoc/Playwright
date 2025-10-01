import { Page, Locator } from "@playwright/test";
export class HoverPage {
  readonly page: Page;
  readonly hoverAvatars: Locator;
  //   readonly tooltip: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hoverAvatars = page.getByRole("img", { name: "User Avatar" });
    // this.tooltip = page.getByTestId("tooltip");
  }

  async goto() {
    await this.page.goto("/hovers");
  }

  async hoverOverAvatar(index: number) {
    await this.hoverAvatars.nth(index).hover();
  }

  getTooltipText(username: string): Locator {
    return this.page.getByText(username);
  }
}
