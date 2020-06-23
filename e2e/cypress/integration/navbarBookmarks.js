describe('Testing bookmark navbar contract', () =>{
    beforeEach('direct to our local server', () =>{
        cy.visit('http://localhost:3000')

    })
    
    it('check for navbar content', () =>{
        cy.get('#btnBookmarks').click();
        cy.get('#Book1').should('not.be.empty');
        cy.get('#Book2').should('not.be.empty');
    })
})