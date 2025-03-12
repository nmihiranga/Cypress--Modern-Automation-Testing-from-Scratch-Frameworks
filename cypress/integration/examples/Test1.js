describe('My First Test Suite', function() {

  it('My First TestCase', function() {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');

    cy.get('.product:visible').should('have.length', 4);
    // Parent child chaining
    cy.get('.products').find('.product').should('have.length', 4);

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    // Same as above, but recommended to use above one
    // cy.get(':nth-child(3) > .product-action > button').click();

    cy.get('.products').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if(textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click();
      }
    });

  });

})