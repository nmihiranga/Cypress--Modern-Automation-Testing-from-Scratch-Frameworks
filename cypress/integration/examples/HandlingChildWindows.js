describe("Handling Child Windows", () => {
  it("My Child Window Test case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Open a new tab in the same tab
    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});