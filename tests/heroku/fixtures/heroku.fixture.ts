import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { CheckboxPage } from "../pages/checkbox.page";
import { DropdownListPage } from "../pages/dropdownlist.page";
import { DropdownAreaPage } from "../pages/dropdownarea.page";
import { HoverPage } from "../pages/hover.page";
import { HyperlinkPage } from "../pages/hyperlink.page";
import { FramePage } from "../pages/frame.page";

type HerokuFixtures = {
  //tuple of pages
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  dropdownListPage: DropdownListPage;
  dropdownAreaPage: DropdownAreaPage;
  hoverPage: HoverPage;
  hyperlinkPage: HyperlinkPage;
  framePage: FramePage;
};

export const test = baseTest.extend<HerokuFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxPage(page);
    await use(checkboxPage);
  },
  dropdownListPage: async ({ page }, use) => {
    const dropdownListPage = new DropdownListPage(page);
    await use(dropdownListPage);
  },
  dropdownAreaPage: async ({ page }, use) => {
    const dropdownAreaPage = new DropdownAreaPage(page);
    await use(dropdownAreaPage);
  },
  hoverPage: async ({ page }, use) => {
    const hoverPage = new HoverPage(page);
    await use(hoverPage);
  },
  hyperlinkPage: async ({ page }, use) => {
    const hyperlinkPage = new HyperlinkPage(page);
    await use(hyperlinkPage);
  },
  framePage: async ({ page }, use) => {
    const framePage = new FramePage(page);
    await use(framePage);
  },
});

export { expect } from "@playwright/test";
