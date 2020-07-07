import { PageObject } from '../pageObject/pageObject';

describe('Testing bookmark navbar contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000/bookmark.html');
  });
  // Testing if the page Bookmark in navbar split is ok
  it('check for navbar content', () => {
    const bookmarkElement = page.getNavbarBookmark();
    // Iterate through the bookmark titles in navbar and test them
    bookmarkElement.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
