import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getStockText() {
    return element(by.css('span')).getText();
  }
}
