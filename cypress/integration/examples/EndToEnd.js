describe('End to End Test', () => {

  it('My End to End Test case', () => {
    const productName = 'Nokia Edge';

    cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
    cy.get('#username').type('rahulshettyacademy');

    cy.get('#password').type('learning');
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

  });

});