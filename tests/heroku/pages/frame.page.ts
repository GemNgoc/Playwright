import { Page, Locator, FrameLocator } from "@playwright/test";

export class FramePage {
  readonly page: Page;
  readonly topFrame: FrameLocator;
  readonly leftFrame: FrameLocator;
  readonly middleFrame: FrameLocator;
  readonly rightFrame: FrameLocator;
  readonly bottomFrame: FrameLocator;

  constructor(page: Page) {
    this.page = page;
    this.topFrame = page.frameLocator('[name="frame-top"]');
    this.leftFrame = this.topFrame.frameLocator('[name="frame-left"]');
    this.middleFrame = this.topFrame.frameLocator('[name="frame-middle"]');
    this.rightFrame = this.topFrame.frameLocator('[name="frame-right"]');
    this.bottomFrame = page.frameLocator('[name="frame-bottom"]');
  }

  async goto() {
    await this.page.goto("/nested_frames");
  }

  getFrameText(frame: FrameLocator, text: string): Locator {
    if (frame === this.leftFrame) {
      return frame.locator("body").getByText(text);
    } else if (frame === this.middleFrame) {
      return frame.locator("body").getByText(text);
    } else if (frame === this.rightFrame) {
      return frame.locator("body").getByText(text);
    } else return frame.locator("body").getByText(text);
  }
}
