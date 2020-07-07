import { PageObject } from '../pageObject/pageObject';

describe('Testing about overview contract', () => {
  const page = new PageObject();

  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000/about.html');
  });
  // Testing if the page About in overview split is ok
  it('check for overview content', () => {
    const aboutElement = page.getAboutOverview();
    // Iterate through the About overview titles and content to test them
    aboutElement.forEach((element) => {
      expect(element).to.be.ok;
    });
  });
});
