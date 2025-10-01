import { test, expect } from "../fixtures/heroku.fixture";

test("Hover over avatars", async ({ hoverPage }) => {
  await hoverPage.goto();

  // Hover over the avatars
  await hoverPage.hoverOverAvatar(0); // Hover over the first avatar
  await expect(hoverPage.getTooltipText("name: user1")).toBeVisible();

  await hoverPage.hoverOverAvatar(1); // Hover over the second avatar
  await expect(hoverPage.getTooltipText("name: user2")).toBeVisible();

  await hoverPage.hoverOverAvatar(2); // Hover over the third avatar
  await expect(hoverPage.getTooltipText("name: user3")).toBeVisible();
});
