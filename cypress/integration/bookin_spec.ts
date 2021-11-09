import Cypress from 'cypress';

describe('Appointment', () => {
  it('user can make an appointment', () => {
    cy.visit('http://localhost:3000');
    cy.get('#filled-search').type('Sara');
    cy.contains('Sara').click();
    cy.get('[data-testid="datePicker"]').type('11 09 2021');
    cy.get('[data-testid="timePicker"]').type('11:15 am');
    cy.get('[placeholder="First Name"]').type('Mary');
    cy.get('[placeholder="Last Name"]').type('Black');
    cy.contains('Submit').focus();
    cy.contains('Submit').click();
  });
});
