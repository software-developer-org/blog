describe('Testing blog navbar contract', () =>{
    it('direct to our local server', () =>{
        cy.visit('http://localhost:3000')

    })
    
    it('check for navbar content', () =>{
        cy.get('#Blog1').should('not.be.empty')
        cy.get('#Blog2').should('not.be.empty')

    })
})