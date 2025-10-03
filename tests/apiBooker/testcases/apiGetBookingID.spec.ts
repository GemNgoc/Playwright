import { test, expect } from "@playwright/test";

test(`get booking ids`, async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );

  // expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(Array.isArray(responseBody)).toBeTruthy();
  expect(responseBody.length).toBeGreaterThan(0);
  responseBody.forEach((item: any) => {
    expect(item).toHaveProperty("bookingid");
    expect(typeof item.bookingid).toBe("number");
  });
});
