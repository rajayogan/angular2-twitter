import { TwitterappPage } from './app.po';

describe('twitterapp App', function() {
  let page: TwitterappPage;

  beforeEach(() => {
    page = new TwitterappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
