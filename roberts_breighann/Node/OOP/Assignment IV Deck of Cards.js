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

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
   
    temporaryValue = this.deck[currentIndex];
    this.deck[currentIndex] = this.deck[randomIndex];
    this.deck[randomIndex] = temporaryValue;
  }
  return this;
}

function Player(name){
  this.name = name;
  this.hand = {};

  this.drawCard = function(game_deck){
    var tmp = game_deck.dealCard();
    this.hand[tmp] = tmp;
    return this;
  }
  this.discardCard = function(discard_card){
    delete this.hand[discard_card];
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
jennifer = new Player('Jennifer');
console.log(jennifer.name + ' ' + jennifer.getHand());
jennifer.drawCard(deck);
breigh = new Player('Breigh');
breigh.drawCard(deck);
console.log(breigh.name + ' ' + breigh.getHand());
breigh.drawCard(deck);