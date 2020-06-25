describe('Testing blog overview contract', () => {
    beforeEach('direct to our local server', () => {
        cy.visit('http://localhost:3000')

    })

    it('check for overview content', () => {
        // Click on the overview Blog title to get the Blog
        cy.get(':nth-child(2) > #Blog').click();
        // Get the content of the 1st Blog
        cy.get(':nth-child(2) > #Content').should('not.be.empty');

        cy.get(':nth-child(3) > #Blog').click();
        cy.get(':nth-child(3) > #Content').should('not.be.empty');

        cy.get(':nth-child(4) > #Blog').click();
        cy.get(':nth-child(4) > #Content').should('not.be.empty');
    })
})