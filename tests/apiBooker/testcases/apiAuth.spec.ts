import { test, expect } from "@playwright/test";

test(`create authen token`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin", password: "password123" },
    }
  );

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.token).toBeDefined();
});

test(`Invalid login with incorrect username`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "wronguser", password: "password123" },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});

test(`Invalid login with incorrect password`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin", password: "wrongpassword" },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});

test(`Invalid login with both username & password invalid`, async ({
  request,
}) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "wronguser", password: "wrongpassword" },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});

test(`Login with empty fields`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "", password: "" },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});

test(`Login with password as only spaces`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin", password: "   " },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});

test(`Login with leading/trailing spaces in username & password`, async ({
  request,
}) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "   admin   ", password: "   password123   " },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});

test(`Login with special characters in username`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "!@#$%^&*()", password: "password123" },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});

test(`Login with unicode characters in password`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin", password: "pässword123" },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});

test(`Login with case sensitivity check`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "Admin", password: "Password123" },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});
test(`Login with SQL Injection attempt`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin'", password: "password123" },
    }
  );

  //   expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.reason).toBe("Bad credentials");
});
