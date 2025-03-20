class ConfirmationPage {
    
  submitFormDetails() {
    cy.submitFormDetails();
  }

  getAlert() {
    return cy.get('.alert');
  }

}

export default ConfirmationPage;