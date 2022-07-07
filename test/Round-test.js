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
    it('should record guesses and result', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const round = new Round('object', card);
        const card2 = new Card(2, 'What is Maya\'s favorite animal?', ['panda', 'frog', 'cat'], 'panda');
        const round2 = new Round('frog', card2);
        expect(round2.guesses).to.deep.equal([{answer: 'object', correct: true}, {answer: 'frog', correct: false}])
    })
    it('should have currentCard as first in Deck at Round start', function() {
        const deck = new Deck();
        const round = new Round();
        expect(round.currentCard).to.be.an.instanceof('Card');
        expect(round.currentCard).to.equal(deck.deck[0]);
    })
    
})