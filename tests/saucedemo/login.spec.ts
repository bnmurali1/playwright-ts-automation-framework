import { test, expect } from '@playwright/test';
import { SauceLoginPage } from '../../pages/saucedemo/login.page';
import { ProductsPage } from '../../pages/saucedemo/products.page';

test('Login to Saucedemo with valid credentials', async ({ page }) => {
  const loginPage = new SauceLoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(productsPage.title).toHaveText('Products');
});
