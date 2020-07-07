import { PageObject } from '../pageObject/pageObject';

describe('Testing about navbar contract', () => {
  const page = new PageObject();
  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000/about.html');
  });
  // Testing if the page About in navbar split is ok
  it('check for navbar content', () => {
    const aboutElement = page.getNavbarAbout();
    aboutElement.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
