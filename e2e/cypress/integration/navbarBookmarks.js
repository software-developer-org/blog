import { PageObject } from '../pageObject/pageObject';

describe('Testing bookmark navbar contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000/bookmark.html');
  });

  it('check for navbar content', () => {
    const bookmarkElement = page.getNavbarBookmark();
    bookmarkElement.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
