import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Tests", () => {
  test("Valid user should login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory/);
  });

  test("Invalid password should show error message", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "wrong_password");

    await expect(loginPage.errorMessage).toContainText(
      "Username and password do not match"
    );
  });
});
