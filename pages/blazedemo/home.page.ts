import { Page, Locator } from '@playwright/test';

export class BlazeHomePage {
  readonly page: Page;
  readonly fromCity: Locator;
  readonly toCity: Locator;
  readonly findFlightsBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fromCity = page.locator('select[name="fromPort"]');
    this.toCity = page.locator('select[name="toPort"]');
    this.findFlightsBtn = page.locator('input[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://blazedemo.com/');
  }

  async searchFlights(from: string, to: string) {
    await this.fromCity.selectOption(from);
    await this.toCity.selectOption(to);
    await this.findFlightsBtn.click();
  }
}
