import { XyyPage } from './app.po';

describe('xyy App', () => {
  let page: XyyPage;

  beforeEach(() => {
    page = new XyyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
