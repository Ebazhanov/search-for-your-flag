describe('given Search page', () => {
    before(() => {
        cy.visit('/')
    })

    describe('search for `Germany` flag by entering `Germ`', () => {
        before(() => {
            cy.get('[data-testid="searchField"]').type('Germ')
        })

        it('should display `Germany` flag', () => {
            cy.get('div:nth-child(3) [src*="/deu.svg"] + h1').should('have.text', 'Germany');
        })
    })
})
