# Tech Quiz Test Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Overview
This project is a Tech Quiz Test Suite built using Cypress for testing the functionality of a quiz application. The test suite ensures that users can start a quiz, answer questions, see their score, and restart the quiz.

## Features Tested
- Verifies that the Start Quiz button is visible and functional.
- Ensures the first question is displayed when the quiz starts.
- Checks if selecting an answer moves to the next question.
- Confirms that the final score is displayed after completing the quiz.
- Validates the Take New Quiz button is displayed after completing the quiz.

## Tech Stack
- Cypress (for end-to-end and component testing)
- React & TypeScript (Quiz application)

## Project Setup

### 1. Install Node.js
Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### 2. Clone the Repository
```bash
git clone <repository-url>
cd <project-folder> 
```
### 3. Install Dependencies
Run the following command to install all required dependencies:
```bash
npm install
```
### 4. Install Cypress
If Cypress is not installed, add it as a dev dependency:
```bash
npm install --save-dev cypress
```
### 5. Install Jest
```bash
npm i -D @types/jest
```
### 6. Install React and TypeScript Dependencies
```bash
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom
```
### 7. Run Cypress Test
```bash
npm run test
```
## Walkthrough Video
<a href="https://drive.google.com/file/d/1kWVBIAAAhdEX33Wa837TFFnW0mH2NDeo/view?usp=sharing">Click here!</a>

