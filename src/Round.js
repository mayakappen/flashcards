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
        const index = this.turnCount;
        
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
        return currentTurn.giveFeedback()
       }
    calculatePercentCorrect() {
        let turns = this.turnCount
        let wrongAnswers = this.incorrectGuesses.length
        let percent = Math.ceil(wrongAnswers/turns * 100)
        return percent
    }
    endRound() {
       return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
 };    

module.exports = Round