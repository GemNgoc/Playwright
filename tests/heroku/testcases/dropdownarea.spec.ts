import { test, expect } from "../fixtures/heroku.fixture";

test("Dropdown Area - Select Options", async ({ dropdownAreaPage }) => {
  await dropdownAreaPage.goto();

  // Select an option from the dropdown
  await dropdownAreaPage.selectFruits(["Apple", "Orange"]);

  // Verify that the option is selected
  await expect(dropdownAreaPage.dropdownArea).toHaveValues(["apple", "orange"]);
});
