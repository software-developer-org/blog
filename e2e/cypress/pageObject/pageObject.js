export class PageObject {
  navigate() {
    cy.visit('http://localhost:3000');
  }

  checkHeaderButtons(buttonID) {
    // Click on the button
    cy.get(`#btn${buttonID} > a`).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/${buttonID.toLowerCase()}.html`);
    });
  }

  checkBackButton() {
    cy.get('#btnAbout >a').click();
    cy.get('#btnBack > a').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/');
    });
  }

  checkNavbarBlogs(blogNubmer) {
    // Click on the Blog button
    cy.get('#btnBlog').click();
    // Click on the 1st Blog to see if it is empty or not
    cy.get(`:nth-child(${blogNubmer}) > h4`).click().should('not.be.empty');
  }

  checkNavbarBookmark(bookmarkNumber) {
    // Click on the Bookmark button
    cy.get('#btnBookmark').click();
    // Click on the 1st bookmark to test if it is empty or not
    cy.get(`:nth-child(${bookmarkNumber}) > h4`).click().should('not.be.empty');
  }

  checkNavbarAbout(aboutNumber) {
    // Click on the About button
    cy.get('#btnAbout').click();
    // Click on the 1st team member
    cy.get(`:nth-child(${aboutNumber}) > h4`).click();
    // See if this element is empty
    cy.get(`:nth-child(${aboutNumber}) > h4`).should('not.be.empty');
  }

  checkBlogOverview(blogOvNumber) {
    cy.get(`:nth-child(${blogOvNumber}) > #Blog`).click();
    // Get the content of the 1st Blog
    cy.get(`:nth-child(${blogOvNumber}) > #Content`).should('not.be.empty');
  }

  checkBookmarkOverview(bookmarOvNumber) {
    // Click on Bookmark button
    cy.get('#btnBookmark > a').click();
    // Click on the overview Bookmark title to get the Bookmark
    cy.get(`:nth-child(${bookmarOvNumber}) > #Bookmark`).click();
    // Get the content of the 1st Bookmark
    cy.get(`:nth-child(${bookmarOvNumber}) > #Content`).should('not.be.empty');
  }

  checkAboutOverview(aboutOvNumber) {
    // Click on Abaout button
    cy.get('#btnAbout > a').click();
    // Click on the 1st team member to get the bio
    cy.get(`:nth-child(${aboutOvNumber}) > h4`).click();
    // Click on the biography of the 1st team member to see if it is empty or not
    cy.get('#about > p').should('not.be.empty');
  }
}
