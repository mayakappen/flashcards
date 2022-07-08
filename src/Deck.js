// const Card = require('../src/Card');

class Deck {
    constructor(cards = []) {
        this.deck = cards;
        this.deckLength = this.deck.length;
    }
}

module.exports = Deck