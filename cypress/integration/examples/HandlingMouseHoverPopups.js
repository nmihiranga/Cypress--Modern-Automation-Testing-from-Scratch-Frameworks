describe('Handling Mouse Hover Popups', () => {

  it('My Mouse Hover Popups Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Mouse Hover Popups
    //cy.get('.mouse-hover-content').invoke('show'); Same as below
    cy.contains('Top').click({force: true}); // force: true is used to click on hidden elements
    cy.url().should('include', 'top');
  });

});