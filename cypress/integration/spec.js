/// <reference types="cypress" />
context('Visit Empty Redirect', () => {
  it('Visit - a 302 redirect with an empty body', () => {
    cy.visit({url: '/redirect', method: 'POST'});
  })
  it('Use a click action for the redirect', () => {
    cy.visit({url: '/'});
    cy.get('[data-cy="submit"]').click()
  })
})
