describe('Handling Calendars', () => {
  it('My Calendars Test case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

    const date = "19";
    const month = "8";
    const year = "2025";
    const expectedDate = [month, date, year];

    // Select the date from the calendar
    cy.get('.react-date-picker__inputGroup').click();
    cy.get('.react-calendar__navigation__label').click();
    cy.get('.react-calendar__navigation__label').click();

    cy.contains('button', year).click();

    //cy.get('.react-calendar__year-view__months').contains(month).click();
    cy.get(".react-calendar__year-view__months__month").eq(Number(month)-1).click();
    //cy.contains('button', month).click();

    cy.contains('button', date).click();
    //cy.contains("abbr",date).click();

    //cy.get('.ui-datepicker-month').select('Aug');
    //cy.get('.ui-datepicker-year').select('2022');
    //cy.get('.ui-state-default').contains('10').click();

    // Assertion
    cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
      {
          cy.wrap($el).invoke('val').should('eq',expectedDate[index]);
      }
    ) 
  });
});