const Turn = require('./Turn');
// const Deck = require('./Deck');
const Card = require('./Card');

class Round {
    constructor(deck) {
        this.turnCount = 0
        this.deck = deck.deck
        this.currentCard = this.returnCurrentCard()
        this.incorrectGuesses = []
    }
    returnCurrentCard() {
        var index = this.turnCount;
        
        return this.deck[index];
    };
    takeTurn(playerGuess) {
        let currentTurn = new Turn(playerGuess, this.currentCard);
        currentTurn.giveFeedback();
       if (!currentTurn.correct) {
            console.log('i made it');
            this.incorrectGuesses.push(this.currentCard.id);
            }
        this.turnCount++
        console.log("deck", this.deck);
        this.currentCard = this.deck[this.turnCount]
        return currentTurn.giveFeedback()
       }
 };    

module.exports = Round