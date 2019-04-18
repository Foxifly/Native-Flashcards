import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'MobileFlashcards:decks';



export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    return JSON.parse(data);
 });
}

export function getDecksTEMP() {
  return {
   React: {
     title: 'React',
     questions: [
       {
         question: 'What is React?',
         answer: 'A library for managing user interfaces'
       },
       {
         question: 'Where do you make Ajax requests in React?',
         answer: 'The componentDidMount lifecycle event'
       }
     ]
   },
   JavaScript: {
     title: 'JavaScript',
     questions: [
       {
         question: 'What is a closure?',
         answer: 'The combination of a function and the lexical environment within which that function was declared.'
       }
     ]
   },
   Testing: {
     title: 'Testing',
     questions: [
       {
         question: 'What is React?',
         answer: 'A library for managing user interfaces'
       },
       {
         question: 'Where do you make Ajax requests in React?',
         answer: 'The componentDidMount lifecycle event'
       }
     ]
   },
   InsertLongTitle: {
     title: 'Long Title Here hahah Get rekt',
     questions: [
       {
         question: 'What is a closure?',
         answer: 'The combination of a function and the lexical environment within which that function was declared.'
       }
     ]
   }
 }
}


export function saveDeck(title) {

}


function getDeck(id) {

}



function addCardToDeck(title, card) {

}
