import ConfirmationPage from "./ConfirmationPage";

class CartPage {

  sumOfProducts() {
    let sum = 0;
    return cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
      const amount = $el.text();
      let res = amount.split(' ')[1].trim();
      sum = Number(sum) + Number(res);
    }).then(() => {
      return sum;
    });
  }

  checkout() {
    cy.contains('button', 'Checkout').click();
    return new ConfirmationPage();
  }

}

export default CartPage;