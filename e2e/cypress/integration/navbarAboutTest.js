describe('Testing about navbar contract', () =>{
    beforeEach('direct to our local server', () =>{
        cy.visit('http://localhost:3000')

    })
    
    it('check for navbar content', () =>{
        cy.get('#btnAbout').click();
        cy.get('Tai Troung').should('not.be.empty');
        cy.get('Ragip Gashi').should('not.be.empty');
        cy.get('Rouven Gonzalez').should('not.be.empty');
    })
})