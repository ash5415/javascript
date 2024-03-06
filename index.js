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
let room3 = new Room(2,50,3);

room1.info();
room2.info();
//room3.info();

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
   

// task-6 create a room1,room2,room3 and hotel

var hotel ={
name: 'Ash Hotels',
star: 5,
rooms : [room1,room2.room3]
}

// task -7 Add the info method to the hotel

hotel.info=function(){
    for(var i=0; i<this.rooms.length; i++){
        this.rooms[i].info();
    }
}
hotel.info();


// task-8 add the book method

hotel.book = function(guest){
   for(var i =0 ; i<this.rooms.length; i ++){
    var roomFound = false;
    if(!this.rooms[i].booked && this.rooms[i].capacity >= guest.capacity){
        this.rooms[i].book();
        roomFound =true;
        break;

    }
    if(!roomFound){
        console.log(`sorry there is no rooms`);
    }
   }
}
hotel.book(2);
hotel.info();

//task -9  add the check out method to the hotel

hotel.checkout =function(number){
       for(var i =0; i < this.rooms.length; i++ ){
        if(this.rooms[i].number === rNumber){
                this.rooms[i].checkout();
                break;
        }
       }
}
hotel.checkout(1);
hotel.info();