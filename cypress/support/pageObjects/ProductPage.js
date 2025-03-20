import CartPage from './CartPage';

class ProductPage {

  pageValidation() {
    cy.contains('Shop Name').should('be.visible');
  }

  getCardCount() {
    return cy.get('app-card');
  }

  selectFirstProduct() {
    cy.get('app-card').eq(0).contains('button', 'Add').click();
  }

  selectProduct(productName) {
    cy.get('app-card').filter(`:contains(${productName})`).then(($el) => {
      cy.wrap($el).contains('button', 'Add').click();
    });

    /*cy.get('app-card').each(($el, index, $list) => {
      const product = $el.find('h4.card-title').text();
      if (product.includes(productName)) {
        $el.find('button').click();
      }
    });
    Same as above */
  }

  goToCart() {
    cy.contains('a', 'Checkout').click();
    return new CartPage();
  }

}

export default ProductPage;