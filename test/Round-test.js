const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
    it('should be a function', function() {
        const round = new Round();
        expect(round).to.be.a('function')
    })
    it('should be an instance of Round', function() {
        const round = new Round();
        expect(round).to.be.an.instanceof(Round)
    })
    it('should take in responses', function() {
        const round = new Round('pandas') 
        expect(round.response).to.equal('pandas')
    })
    // it('should record guesses and result', function() {
    //     const Round = new Round();
    //     const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    //     const turn = new Turn('object', card);
    //     const card2 = new Card(2, 'What is Maya\'s favorite animal?', ['panda', 'frog', 'cat'], 'panda');
    //     const turn2 = new Turn('frog', card2);
    //     expect(round.guesses).to.deep.equal([{answer: 'object', correct: true}, {answer: 'frog', correct: false}])
    // })
    it('should have currentCard as first in Deck at Round start', function() {
        const deck = new Deck();
        const round = new Round();
        expect(round.currentCard).to.be.an.instanceof('Card');
        expect(round.currentCard).to.equal(deck.deck[0]);
    })
    it('should return currentCard', function() {
        const deck = new Deck();
        const round = new Round();
        expect(round.returnCurrentCard()).to.equal(round.currentCard);
    })
    it('should be able to take a turn', function() {
        const card1 = new Card(1, 'What city is Maya from?', ['San Francisco', 'Santa Fe', 'Sioux Falls'], 'Sioux Falls');
        const card2 = new Card(2, 'What is Maya\'s favorite animal?', ['panda', 'frog', 'cat'], 'panda');
        const card3 = new Card(3, 'What is Emma\'s favorite ice cream?', ['cookie-dough', 'mint-chip', 'strawberry'], 'mint-chip');
        const deck = new Deck([card1, card2]);
        const round = new Round(deck);
        expect(round.deck).to.deep.equal([card1, card2, card3])
        expect(round.turnCount).to.equal(1)
        round.takeTurn('Sioux Falls');
        expect(round.turnCount).to.equal(2);
        round.takeTurn('frog');
        expect(round.incorrectGuesses).to.deep.equal([2]);
        expect(round.returnCurrentCard()).to.equal(card3);
        round.takeTurn('mint-chip');
        expect(round.calculatePercentCorrect()).to.equal(66.67);
    }
})