import { test, expect } from "../fixtures/heroku.fixture";

test("Clicking hyperlink", async ({ hyperlinkPage }) => {
  await hyperlinkPage.goto();

  await hyperlinkPage.clickHyperlink("200");
  await expect(
    hyperlinkPage.getSuccessMessage("This page returned a 200 status code.")
  ).toBeVisible();
  hyperlinkPage.backToHome();

  await hyperlinkPage.clickHyperlink("301");
  await expect(
    hyperlinkPage.getSuccessMessage("This page returned a 301 status code.")
  ).toBeVisible();
  hyperlinkPage.backToHome();

  await hyperlinkPage.clickHyperlink("404");
  await expect(
    hyperlinkPage.getSuccessMessage("This page returned a 404 status code.")
  ).toBeVisible();
  hyperlinkPage.backToHome();

  await hyperlinkPage.clickHyperlink("500");
  await expect(
    hyperlinkPage.getSuccessMessage("This page returned a 500 status code.")
  ).toBeVisible();
  hyperlinkPage.backToHome();
});
