class Round {
    constructor(deck) {
        this.deck = deck.deck;
        this.currentCard = this.deck[0];
        this.incorrectGuesses = []
        this.turnCount = 1
    }
    returnCurrentCard() {
        return this.currentCard
    };
    takeTurn(playerGuess) {
        if (playerGuess === this.currentCard.correctAnswer) {
            this.turnCount++
            return 'correct!'
        } else if (playerGuess !== this.currentCard.correctAnswer) {
        this.turnCount++
        this.incorrectGuesses.push(this.currentCard.id)
        return 'incorrect!'
        }
        this.deck.shift();
    };
};    

module.exports = Round