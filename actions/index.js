export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK';

export function receiveDecks(deck) {
  return {
    type: RECEIVE_DECKS,
    decks,

  }
}
export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}
