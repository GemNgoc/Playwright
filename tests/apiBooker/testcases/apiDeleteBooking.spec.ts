import { test, expect } from "../fixtures/apiBooker.fixture";

test(`update booking`, async ({ request, apiToken, bookingID }) => {
  //Call request to delete booking
  console.log(`bookingID: ${bookingID}`);
  const deleteBookingIdRes = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingID}`,
    {
      headers: {
        Cookie: `token=${apiToken}`, // Include the auth token in the request headers
      },
    }
  );

  //Assertion
  expect(deleteBookingIdRes.status()).toBe(201);
  expect(deleteBookingIdRes).toBeTruthy();
});
