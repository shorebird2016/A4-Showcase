import { ShowcasePage } from './app.po';

describe('showcase App', () => {
  let page: ShowcasePage;

  beforeEach(() => {
    page = new ShowcasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
