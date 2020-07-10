import { PageObject } from '../pageObject/pageObject';

describe('Testing blog header contract', () => {
  const page = new PageObject();

  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000');
  });

  // Check if the navigation buttons exist
  it('test navigation buttons exist', () => {
    const navigationBlogButtons = page.getNavigationButtons();

    // get buttons from page - for each:
    navigationBlogButtons.forEach((button) => {
      // - assert button exist
      expect(button).to.be.ok;
    });
  });

  it('test click on navigation buttons', () => {
    // for each button:
    // - click on the blog button
    // - assert location changed to blog url
  });

  it('test back button', () => {
    // visit about
    // remember location (from about)
    // visit another page
    // remember another location...
    // ... and assert != location
    // press back button
    // assert current location === location
  });
});
