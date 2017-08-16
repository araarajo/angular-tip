import { AngularTipPage } from './app.po';

describe('angular-tip App', () => {
  let page: AngularTipPage;

  beforeEach(() => {
    page = new AngularTipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
