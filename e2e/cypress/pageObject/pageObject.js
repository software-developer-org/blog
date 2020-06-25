export class PageObject{
    navigate(){
        cy.visit('http://localhost:3000')
    }
    checkBlogOverview(enterNumber){
        cy.get(`:nth-child(${enterNumber}) > #Blog`).click();
        // Get the content of the 1st Blog
        cy.get(`:nth-child(${enterNumber}) > #Content`).should('not.be.empty');
    }

    checkNavbarBlogs(enterNubmer) {
        // Click on the Blog button
        cy.get('#btnBlog').click();
        // Click on the 1st Blog to see if it is empty or not
        cy.get(`:nth-child(${enterNubmer}) > h4`).click().should('not.be.empty');

    }
}