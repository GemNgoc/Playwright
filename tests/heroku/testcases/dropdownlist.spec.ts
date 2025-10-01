import { test, expect } from "../fixtures/heroku.fixture";

test("Dropdown List - Select Option", async ({ dropdownListPage }) => {
  await dropdownListPage.goto();

  // Select an option from the dropdown
  await dropdownListPage.selectOption("Option 1");

  // Verify that the selected option is correct
  await expect(dropdownListPage.dropdownList).toHaveValue("1");

  // Select an option from the dropdown
  await dropdownListPage.selectOption("Option 2");

  // Verify that the selected option is correct
  await expect(dropdownListPage.dropdownList).toHaveValue("2");
});
