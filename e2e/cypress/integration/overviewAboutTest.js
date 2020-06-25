describe('Testing about overview contract', () => {
    beforeEach('direct to our local server', () => {
        cy.visit('http://localhost:3000')

    })

    it('check for overview content', () => {
        // Click on Abaout button
        cy.get('#btnAbout > a').click();
        // Click on the 1st team member to get the bio
        cy.get(':nth-child(2) > h4').click();
        // Click on the biography of the 1st team member to see if it is empty or not
        cy.get('#about > p').should('not.be.empty');

        cy.get(':nth-child(3) > h4').click();
        cy.get('#about > p').should('not.be.empty');

        cy.get(':nth-child(4) > h4').click();
        cy.get('#about > p').should('not.be.empty');
    })
})