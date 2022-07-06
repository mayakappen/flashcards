const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Deck', function() {

    it('should be a function', function() {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });
    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck)
    });
    it('should be an array', function() {
        const deck = new Deck();
        expect(deck.deck).to.be.an('array');
    });
    it('should initialize with array', function() {
        const deck = new Deck([1, 2, 3]);
        expect(deck.deck).to.equal([1, 2, 3]);
    });
    
});