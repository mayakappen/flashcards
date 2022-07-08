const Card = require('./Card');
const data = require('./data');
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
  start(data) {
    this.currentRound++
    const prototypeQuestions = data.prototypeData
    const questions = prototypeQuestions.map((question) => new Card(question.id, question.questions, question.correctAnswer));
    return questions
  }
}

module.exports = Game;