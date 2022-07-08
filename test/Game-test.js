const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const prototypeData = require('../src/data');
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
    it('should keep track of current round', function() {
        const card1 = new Card(1, 'What city is Maya from?', ['San Francisco', 'Santa Fe', 'Sioux Falls'], 'Sioux Falls');
        const card2 = new Card(2, 'What is Maya\'s favorite animal?', ['panda', 'frog', 'cat'], 'panda');
        const card3 = new Card(3, 'What is Emma\'s favorite ice cream?', ['cookie-dough', 'mint-chip', 'strawberry'], 'mint-chip');
        const deck = new Deck([card1, card2, card3]);
        const round1 = new Round(deck)
        const game = new Game()
        const round2 = new Round(deck)
        game.start();
        expect(game.currentRound).to.equal(1)
    })
    it('should be able to start a game', function() {
        const game = new Game()
        game.start(prototypeData)
        expect()

        
    })
})