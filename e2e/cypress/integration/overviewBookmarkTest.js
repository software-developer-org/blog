describe('Testing bookmark overview contract', () => {
    beforeEach('direct to our local server', () => {
        cy.visit('http://localhost:3000')

    })

    it('check for overview content', () => {
        // Click on Bookmark button
        cy.get('#btnBookmarks > a').click();
        // Click on the overview Bookmark title to get the Bookmark
        cy.get(':nth-child(2) > #Bookmark').click();
        // Get the content of the 1st Bookmark 
        cy.get(':nth-child(2) > #Content').should('not.be.empty');

        cy.get(':nth-child(3) > #Bookmark').click();
        cy.get(':nth-child(3) > #Content').should('not.be.empty');
        
        cy.get(':nth-child(4) > #Bookmark').click();
        cy.get(':nth-child(4) > #Content').should('not.be.empty');
    })
})