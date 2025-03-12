describe('My First Test Suite', function() {

  it('My First TestCase', function() {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');

    cy.get('.products').as('productLocator');

    cy.get('.product:visible').should('have.length', 4);
    // Parent child chaining
    cy.get('@productLocator').find('.product').should('have.length', 4);

    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
    // Same as above, but recommended to use above one
    // cy.get(':nth-child(3) > .product-action > button').click();

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if(textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click();
      }
    });

    cy.get('.brand').should('have.text', 'GREENKART');

    cy.get('.brand').then(function(logoElement) {
      cy.log(logoElement.text());
    });

  });

})