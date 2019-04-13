import { AsyncStorage } from 'react-native'
import {DECK_STORAGE_KEY, formatDeck} from "./_decks"



function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(formatDeck)
}

function getDeck(id) {

}

function saveDeckTitle(title) {

}

function addCardToDeck(title, card) {

}
