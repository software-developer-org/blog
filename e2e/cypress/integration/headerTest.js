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

  /*
  it('test click on navigation buttons', () => {
    // for each button:
    // - click on the blog button
    // - assert location changed to blog url
  });
  */
  /*
  it('test navigation buttons exist', () => {
    const navigateButtons = page.getNavigationButtons();
    // get buttons from page - for each:
    navigateButtons.forEach((element) => {
      // - assert button exist
      expect(element).to.be.ok;
    });
    // Click on the buttons to test if they navigate or load the page they should load
    navigateButtons.forEach((element) => {
      cy.get(`#btn${element} > a`).click();
    });
  });
*/
  // Check if the back button does the function it should to
  it('check back button function', () => {
    //page.getBackButton();

    // Going on the About page (as example) first to test later if back button navigate us back to the main page
    cy.get(`#btn${'About'} > a`).click();

    // Get the back button and test its function
    cy.get(`#btn${'Back'} > a`).click();
    expect(`#btn${'Back'} > a`).to.be.ok;

    // Now back button after click on it, should navigate us to the main page, location
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');
    });
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
