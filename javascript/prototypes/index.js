/*

     prototype:

              ==> The modern methods to get/set a prototype are:
                         1. Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
                         2. Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

                         let animal = {
                            eats: true
                            };

                            // create a new object with animal as a prototype
                            let rabbit = Object.create(animal); // same as {__proto__: animal}

                            alert(rabbit.eats); // true

                            alert(Object.getPrototypeOf(rabbit) === animal); // true

                            Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

*/

//person constructor 

function Person(firstName,lastName,age){
     this.firstName=firstName;
     this.lastName=lastName;
     this.age=age;
};

const Person1= new Person('ash','vel', 27);

console.log(Person1);

// greeting

Person.prototype.greeting=function(){
    return `hello ${this.firstName}, ${this.lastName}`
};

const Person2= new Person('ash','vel');

console.log(Person2.greeting());


// customer constructor
/*
      Person.call() method call the person details of the customer.
      we are store in the somewhere in the page. 
*/

function customer(firstName,lastName,phone,membership,age){
          Person.call(this, firstName,lastName,age);
          this.phone=phone;
          this.membership=membership;
};

// create a customer

const person3= new Person('tom','smith','0420467071',26,'standard');

  console.log(person3);


/*
    object prototype:
        the object.create() static method creates a new object, using an existing object as the prototype
        of the newly created object.
*/

 const PersonType={
      isHuman:false,
      ProcessingInstruction:function(){
            return `My name is {this.firstName},{this.lastName}`
      }
    };

    const detail= object.create(PersonType);
    detail.firstName='rahul';
    detail.lastName='potu';
    console.log(detail);
  
// creating proto type
    
const PersonProto= {
  greeting:function(){
    return`Hello ${this.firstName} ${this.lastName}`;
  },
  getMarried:function(){
    this.lastName=newLastName;
  }
}

const details= object.create(PersonProto);

      details.firstName = 'Ash';
      details.lastName = 'velpula';
      details.age = 30;
      details.getMarried(smith);
   console.log(details);
