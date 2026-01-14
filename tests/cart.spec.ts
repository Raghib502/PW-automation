import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

test("User can add product to cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  await productsPage.addProductToCart();
  await productsPage.goToCart();

  await expect(page.locator(".cart_item")).toHaveCount(1);
});
