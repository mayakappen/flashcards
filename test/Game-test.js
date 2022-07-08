const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

    it('should be a function', function() {
        const game = new Game()
        expect(Game).to.be.a('function')
    })
    it('should be an instance of Game', function() {
        const game = new Game()
        expect(game).to.be.an.instanceof(Game);
    })
})