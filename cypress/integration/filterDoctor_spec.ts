import Cypress from 'cypress';

describe('Search by speciality', () => {
  it('user can search doctor by speciality', () => {
    cy.visit('http://localhost:3000');
    cy.get('[role="button"]').click();
    cy.get('[role="option"]:last ').click();
  });

  it('user can reset filter, press "Show all" button', () => {
    cy.get('[data-testid="btnListOfDoctors"]').click();
  });
});
