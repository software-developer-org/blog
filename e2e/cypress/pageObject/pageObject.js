export class PageObject {
    navigate() {
        cy.visit('http://localhost:3000')
    }

    checkHeader(enterButtonID) {

    }

    checkNavbarBlogs(enterBlogNubmer) {
        // Click on the Blog button
        cy.get('#btnBlog').click();
        // Click on the 1st Blog to see if it is empty or not
        cy.get(`:nth-child(${enterBlogNubmer}) > h4`).click().should('not.be.empty');
    }

    checkNavbarBookmark(enterBookmarkNumber) {
        // Click on the Bookmark button
        cy.get('#btnBookmarks').click();
        // Click on the 1st bookmark to test if it is empty or not
        cy.get(`:nth-child(${enterBookmarkNumber}) > h4`).click().should('not.be.empty');
    }

    checkNavbarAbout(enterAboutNumber) {
        // Click on the About button
        cy.get('#btnAbout').click();
        // Click on the 1st team member
        cy.get(`:nth-child(${enterAboutNumber}) > h4`).click();
        // See if this element is empty
        cy.get(`:nth-child(${enterAboutNumber}) > h4`).should('not.be.empty');
    }

    checkBlogOverview(enterNumber) {
        cy.get(`:nth-child(${enterNumber}) > #Blog`).click();
        // Get the content of the 1st Blog
        cy.get(`:nth-child(${enterNumber}) > #Content`).should('not.be.empty');
    }

    checkBookmarkOverview(enterBookmarOvkNumber) {
        // Click on Bookmark button
        cy.get('#btnBookmarks > a').click();
        // Click on the overview Bookmark title to get the Bookmark
        cy.get(`:nth-child(${enterBookmarOvkNumber}) > #Bookmark`).click();
        // Get the content of the 1st Bookmark 
        cy.get(`:nth-child(${enterBookmarOvkNumber}) > #Content`).should('not.be.empty');
    }

    checkAboutOverview(enterAboutOvNumber) {
        // Click on Abaout button
        cy.get('#btnAbout > a').click();
        // Click on the 1st team member to get the bio
        cy.get(`:nth-child(${enterAboutOvNumber}) > h4`).click();
        // Click on the biography of the 1st team member to see if it is empty or not
        cy.get('#about > p').should('not.be.empty');
    }
}