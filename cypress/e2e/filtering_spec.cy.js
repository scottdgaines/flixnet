describe('Search Feature flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to enter a search query', () => {
    cy.get('input').type('Mulan')
  })

  it('Should show the movie poster matching the search query', () => {
    cy.get('.movie-container').should('be.visible')
      .get('[href="/337401"] > .movie-poster').should('be.visible')

    cy.get('input').type('Mulans')
    cy.get('img[class="movie-poster"]').its('length').should('be.equal', 40)
  })

  it('Should be able to click the poster to display the movie\'s details', () => {
    cy.get(':nth-child(2) > .movie-poster').click()
    cy.get('img[class="display-poster"]').should('be.visible')
      .get('h3[class="detail-title"]').contains('Mulan')
      .get('.home-button').contains('Home')
  })

  it('Should be able to return to the dashboard via the home button', () => {
    cy.get(':nth-child(2) > .movie-poster').click()
    cy.get('.home-button').click()
      .get('.display-view-container').should('not.exist')
      .get('.movie-container').should('exist')
  });

})