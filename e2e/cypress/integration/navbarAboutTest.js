describe('Testing about navbar contract', () => {
  beforeEach('direct to our local server', () => {
    cy.visit('http://localhost:3000')
  })

  it('check for navbar content', () => {
    // Click on the About button
    cy.get('#btnAbout').click()
    // Click on the 1st team member
    cy.get(':nth-child(2) > h4').click()
    // See if this element is empty
    cy.get('Ragip Gashi').should('not.be.empty')

    cy.get(':nth-child(3) > h4').click()
    cy.get('Rouven Gonzalez').should('not.be.empty')

    cy.get(':nth-child(4) > h4').click()
    cy.get('Tai Troung').should('not.be.empty')
  })
})
