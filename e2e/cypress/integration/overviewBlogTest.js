import { PageObject } from '../pageObject/pageObject';

describe('Testing blog overview contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000');
  });

  it('check for overview content', () => {
    const blogElement = page.getBlogOverview();
    blogElement.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
