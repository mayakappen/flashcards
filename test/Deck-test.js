const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });
    it.skip('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck)
    });
    it.skip('should be an array', function() {
        const deck = new Deck();
        expect(deck.deck).to.be.an('array');
    });
    it.skip('should initialize with array', function() {
        const deck = new Deck([1, 2, 3]);
        expect(deck.deck).to.equal([1, 2, 3]);
    });
    it.skip('should know how many cards are in Deck', function() {
        const deck = new Deck([1, 2, 3, 4, 5, 6, 7])
        expect(deck.length).to.equal(7);
    });

});