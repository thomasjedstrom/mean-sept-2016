// The Deck should contain the 52 standard cards
//  CHECK
// The Deck should be able to shuffle
//  CHECK
// The Deck should be able to reset
//  CHECK
// The Deck should be able to deal a random card
// CHECK
// Deal should return the card that was dealt and remove it from the deck
// CHECK

function Deck(){
  var hearts = ['A Hearts','2 Hearts','3 Hearts','4 Hearts','5 Hearts','6 Hearts','7 Hearts','8 Hearts','9 Hearts','10 Hearts','J Hearts','Q Hearts','K Hearts'];
  var diamonds = ['A Diamonds', '2 Diamonds','3 Diamonds','4 Diamonds','5 Diamonds','6 Diamonds','7 Diamonds','8 Diamonds','9 Diamonds','10 Diamonds','J Diamonds','Q Diamonds','K Diamonds'];
  var clubs = ['A Clubs', '2 Clubs','3 Clubs','4 Clubs','5 Clubs','6 Clubs','7 Clubs','8 Clubs','9 Clubs','10 Clubs','J Clubs','Q Clubs','K Clubs'];
  var spades = ['A Spades', '2 Spades','3 Spades','4 Spades','5 Spades','6 Spades','7 Spades','8 Spades','9 Spades','10 Spades','J Spades','Q Spades','K Spades'];
  this.deck = diamonds.concat(hearts).concat(clubs).concat(spades);
  this.reset = function(){ this.deck = diamonds.concat(hearts).concat(clubs).concat(spades); }
}

Deck.prototype.dealCard = function(){
  var card = this.deck[this.deck.length -1];
  this.deck.pop();
  return card;
}

Deck.prototype.shuffle = function(){
  var currentIndex = this.deck.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = this.deck[currentIndex];
    this.deck[currentIndex] = this.deck[randomIndex];
    this.deck[randomIndex] = temporaryValue;
  }
  return this;
}


// The Player should have a name
//  CHECK
// The Player should have a hand
//  CHECK
// The Player should be able to take a card (use the deck.deal method)
//  CHECK
// The Player should be able to discard a card
// CHECK
function Player(name){
  this.name = name;
  this.hand = {};

  this.drawCard = function(game_deck){
    var tmp = game_deck.dealCard();
    this.hand[tmp] = tmp;
    return this;
  }
  this.discardCard = function(card_to_discard){
    delete this.hand[card_to_discard];
  }
  this.getHand = function(){
    var a = []
    for (key in this.hand){
        a.push(String(key));
    }
    return a;
  }
}

deck = new Deck();
deck.shuffle();
billy = new Player('billy');
console.log(billy.name + ' ' + billy.getHand());
billy.drawCard(deck);
billy.drawCard(deck);
console.log(billy.name + ' ' + billy.getHand());
