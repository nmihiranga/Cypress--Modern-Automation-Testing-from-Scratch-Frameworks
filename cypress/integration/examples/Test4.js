describe('My FourthTest Suite', () => {

  it('My Fourth Test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Alerts
    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();

    // Window alert
    cy.on('window:alert', (str) => {
      // Mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
    });

    // Window confirm
    cy.on('window:confirm', (str) => {
      // Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });
  });

});