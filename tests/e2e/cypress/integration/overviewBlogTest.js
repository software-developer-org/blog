import { PageObject } from '../pageObject/pageObject';

describe('Testing blog overview contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000');
  });
  // Testing if the page Blog in overview split is ok
  it('check for overview content', () => {
    const blogElement = page.getBlogOverview();
    // Iterate through the Blog titles and content in overview to test them
    blogElement.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
