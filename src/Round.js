class Round {
    constructor(deck) {
        this.deck = deck.deck;
    }
    returnCurrentCard() {
        return this.deck[0];
    }
}

module.exports = Round