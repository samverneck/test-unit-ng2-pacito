import { browser, by, element } from 'protractor';

export class Testunitng2pacitoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
