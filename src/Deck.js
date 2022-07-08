// const Card = require('../src/Card');

class Deck {
    constructor(cards = []) {
        this.deck = cards;
        this.deckLength = this.countCards();
    }
    countCards() {
        return this.deck.length
    }
}

module.exports = Deck