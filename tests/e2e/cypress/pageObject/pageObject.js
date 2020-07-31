export class PageObject {
  // Getting navigation buttons of header page (Blog, Bookmark and About button)
  getNavigationButtons() {
    // declare and initialize the button array
    const buttons = ['Blog', 'Bookmark', 'About'];
    const result = [];
    // iterate through the array to get all buttons
    for (var i = 0; i < buttons.length; i++) {
      let naviButtons = cy.get(`#btn${buttons[i]} > a`);
      result.push(naviButtons);
    }
    return result;
  }

  // Getting back button
  getBackButton() {
    // Get the back button
    return cy.get('#btnBack > a');
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

  // Get navbar bookmark titles
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

  // Getting navbar team member names (titles)
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

  // Getting overview blogs to view the titles and a short content
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

  // Getting the overview bookmarks to view the titles and a short content
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

  getAboutOverview() {
    let start = 2;
    const end = 4;
    const result = [];

    while (start <= end) {
      // Get the team member name(title)
      const aboutElement = cy.get(`:nth-child(${start}) > h4`);
      // Show the biography content of the team member
      cy.get('#about > p');
      result.push(aboutElement);
      start++;
    }
    return result;
  }
}