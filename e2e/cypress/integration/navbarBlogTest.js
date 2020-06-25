describe('Testing blog navbar contract', () => {
    beforeEach('direct to our local server', () => {
        cy.visit('http://localhost:3000')

    })

    it('check for navbar content', () => {
        // Click on the Blog button
        cy.get('#btnBlog').click();
        // Click on the 1st Blog to see if it is empty or not
        cy.get('#Blog1 > h4').click();
        cy.get('#Blog1').should('not.be.empty');

        cy.get('#Blog2 > h4').click();
        cy.get('#Blog2').should('not.be.empty');
        
        cy.get('#Blog3-Tai > h4').click();
        cy.get('#Blog3').should('not.be.empty');
    })
})