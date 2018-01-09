function Card(suit, stringVal){
    this.suit = suit;
    this.stringVal = stringVal;
}

function Deck(){
    this.cards = [];
    this.reset = function(){
        var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        var names = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for(suit of suits){
            for(name of names){
                this.cards.push({name: name + " of " + suit});
            }
        }
    }

    this.swap = function(x,y){
        var temp = this.cards[x];
        this.cards[x] = this.cards[y];
        this.cards[y] = temp;
    }

    this.shuffle = function(){
        for(let i = 0; i < this.cards.length; i++){
            rand = Math.floor(Math.random()*this.cards.length)
            this.swap(i, rand);
        }
    }

    this.deal = function(){
        return this.cards.pop();
    }
}

function Player(name){
    this.name = name;
    this.hand = [];

    this.deal(deck) = function(){
        this.hand.push(deck.deal())
    }
    
    this.discard(index) = function(){
        var card = this.hand[index];
        for(var i = index-1; i < this.hand.length; i++){
            this.hand[i] = this.hand[i + 1];
        }
        return card;
    }
}

var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Let's play Blackjack! What is your name? ", answer)

function answer(response) {
    console.log(response)
}

