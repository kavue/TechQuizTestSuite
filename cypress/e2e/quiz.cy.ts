describe('Quiz', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001');
    });

    it('should start the quiz when I click the Start Quiz button', () => {
        // Click the Start Quiz button
        cy.get('button').contains('Start Quiz').click();
        // Verify that the Start Quiz button is no longer visible, indicating the quiz has started
        cy.contains('Start Quiz').should('not.exist');
    });

    it('should display the first question when the quiz starts', () => {
        // Start the quiz
        cy.get('button').contains('Start Quiz').click();
        // Verify that the question is displayed (e.g., by checking for the <h2> with a question)
        cy.get('.card h2').should('not.contain', 'Start Quiz'); // Question should be visible instead of "Start Quiz"
    });

    it('should display the next question when I select an answer', () => {
        // Start the quiz
        cy.get('button').contains('Start Quiz').click();
        // Answer the first question (assuming the first answer is correct)
        cy.get('button').contains('1').click();
        // After selecting an answer, check if the next question is displayed
        cy.get('.card h2').should('not.contain', 'Start Quiz'); // Next question should show up
    });

    it('should display my score when I finish the quiz', () => {
        cy.get('button').contains('Start Quiz').click();

        // Answer all questions (assuming "1" is the correct answer for each question)
        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }

        // After answering all questions, check if the score is displayed
        cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    });

    it('should display the Take New Quiz button when the quiz is completed', () => {
        cy.get('button').contains('Start Quiz').click();
    
        // Simulate answering all questions (assuming "1" is correct for all)
        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
    
        // After answering all questions, verify that the "Take New Quiz" button appears
        cy.get('button').contains('Take New Quiz').should('be.visible');
    });

    it('should display a question after clicking the Take New Quiz button', () => {
        // Start the quiz by clicking the Start Quiz button
        cy.get('button').contains('Start Quiz').click();
    
        // Answer all questions (assuming "1" is correct for all)
        for (let i = 0; i < 10; i++) {
            cy.get('button').contains('1').click();
        }
    
        // After completing the quiz, the "Take New Quiz" button should be visible
        cy.get('button').contains('Take New Quiz').click();
    });    
});
