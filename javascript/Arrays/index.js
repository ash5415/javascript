// creating some Arrays

const num1 = [1,2,3,4,5,6,7,8];

const num2= new Array(22,23,245,25,26);

const fruits=['apple','banana','orange','pear'];

let val;

// get array length

val = num1.length;
 //check if array

 val= Array.isArray(fruits);

 // get a value
val = num1[3];

// insert any value

//num[1]=100;

// find the indexof

val =num1.indexOf(3);

// push any arrays
// Add omn to end
num1.push(200);

// Add on to front

num1.unshift(120);

// take of from end

num1.pop();
// take of from front

num1.shift();
// splice values

num1.splice(1,3);
// reverse

num1.reverse();
// concat

val= num1.concat(num2);

// using the compare function

val= num1.sort(function(a,b){
   return a-b;
});
// reverse sort

val= num1.sort(function(a,b){
         return b-a;
});

console.log(num1);
console.log(val);