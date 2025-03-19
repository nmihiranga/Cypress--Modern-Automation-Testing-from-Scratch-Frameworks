describe('End to End Test', () => {

  before(function () { // Use `function` instead of `() =>` when using Fixtures
    cy.fixture('example').then((data) => {
      this.data = data;
    });
  });

  it('My End to End Test case', function () { // Use `function` instead of `() =>` when using Fixtures

    const productName = this.data.productName;

    cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
    cy.get('#username').type(this.data.username);

    cy.get('#password').type(this.data.password);
    cy.contains('Sign In').click();

    cy.contains('Shop Name').should('be.visible');
    cy.get('app-card').should('have.length', 4);

    /*cy.get('app-card').each(($el, index, $list) => {
      const product = $el.find('h4.card-title').text();
      if (product.includes(productName)) {
        $el.find('button').click();
      }
    });
    */

    // Same as above
    cy.get('app-card').filter(`:contains(${productName})`).then(($el) => {
      cy.wrap($el).contains('button', 'Add').click();
    });

    cy.get('app-card').eq(0).contains('button', 'Add').click();
    cy.contains('a', 'Checkout').click();

    let sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
      const amount = $el.text();
      let res = amount.split(' ')[1].trim();
      sum = Number(sum) + Number(res);
    }).then(() => {
      expect(sum).to.be.lessThan(200000);
    });

    cy.contains('button', 'Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a', { timeout: 10000 }).click();
    //cy.get('.checkbox').click();
    cy.contains('input', 'Purchase').click();
    cy.get('.alert').should('contain', 'Success!');

  });

});