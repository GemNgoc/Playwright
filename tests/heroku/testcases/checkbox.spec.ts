import { test, expect } from "../fixtures/heroku.fixture";

test("Checkboxes can be checked and unchecked", async ({ checkboxPage }) => {
  await checkboxPage.goto();
  await checkboxPage.checkCheckbox1();
  await checkboxPage.uncheckCheckbox2();
  await expect(checkboxPage.checkbox1).toBeChecked();
  await expect(checkboxPage.checkbox2).not.toBeChecked();
});
