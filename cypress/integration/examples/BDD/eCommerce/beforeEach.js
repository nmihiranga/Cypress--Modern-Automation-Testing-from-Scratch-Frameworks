beforeEach(function () { // Use `function` instead of `() =>` when using Fixtures
  cy.fixture('example').then((data) => {
    this.data = data;
  });
});