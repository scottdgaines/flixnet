describe('Flixnet dashboard flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should be able to see the name of the application', () => {
    cy.get('.nav-logo').should('be.visible')
  });

  it('Should be able to see a search bar', () => {
    cy.get('.search-bar').should('be.visible')
    .get('input').should('have.attr', 'placeholder').should('include', 'Search by title...')
  })

  it('Should show a loading message before rendering data', () => {
    cy.get('p[class="loading-message"]').should('be.visible').should('contain', 'Loading...')
  })

  it('Should show an error message if no data was fetched', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/v2/movies'
      },
      {
        forceNetworkError: true,
      }
    );
    cy.visit('http://localhost:3000/')
    cy.get('p[class="error-message"]').should('be.visible').should('contain', 'There was an error! Please try again.')
  })

  it('Should be able to see a collection of movies', () => {
    cy.get('.movie-container').should('be.visible')
      .get('img[class="movie-poster"]').should('be.visible')
  });

  it('Should be able to click a movie and see more details', () => {
    cy.get(':nth-child(2) > .movie-poster').click()
      .get('.movie-container').should('not.exist')
  });
});
