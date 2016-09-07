function Deck(){
	this.cards = [];
	var self = this;
	var newDeck = function(){
		if (self.cards.length != 0){
			self.cards.length = 0;
		}
		for(var i = 1; i <= 12; i++){
			var cardValue;
			if (i == 1){
				cardValue = 'Ace';
			} else if (i > 10) {
				switch (i){
					case 10: cardValue = 'Jack'; break;
					case 11: cardValue = 'Queen'; break;
					case 12: cardValue = 'King'; break;
				}
			} else {
				cardValue = '' + i;
			}
			self.cards.push({ 'suit': 'Spades', 'val': cardValue });
			self.cards.push({ 'suit': 'Hearts', 'val': cardValue });
			self.cards.push({ 'suit': 'Diamonds', 'val': cardValue });
			self.cards.push({ 'suit': 'Clubs', 'val': cardValue });
		}
	}
	newDeck();
	this.reset = function(){
		newDeck();
		return this;
	}
}
Deck.prototype.shuffle = function(){
	for (var i = this.cards.length - 1; i > 0; i--){
		var temp = this.cards[i];
		var j = Math.floor(Math.random()*i);
		this.cards[i] = this.cards[j];
		this.cards[j] = temp;
	}
	return this;
}
Deck.prototype.deal = function(){
	if (this.cards.length == 0){
		return null;
	}
	var card = this.cards[this.cards.length - 1];
	this.cards.pop();
	return card;
}
Deck.prototype.dealRandom = function(){
	if (this.cards.length == 0){
		return null;
	}
	var idx = Math.floor(Math.random()*this.cards.length);
	var card = this.cards[idx];
	for (var i = idx; i < this.cards.length; i++){
		this.cards[i] = this.cards[i+1]
	}
	this.cards.pop();
	return card;
}

// TESTS
// var mydeck = new Deck();
// console.log(mydeck.cards);
// mydeck.shuffle();
// console.log(mydeck.cards);
// console.log(mydeck.deal());
// console.log(mydeck.cards);
// console.log(mydeck.dealRandom());
// console.log(mydeck.cards);

function Player(name){
	this.name = name;
	this.hand = [];
}
Player.prototype.draw = function(num, deck){
	for (var i = num; i > 0; i--){
		this.hand.push(deck.dealRandom());
	}
	return this;
}
Player.prototype.discard = function(idx){
	if (idx > this.hand.length-1){
		return null;
	}
	for (var i = idx; i < this.hand.length; i++){
		this.hand[i] = this.hand[i+1];
	}
	this.hand.pop();
	return this;
}

// TESTS
// var mydeck = new Deck();
// mydeck.shuffle();
// var daniel = new Player('Daniel');
// daniel.draw(5, mydeck);
// console.log(daniel.hand);
// daniel.discard(2);
// console.log(daniel.hand);
// console.log(mydeck.cards);
