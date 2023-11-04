// constructor 

/*
    note : the constructor functions are technically regular functions.
    --> they are named with capital letter first.
    --> they should be executed only with "new" operator.
    --> A new empty object is created and assigned to this keyword.
    --> the function body executed. usually it modify "this" add new properties to it.
    --> the value of "this" returned. 
*/

// example:

      function Person(name,age){
        this.name=name;
        this.age=age;
      }
      let ash=new Person('arya',30);

      console.log(ash.name);
      console.log(ash.age);


// string

const name1='Ash';

const name2=new String('ashok');

console.log(name1);

if(name1 === 'Ash'){
    console.log('yes');
}else{
    console.log('no');
};


// number

const num1=5;

const num2=new Number(5);

//functions

const number= function(x,y){
      return x +y;
}

console.log(number(1,10));

// objects

const sum1={
             name:"ashok"
};

console.log(sum1);

//arrays

const array=[1,2,3,4,5,6,7,8,9];

console.log(array);


