import { AsyncStorage } from "react-native";

export const DECK_STORAGE_KEY = "MobileFlashcards:decks";

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    console.log("results", JSON.parse(results))
    return JSON.parse(results);
  });
}

export function generateID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function saveDeck(deck) {
console.log(deck)
  AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [deck.id]: deck
    })
  );
}

function getDeck(id) {}

function addCardToDeck(title, card) {}
