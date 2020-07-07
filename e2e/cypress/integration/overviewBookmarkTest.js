import { PageObject } from '../pageObject/pageObject';

describe('Testing bookmark overview contract', () => {
  const page = new PageObject();

  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000/bookmark.html');
  });
  // Testing if the page Bookmark in overview split is ok
  it('check for overview content', () => {
    const bookmarkElement = page.getBookmarkOverview();
    // Iterate through the bookmark titles and content in overview to test them
    bookmarkElement.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
