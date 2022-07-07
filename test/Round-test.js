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
    it('should have currentCard as first in Deck at Round start', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.currentCard).to.be.an.instanceof('Card');
        expect(round.currentCard).to.equal(deck.deck[0]);
    })
    it('should return currentCard', function() {
        const deck = new Deck();
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.equal(round.currentCard);
    })
    it('should be able to take a turn', function() {
        const card1 = new Card(1, 'What city is Maya from?', ['San Francisco', 'Santa Fe', 'Sioux Falls'], 'Sioux Falls');
        const card2 = new Card(2, 'What is Maya\'s favorite animal?', ['panda', 'frog', 'cat'], 'panda');
        const card3 = new Card(3, 'What is Emma\'s favorite ice cream?', ['cookie-dough', 'mint-chip', 'strawberry'], 'mint-chip');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.deck).to.deep.equal([card1, card2, card3]);
        expect(round.turnCount).to.equal(1);
        expect(round.takeTurn('Sioux Falls')).to.equal('correct!');
        expect(round.turnCount).to.equal(2);
        expect(round.takeTurn('frog')).to.equal('incorrect!');
        expect(round.turnCount).to.equal(3);
        expect(round.incorrectGuesses).to.deep.equal([2]);
        expect(round.returnCurrentCard()).to.equal(card3);
})
    it('should be able to end a game', function {
        const card1 = new Card(1, 'What city is Maya from?', ['San Francisco', 'Santa Fe', 'Sioux Falls'], 'Sioux Falls');
        const card2 = new Card(2, 'What is Maya\'s favorite animal?', ['panda', 'frog', 'cat'], 'panda');
        const card3 = new Card(3, 'What is Emma\'s favorite ice cream?', ['cookie-dough', 'mint-chip', 'strawberry'], 'mint-chip');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn('San Francisco');
        round.takeTurn('panda');
        expect(round.calculatePercentCorrect()).to.equal(50);
        round.takeTurn('strawberry');
        expect(round.calculatePercentCorrect()).to.equal(66.67);
        expect(round.endRound()).to.equal(‘** Round over! ** You answered 66.67% of the questions correctly!’);

    })
})