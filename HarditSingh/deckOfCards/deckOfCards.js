function DeckConstructor(){
	this.reset = function() {
		this.deck = [];
		var suites = {
			1: 'c',
			2: 's',
			3: 'd',
			4: 'h'
		}
		var jqk = {
			11: "j",
			12: "q",
			13: "k"
		}
		for (var j = 1; j<5;j++) {
			var cardName;
			for (var i  = 1; i <=13; i++) {
				if (i in jqk) {
					cardName= suites[j]+jqk[i]+'.png';
					this.deck.push(cardName);
				}
				else {
					cardName=suites[j]+i+'.png';
					this.deck.push(cardName);
				}
			}
		}
		return this.deck;
	}
	this.reset();

	this.shuffle = function(){
		var randomCard = 0;
		var temp = 0;
		console.log(this.deck.length);
		for (var i = 0; i <this.deck.length;i++){
			randomCard=Math.floor(Math.random() * this.deck.length);
			temp = this.deck[i];
			this.deck[i] = this.deck[randomCard];
			this.deck[randomCard] = temp;
		}

		return this.deck;
	}

	this.deal = function(){
		var card = this.deck[0];
		this.deck.shift();
		return card;
	}
}

var newDeck = new DeckConstructor();

function PlayerConstructor(name){

	this.name = name;
	this.hand = [];

	this.takeCard = function(deck){
		this.hand.push( deck.deal() );
		return this;
	}

	this.discard = function(whichCard) {
		this.hand.splice(whichCard,1);
		return this;
	}
	
}


var newDeck = new DeckConstructor();
var newPlayer = new PlayerConstructor("hardit");

console.log(newPlayer.takeCard(newDeck));
