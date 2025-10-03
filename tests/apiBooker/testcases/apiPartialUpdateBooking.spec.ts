import { test, expect } from "../fixtures/apiBooker.fixture";

test(`update booking partially`, async ({ request, apiToken, bookingID }) => {
  //Call request to update booking
  await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingID}`,
    {
      data: {
        firstname: "FN_updated",
        lastname: "LN_updated",
        totalprice: 122,
        depositpaid: true,
        bookingdates: { checkin: "2025-07-10", checkout: "2025-07-12" },
        additionalneeds: "Dinner",
      },
      headers: {
        // "Content-Type": "application/json",
        Cookie: `token=${apiToken}`, // Include the auth token in the request headers
      },
    }
  );

  //Call request to update booking partially
  const partialUpdateBookingIdRes = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingID}`,
    {
      data: {
        firstname: "FN_partial_updated",
        lastname: "LN_partial_updated",
        totalprice: 123,
        depositpaid: false,
        bookingdates: { checkin: "2025-08-15", checkout: "2025-08-17" },
        // additionalneeds: "Dinner",
      },
      headers: {
        // "Content-Type": "application/json",
        Cookie: `token=${apiToken}`, // Include the auth token in the request headers
      },
    }
  );

  //Assert status code and response body
  // expect(updateBookingIdRes.status()).toBe(200);
  const responseBody = await partialUpdateBookingIdRes.json();
  console.log(responseBody);
  expect(responseBody).toEqual({
    firstname: "FN_partial_updated",
    lastname: "LN_partial_updated",
    totalprice: 123,
    depositpaid: false,
    bookingdates: { checkin: "2025-08-15", checkout: "2025-08-17" },
    additionalneeds: "Dinner",
  });
});
