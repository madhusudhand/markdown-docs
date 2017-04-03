import { MarkdownDocsPage } from './app.po';

describe('markdown-docs App', () => {
  let page: MarkdownDocsPage;

  beforeEach(() => {
    page = new MarkdownDocsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
