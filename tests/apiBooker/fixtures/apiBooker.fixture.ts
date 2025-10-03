import { test as baseTest, expect } from "@playwright/test";

type apiBookerFixture = {
  apiToken: string | null;
  bookingID: number | null;
};

export const test = baseTest.extend<apiBookerFixture>({
  apiToken: async ({ request }, use) => {
    const response = await request.post(
      "https://restful-booker.herokuapp.com/auth",
      {
        data: { username: "admin", password: "password123" },
      }
    );
    const responseBody = await response.json();
    await use(responseBody.token);
  },
  bookingID: async ({ request }, use) => {
    const response = await request.get(
      "https://restful-booker.herokuapp.com/booking"
    );
    const responseBody = await response.json();
    const bookingId = responseBody[0].bookingid;
    await use(bookingId);
  },
});
export { expect } from "@playwright/test";
