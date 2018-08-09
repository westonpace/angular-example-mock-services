import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a simulated stock price', async () => {
    await page.navigateTo();
    await browser.sleep(2000);
    const stockPrice = await page.getStockText();
    expect(['125', '150', '117.3'].indexOf(stockPrice)).toBeGreaterThanOrEqual(0);
  });
});
