import { PageObject } from '../pageObject/pageObject';

describe('Testing bookmark overview contract', () => {
  const page = new PageObject();

  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000/bookmark.html');
  });

  it('check for overview content', () => {
    const bookmarkElement = page.getBookmarkOverview();
    bookmarkElement.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
