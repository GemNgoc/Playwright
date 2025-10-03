import { test, expect } from "@playwright/test";

test(`get booking by id`, async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking/2"
  );

  // expect(response.status()).toBe(200);
  const responseBody = await response.json();
  //Verify response has expected properties
  expect(responseBody).toHaveProperty("firstname");
  expect(typeof responseBody.firstname).toBe("string");
  expect(responseBody).toHaveProperty("lastname");
  expect(typeof responseBody.lastname).toBe("string");
  expect(responseBody).toHaveProperty("totalprice");
  expect(typeof responseBody.totalprice).toBe("number");
  expect(responseBody).toHaveProperty("depositpaid");
  expect(typeof responseBody.depositpaid).toBe("boolean");
  expect(responseBody).toHaveProperty("bookingdates");
  expect(typeof responseBody.bookingdates).toBe("object");
  expect(responseBody.bookingdates).toHaveProperty("checkin");
  expect(typeof responseBody.bookingdates.checkin).toBe("string");
  expect(responseBody.bookingdates).toHaveProperty("checkout");
  expect(typeof responseBody.bookingdates.checkout).toBe("string");
});
