function Deck(){
    this.buildDeck();
}

Deck.prototype.buildDeck= function(){

    var suits =['diamonds', 'clubs', 'hearts', 'spades'],
    values =['ace','2','3','4','5','6','7','8','9', '10', 'jack','queen', 'king'],
    self= this;
    this.cards=[];

    suits.forEach(function(suit){
        values.forEach(function(value){
            self.cards.push(new Card(value, suit));
        });
    });return this;
}

Deck.prototype.shuffle= function(){
    var randomCard = 0;
    var temp = 0;
    for (var i = 0; i <this.cards.length;i++){
        randomCard=Math.floor(Math.random() * this.cards.length);
        temp = this.cards[i];
        this.cards[i] = this.cards[randomCard];
        this.cards[randomCard] = temp;
    }
    return this.cards;
}

Deck.prototype.reset= function(){
    this.buildDeck().shuffle();
}

Deck.prototype.dealRandomCard= function(){
    if (this.cards.length > 0){
         return this.cards.pop();
     }
     else{
         return null;
     }
}

function Card(value, suit){
    this.value= value;
    this.suit= suit;

}
function Player(name){
    this.name= name;
    this.hand=[];

}
Player.prototype.takecard = function(deck){
    this.hand.push(deck.dealRandomCard());
    return this;

}
Player.prototype.discard= function(cardinx){
    if(this.hand.length > cardinx){
        this.hand.splice(cardinx, 1);
    }
    return this;
}


//checks
// var bob= new Player('bob');
// var deck= new Deck();
