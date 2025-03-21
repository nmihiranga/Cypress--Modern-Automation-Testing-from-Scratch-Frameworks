//const neatCsv = require('neat-csv');
//import neatCsv from 'neat-csv';

describe('JWT Token', async function() {
  it('Is logged through local storage', async function() {
    cy.LoginAPI().then(function() {
      cy.visit('https://rahulshettyacademy.com/client', {
        onBeforeLoad : function(window) {
          window.localStorage.setItem('token', Cypress.env('token'));
        }
      });
    });

    cy.get('.card-body button:last-of-type').eq(1).click();
    cy.get('[routerlink*="cart"]').click();
    cy.contains('Checkout').click();
    cy.get('input[placeholder="Select Country"]').type('Ind');
    cy.get('.ta-results > button').each(($el, index, $list) => {
      if($el.text() === ' India') {
        cy.wrap($el).click();
      }
    });
    cy.get('.action__submit').click();

    cy.wait(2000);

    cy.get('.order-summary > tbody > tr > button').eq(0).click();

    cy.readFile(Cypress.config('fileServerFolder')+'/cypress/downloads/order-invoice_nm.csv').then((csvString) => {
      cy.task('parseCsv', { csvString }).then((data) => {
        expect(data[0]['Product Name']).to.equal('ADIDAS ORIGINAL');
      });
    });

  });

});