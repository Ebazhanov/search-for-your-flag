describe('given Search page', () => {
    before(() => {
        cy.visit('/')
    })

    describe('search for `Germany` flag by entering `Germ`', () => {
        before(() => {
            cy.get('[data-cy="searchField"]').type('Germ')
        })

        it('should display `Germany` flag', () => {
            cy.get('.Germany').should('be.visible').should('contain', 'Germany');
        })
    })
})
