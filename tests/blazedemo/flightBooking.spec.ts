import { test, expect } from '@playwright/test';
import { BlazeHomePage } from '../../pages/blazedemo/home.page';

test('Search flight on BlazeDemo', async ({ page }) => {
  const homePage = new BlazeHomePage(page);
  await homePage.goto();
  await homePage.searchFlights('Boston', 'London');
  await expect(page.locator('h3')).toContainText('Flights from Boston to London');
});
