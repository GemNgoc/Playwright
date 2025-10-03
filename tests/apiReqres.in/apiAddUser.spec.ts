import { test, expect } from "@playwright/test";

test(`create authen token`, async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: { name: "LamLam", job: "Senior QA" },
    headers: {
      // "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });

  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  expect(responseBody.name).toBe("LamLam");
  expect(responseBody.job).toBe("Senior QA");
  expect(responseBody.id).toBeDefined();
  expect(responseBody.createdAt).toBeDefined();
});
