// If some code use in Multiple Pages use thsese Custom Commands
Cypress.Commands.add('submitFormDetails', () => {
  cy.get('#country').type('India');
  cy.get('.suggestions > ul > li > a', { timeout: 10000 }).click();
  //cy.get('.checkbox').click();
  cy.contains('input', 'Purchase').click();
});