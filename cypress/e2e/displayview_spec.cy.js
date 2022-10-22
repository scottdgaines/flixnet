describe('Display View flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get(':nth-child(2) > .movie-poster').click()
  });

  it('Should show an error message if no data was fetched', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/v2/movies/337401'
      },
      {
        forceNetworkError: true,
      }
    );
    cy.visit('http://localhost:3000/337401')
    cy.get('p[class="detail-view-error-message"]').should('be.visible').should('contain', 'There was an error! Please try again.')
  })

  // it('Should show a loading message before rendering data', () => {
  //   cy.get('p[class="detail-view-loading-message"]').should('exist').should('contain', 'Loading...')
  // })

  it('Should render a movie poster and some text information', () => {
    cy.get('img[class="display-poster"]').should('be.visible')
      .get('h3[class="detail-title"]').contains('Mulan')
      .get('.home-button').contains('Home')
  });

  it('Should be able to return to the dashboard via the home button', () => {
    cy.get('.home-button').click()
      .get('.display-view-container').should('not.exist')
      .get('.movie-container').should('exist')
  });
});