describe('Display View flows', () => {

beforeEach(() => {
  cy.visit('http://localhost:3000')
    .get(':nth-child(2) > .movie-poster').click()
});

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