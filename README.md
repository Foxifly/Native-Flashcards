Native Flashcards

# Udacity Project 3 - Mobile Flashcards
--------

### Introduction
This is a React Native application built for Udacity's React Nanodegree program. This is the third and final project required for graduation. This project combines react native with redux to create a flashcard app for students to use to study for their next big test.

### Features
Users can:
- Create new decks to study from
- View each deck and how many card is in each
- Start a quiz with each deck to test their study skills
- Mark questions as correct and incorrect
- View their score at the end of the quiz

### Dependencies
- [expo](https://expo.io/) (version 32.0.0)
- [react](https://reactjs.org/) (version 16.5.0)
- [react-native](https://facebook.github.io/react-native/)
- [react-navigation](https://www.npmjs.com/package/react-navigation) (version 3.5.1)
- [react-redux](https://www.npmjs.com/package/react-redux) (version 6.0.1)
- [redux](https://www.npmjs.com/package/redux) (version 4.0.1)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) (version 2.3.0)
- [yarn](https://www.npmjs.com/package/yarn) or [npm](https://www.npmjs.com/package/npm)

### Installation
To install, please clone or download this repository. `cd` into the file location and run `npm install` or `yarn`. After all of the dependencies have been installed, you can run `npm start` or `yarn start` to start the application. As long as expo is installed, it will open in a browser window where you can either scan the QR code with your mobile device on the Expo app or load it on an emulator. Once it's running, you're ready to get started.

### Actions, Reducers, and Middleware
- RECEIVE_DECKS receiveDecks(decks)
- ADD_DECK addDeck(deck)
- ADD_QUESTION addQuestionToDeck(deckID, question, answer)
- Logger middleware

### Future Enhancements
- Ability for users to archive and delete decks
- Ability for users to edit and delete questions
- Authentication system
- A style revamp with styled components instead of StyleSheet
- Ability to categorize decks

### Resources
Project was designed in accordance to [this rubric](https://review.udacity.com/#!/rubrics/1021/view) for Udacity's React Nanodegree Program. 
