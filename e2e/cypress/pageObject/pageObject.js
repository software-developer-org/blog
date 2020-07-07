export class PageObject {
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

  // Getting navbar blog titles
  getNavbarBlogs() {
    let start = 2;
    const end = 4;
    const result = [];
    while (start <= end) {
      // Get the blog title and saved it in the constate element
      const element = cy.get(`:nth-child(${start}) > h4`);
      result.push(element);
      start++;
    }
    return result;
  }

  getNavbarBlog(id) {
    return cy.get(`:nth-child(${id}) > h4`);
  }

  getNavbarBookmark() {
    let start = 2;
    const end = 4;
    const result = [];
    while (start <= end) {
      // Get the bookmark title and saved it in the constate element
      const element = cy.get(`:nth-child(${start}) > h4`);
      result.push(element);
      start++;
    }
    return result;
  }

  getNavbarAbout() {
    let start = 2;
    const end = 4;
    const result = [];
    while (start <= end) {
      const element = cy.get(`:nth-child(${start}) > h4`);
      result.push(element);
      start++;
    }
    return result;
  }

  getBlogOverview() {
    let start = 2;
    const end = 4;
    const result = [];

    while (start <= end) {
      const blogElement = cy.get(`:nth-child(${start}) > #Blog`);
      cy.get(`:nth-child(${start}) > #Content`);
      result.push(blogElement);
      start++;
    }
    return result;
  }

  getBookmarkOverview() {
    let start = 2;
    const end = 4;
    const result = [];

    while (start <= end) {
      const bookmarkElement = cy.get(`:nth-child(${start}) > #Bookmark`);
      // Get the content of the Bookmarks
      cy.get(`:nth-child(${start}) > #Content`);
      result.push(bookmarkElement);
      start++;
    }
    return result;
  }

  checkAboutOverview(aboutOvNumber) {
    // Click on the team member to get the bio
    cy.get(`:nth-child(${aboutOvNumber}) > h4`).click();
    // Click on the biography of the team member to see if it is empty or not
    cy.get('#about > p').should('not.be.empty');
  }
}
