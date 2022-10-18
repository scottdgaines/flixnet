describe('Flixnet dashboard flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to see the name of the application', () => {
    cy.get('.nav-logo').should('be.visible')
  });

  it('Should be able to see a collection of movies', () => {
    cy.get('.movie-container').should('be.visible')
      .get('div[class="movie-card"]').should('be.visible')
  });

  it('Should be able to click a movie and see more details', () => {
    cy.get(':nth-child(2) > .movie-poster').click()
      .get('.movie-container').should('not.exist')
  });
});
