const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0
    
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start(prototypeQuestions) {
    this.currentRound++
    const questions = prototypeQuestions.map((card) => new Card(card.id, card.question, card.answers, card.correctAnswer));
    this.questions = questions
    const deck = new Deck(questions);
    this.deck = deck
    const round = new Round(this.deck);
    this.round = round
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;