import 'cypress-iframe';

describe('Handling Frames', () => {

  it('My Frames Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Switch to the frame
    cy.frameLoaded('#courses-iframe');
    cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    //cy.iframe().find('h1["class*="pricing-title"]').should('have.length',2);
    //cy.iframe().find('h1').should('have.text', 'Mentorship');
  });

});