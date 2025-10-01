import { test as baseTest } from "@playwright/test";
import { BasicPage } from "../pages/1basic.page";

type BasicFixtures = {
  //cách khai báo cấu trúc dữ liệu trong typescript, trong JS không có
  basicPage: BasicPage;
};

export const test = baseTest.extend<BasicFixtures>({
  basicPage: async ({ page }, use) => {
    const basicPage = new BasicPage(page);
    await use(basicPage);
  },
});

export { expect } from "@playwright/test";
