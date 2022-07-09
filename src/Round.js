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
    calculatePercentCorrect() {
        let turns = this.turnCount
        let wrongAnswers = this.incorrectGuesses.length
        let percent = Math.ceil(wrongAnswers/turns * 100)
        return percent
    }
    endRound() {
       console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
    returnCurrentCard() {
        const index = this.turnCount;
        if (index === this.deck) {
            this.endRound()
        } 
        return this.deck[index];
    };
    takeTurn(playerGuess) {
        let currentTurn = new Turn(playerGuess, this.currentCard);
        currentTurn.giveFeedback();
       if (!currentTurn.correct) {
            this.incorrectGuesses.push(this.currentCard.id);
            }
        this.turnCount++
        this.currentCard = this.deck[this.turnCount]
        this.endRound()
        return currentTurn.giveFeedback()
       }
 };    

module.exports = Round