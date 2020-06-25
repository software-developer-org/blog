import {PageObject} from "../pageObject/pageObject"

describe('Testing bookmark navbar contract', () =>{
    const page = new PageObject();
    beforeEach('direct to our local server', () =>{
        page.navigate();

    })
    
    it('check for navbar content', () =>{
        
        
        /*
        // Click on the Bookmark button
        cy.get('#btnBookmarks').click();
        // Click on the 1st bookmark to test if it is empty or not
        cy.get(':nth-child(2) > h4').click();
        cy.get('#Book1').should('not.be.empty');

        cy.get(':nth-child(3) > h4').click();
        cy.get('#Book2').should('not.be.empty');

        cy.get(':nth-child(4) > h4').click();
        cy.get('#Book3').should('not.be.empty');
        */
    })
})