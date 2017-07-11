import { EdgeuxCssPage } from './app.po';

describe('edgeux-css App', () => {
  let page: EdgeuxCssPage;

  beforeEach(() => {
    page = new EdgeuxCssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
