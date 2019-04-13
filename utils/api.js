import { AsyncStorage } from 'react-native'
import {DECK_STORAGE_KEY, setDecks} from "./_decks"



export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
   const data = JSON.parse(results);
   return data === null ? setDecks() : data;

 });
}

export function saveDeck(title) {

}


function getDeck(id) {

}



function addCardToDeck(title, card) {

}
