import { test, expect } from "../fixtures/heroku.fixture";

test("Login with valid credentials", async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login("tomsmith", "SuperSecretPassword!");

  // Verify successful login
  await expect(
    loginPage.getSuccessMessage("You logged into a secure area!")
  ).toBeVisible();

  // Logout & Verify successful logout
  await loginPage.logout();
  await expect(
    loginPage.getSuccessMessage("You logged out of the secure area!")
  ).toBeVisible();
});
