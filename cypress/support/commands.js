// If some code use in Multiple Pages use thsese Custom Commands
Cypress.Commands.add('submitFormDetails', () => {
  cy.get('#country').type('India');
  cy.get('.suggestions > ul > li > a', { timeout: 10000 }).click();
  //cy.get('.checkbox').click();
  cy.contains('input', 'Purchase').click();
});

// To set the token as a env variable
Cypress.Commands.add('LoginAPI', () => {
  cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {"userEmail":"nm@getnada.com","userPassword":"Test@12345"}).then(function(response){
    expect(response.status).to.eq(200);
    Cypress.env('token', response.body.token);
    window.localStorage.setItem('token', response.body.accessToken);
  });
});