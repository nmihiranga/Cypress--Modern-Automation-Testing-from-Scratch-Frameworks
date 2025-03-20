import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../../../support/pageObjects/HomePage';

const homePage = new HomePage();

Given('I am on the e-commerce website', () => {
  homePage.goTo(Cypress.env('url')+'/loginpagePractise/');
});

When('I login to the website', function() {
  this.productPage = homePage.login(this.data.username, this.data.password);
  this.productPage.pageValidation();
  this.productPage.getCardCount().should('have.length', 4);
});

When('I add the product to the cart', function() {
  this.productPage.selectProduct(this.data.productName);
  this.productPage.selectFirstProduct();
});

When('I go to the cart', function() {
  this.cartPage = this.productPage.goToCart();
});

When('I Validate the total price', function() {
  this.cartPage.sumOfProducts().then((sum) => {
    expect(sum).to.be.lessThan(200000);
  });
});

When('I go to the checkout', function() {
  this.confirmationPage = this.cartPage.checkout();
  this.confirmationPage.submitFormDetails();
});

Then('I should see a confirmation message', function() {
  this.confirmationPage.getAlert().should('contain', 'Success!');
});