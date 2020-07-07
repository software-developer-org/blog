import { PageObject } from '../pageObject/pageObject';

describe('Testing blog navbar contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000');
  });
  // Testing if the page Blog in navbar split is ok
  it('check for navbar content', () => {
    const blogElements = page.getNavbarBlogs();
    // Iterate through the blog titles and test if they exists
    blogElements.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
