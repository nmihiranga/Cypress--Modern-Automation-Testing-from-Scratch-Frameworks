describe('My Third Test Suite', () => {

  it('My Third Test Case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Checkboxes
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    // To select multiple check boxes at once
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);

    // Static dropdown
    cy.get('select').select('option2').should('have.value', 'option2');

    // Dynamic dropdown
    cy.get('#autocomplete').type('aus');
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if($el.text() === 'Austria') {
        cy.wrap($el).click();
      }
    });

    cy.get('#autocomplete').should('have.value', 'Austria');

    // Visible and invisible elements
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    // Radio buttons
    cy.get('[value="radio2"]').check().should('be.checked');
  });

});