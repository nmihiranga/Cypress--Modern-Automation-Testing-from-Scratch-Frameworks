describe('Handling Web Tables', () => {

  it('My Web Tables Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Web Tables
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes('Python')) {
        // Get the next sibling
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
          const priceText = price.text();
          expect(priceText).to.equal('25');
        });
      }
    });
  });

});