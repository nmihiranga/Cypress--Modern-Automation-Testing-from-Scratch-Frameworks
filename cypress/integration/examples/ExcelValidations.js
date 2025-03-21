

describe('Excel Validations', () => {

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

    cy.get('.order-summary > tbody > tr > button').eq(1).click();

    // Excel to JSON
    const filePath = Cypress.config('fileServerFolder')+'/cypress/downloads/order-invoice_nm.xlsx';
    cy.task('excelToJsonConv', filePath).then(function(result) {
      cy.log(result);
    });
     
    //console.log(result);

  });

});