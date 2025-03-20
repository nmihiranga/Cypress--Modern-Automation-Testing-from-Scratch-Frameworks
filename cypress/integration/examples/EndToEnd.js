import HomePage from '../../support/pageObjects/HomePage';

describe('End to End Test', () => {

  before(function () { // Use `function` instead of `() =>` when using Fixtures
    cy.fixture('example').then((data) => {
      this.data = data;
      this.homePage = new HomePage();
    });
  });

  it('My End to End Test case', function () { // Use `function` instead of `() =>` when using Fixtures

    const productName = this.data.productName;

    // HomePage
    this.homePage.goTo(Cypress.env('url')+'/loginpagePractise/');
    const productPage = this.homePage.login(this.data.username, this.data.password);

    // ProductPage
    productPage.pageValidation();
    productPage.getCardCount().should('have.length', 4);
    productPage.selectProduct(productName);
    productPage.selectFirstProduct();
    const cartPage = productPage.goToCart();

    // CartPage
    cartPage.sumOfProducts().then((sum) => {
      expect(sum).to.be.lessThan(200000);
    });
    const confirmationPage = cartPage.checkout();

    // ConfirmationPage
    confirmationPage.submitFormDetails();
    confirmationPage.getAlert().should('contain', 'Success!');

  });

});