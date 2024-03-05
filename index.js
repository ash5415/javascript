// Hotel Management Applications

// task -1 create the room constructor

var Room = function(capacity,price,number){
    this.capacity = capacity;
    this.price = price;
    this.number = number;
    this.booked = false
}

// task-2 add the info method to the room prototype

Room.prototype.info =function(){
    var information = 'Room number' + this.number+ 'is'+
    (this.booked? 'booked' : 'vacant')+ 'this room casts $' 
    + this.price+ 'per night and can host yp to '+ this.capacity+
    (this.capacity >1 ? 'guests' : 'guest')
    console.log(information)
}

// task -3 create rooms

let room1 = new Room(2,50,1);
let room2 = new Room(1,30.2);

room1.info();
room2.info();

// task-4 add the book method to the room prototype

Room.prototype.book = function(){
    this.booked = true;
    console.log('room number is' +this.number+' has been booked.');
}
room1.book();
room2.book();


// task -5 add the checkout method to the room prototype

Room.prototype.checkout = function(){
    this.booked = false;
    console.log('room number is '+ this.number+ 'has been checkout.');
}
room1.checkout();
room1.info();

// task 6  add the change price to the room prototype

Room.prototype.changePrice = function(newPrice){
    var oldPrice = this.price;
    this.newPrice =newPrice;
    console.log(`the price of the room number ${this.number}has been changed from \$${oldPrice}to \$${this.newPrice}.`);
}
room1.changePrice(60);
room1.info();
