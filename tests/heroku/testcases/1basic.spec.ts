import { test, expect } from "../fixtures/1basic.fixture";

test("Login with valid credentials", async ({ basicPage }) => {
  // Navigate to the login page
  await basicPage.goto();
  await basicPage.login("tomsmith", "SuperSecretPassword!");

  // Verify successful login
  await expect(
    basicPage.getSuccessMessage("You logged into a secure area!")
  ).toBeVisible();

  await basicPage.logout();
  // Verify successful logout
  await expect(
    basicPage.getSuccessMessage("You logged out of the secure area!")
  ).toBeVisible();
});
