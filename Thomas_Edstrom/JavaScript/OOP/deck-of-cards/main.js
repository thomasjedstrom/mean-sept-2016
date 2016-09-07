$(function(){
	var currentDeck = null;
	var currentPlayer = null;
	var currentCard = null;

	$("#newgame").click(function(){
		$("#hand").empty();
		$("#deck").empty();
		$("#deck").append("<img src='img/b1fv.png' alt='deck'>")
		currentDeck = new DeckConstructor();
		currentPlayer = new PlayerConstructor();

	})




	$("#newperson").click(function(){
		currentPlayer = new PlayerConstructor("Thomas")
		$("#players").append("<img src='img/person.png' alt='person' class='person'>");
	})
	$("#newdeck").click(function(){
		currentDeck = new DeckConstructor()
	})
	$("#deal").click(function(){
		if (currentPlayer){
			var card = currentDeck.deal_random();
			$("#hand").append("<img src='img/" + card + ".png' id='" + card + "'>");
			currentPlayer.hand.push(card);
			currentCard = card;	
		}else{
			alert("please create a player");
		}

	})
	$("#discard").click(function(){
		$("#" + currentPlayer.hand[currentPlayer.hand.length-1]).remove();
		currentPlayer.hand.pop();
	})
})




var DeckConstructor = function(){
	this.card_count = 52;
	
	this.cards = []

	this.shuffle = function(){
		var currentIndex = this.cards.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = this.cards[currentIndex];
		this.cards[currentIndex] = this.cards[randomIndex];
		this.cards[randomIndex] = temporaryValue;
		}

		return this.cards;
	};

	this.reset = function(){
		var suits = ["c", "d", "s", "h"]
		for(var x=0; x<4; x++){
			for(var i=1; i<14; i++){
				if(i<11){
					this.cards.push(suits[x]+i.toString());
				}else if(i==11){
					this.cards.push(suits[x]+"j")
				}else if(i==12){
					this.cards.push(suits[x]+"q")
				}else{
					this.cards.push(suits[x]+"k")
				}			
			}
		}
	};
	this.reset();

	this.deal_random = function(){
		this.shuffle();
		var card = this.cards.pop()
		this.card_count -= 1;
		return card;
	};

}


var PlayerConstructor = function(name){
	this.deck = new DeckConstructor();
	this.name = name;
	this.hand = [];
	this.take = function(){
		card = this.deck.deal_random()
	}
	this.discard = function(card){
		i = this.hand.indexOf(card);
		this.hand.splice(i, 1);
	}
}