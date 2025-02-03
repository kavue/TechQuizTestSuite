import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: "/api/questions/random"
    },
      {
        fixture: 'questions.json',
        statusCode: 200
      });
  });

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />);
  });

  it('mounts and displays the "Start Quiz" button', () => {
    // ARRANGE
    cy.mount(<Quiz />);
    // ACT
    // ASSERT
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should display the first question when the Start Quiz button is clicked', () => {
    // ARRANGE
    cy.mount(<Quiz />);
    // ACT
    cy.get('button').contains('Start Quiz').click();
    // ASSERT
    cy.get('h2').contains('Which is the correct answer?').should('be.visible');
  });

  it('should show the next question after an answer is selected', () => {
    // ARRANGE
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    // ACT
    cy.get('.btn-primary').first().click();
    // ASSERT
    cy.get('h2').should('not.contain', 'Which is the correct answer?');
    cy.get('h2').should('be.visible');
  });

  it('should display the final score after all questions are answered', () => {
    // ARRANGE
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    // ACT
    cy.get('.btn-primary').first().click();
    cy.get('.btn-primary').first().click();
    // ASSERT
    cy.get('.alert-success').should('contain', 'Your score');
  });

  it('should show "Take New Quiz" button after quiz completion', () => {
    // ARRANGE
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    // ACT
    cy.get('.btn-primary').first().click();
    cy.get('.btn-primary').first().click();
    // ASSERT
    cy.contains('Take New Quiz').should('be.visible');
  });

  it('should reset the quiz when "Take New Quiz" is clicked', () => {
    // ARRANGE
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    // ACT
    cy.get('.btn-primary').first().click();
    cy.get('.btn-primary').first().click();
    cy.contains('Take New Quiz').click();
    // ASSERT: Check if the first question is visible again
    cy.get('h2').contains('Which is the correct answer?').should('be.visible');
  });
});

