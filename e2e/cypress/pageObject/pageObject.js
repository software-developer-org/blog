export class PageObject{
    navigate(){
        cy.visit('http://localhost:3000')
    }
    checkBlogOverview(entreNumber){
        cy.get(`:nth-child(${entreNumber}) > #Blog`).click();
        // Get the content of the 1st Blog
        cy.get(`:nth-child(${entreNumber}) > #Content`).should('not.be.empty');
    }


}