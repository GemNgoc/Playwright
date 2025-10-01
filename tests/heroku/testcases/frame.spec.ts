import { test, expect } from "../fixtures/heroku.fixture";

test("Verify text in frames", async ({ framePage }) => {
  await framePage.goto();

  // Verify text in left frame
  const leftFrameText = framePage.getFrameText(framePage.leftFrame, "LEFT");
  await expect(leftFrameText).toHaveText("LEFT");

  // Verify text in middle frame
  const middleFrameText = framePage.getFrameText(
    framePage.middleFrame,
    "MIDDLE"
  );
  await expect(middleFrameText).toHaveText("MIDDLE");

  // Verify text in right frame
  const rightFrameText = framePage.getFrameText(framePage.rightFrame, "RIGHT");
  await expect(rightFrameText).toHaveText("RIGHT");

  // Verify text in bottom frame
  const bottomFrameText = framePage.getFrameText(
    framePage.bottomFrame,
    "BOTTOM"
  );
  await expect(bottomFrameText).toHaveText("BOTTOM");
});
