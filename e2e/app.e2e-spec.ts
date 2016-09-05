import { LostWorldPage } from './app.po';

describe('lost-world App', function() {
  let page: LostWorldPage;

  beforeEach(() => {
    page = new LostWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
