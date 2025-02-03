import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz'; 

describe('<Quiz />', () => {
  it('should render the quiz start button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz and show the first question', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    
    // Check if the first question is displayed
    cy.get('.card h2').should('not.contain', 'Start Quiz');
  });

  it('should show score after quiz completion', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // Assuming there's a correct answer for the first question
    cy.get('.btn-primary').first().click();

    // After answering all questions, check if the score is displayed
    cy.get('.alert-success').should('contain', 'Your score');
    cy.contains('Take New Quiz').should('be.visible');
  });

  it('should show loading spinner while fetching questions', () => {
    mount(<Quiz />);
    
    // Start the quiz
    cy.contains('Start Quiz').click();

    // While questions are being loaded, the spinner should be visible
    cy.get('.spinner-border').should('be.visible');
  });

  it('should handle answer clicks correctly and update the score', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // Assuming first answer is correct
    cy.get('.btn-primary').first().click();
    
    // After answering, score should increment by 1
    cy.get('.alert-success').should('contain', '1');
  });
});
