import { Testunitng2pacitoPage } from './app.po';

describe('testunitng2pacito App', () => {
  let page: Testunitng2pacitoPage;

  beforeEach(() => {
    page = new Testunitng2pacitoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
