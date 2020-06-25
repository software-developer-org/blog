describe('Testing blog header contract', () => {
    beforeEach('direct to our local server', () => {
        cy.visit('http://localhost:3000')

    })

    it('check for header content', () => {
        // Click on the Blog button
        cy.get('#btnBlog > a').click();
        // visiting the Blog page after clicking on Blog button
        cy.visit('http://localhost:3000/blog.html');

        // Click on the Bookmark button
        cy.get('#btnBookmarks > a').click();
        // visiting the Bookmark page after clicking on Bookmark button
        cy.visit('http://localhost:3000/bookmark.html');

        // Click on the About button 
        cy.get('#btnAbout > a').click();
        // Visiting the About page after clicking on About button
        cy.visit('http://localhost:3000/about.html');

        // Click on the Back button
        cy.get('#btnBack').click();
        // Getting back on the previous page after clicking on Back button
        // clicking back
        cy.go('back');
        cy.location('pathname').should('not.include', 'navigation');
    })
});