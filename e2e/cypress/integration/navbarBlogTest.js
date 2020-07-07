import { PageObject } from '../pageObject/pageObject';

describe('Testing blog navbar contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000');
  });

  it('check for navbar content', () => {
    const blogElements = page.getNavbarBlogs();
    blogElements.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
