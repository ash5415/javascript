// for loop

// for (let i=0; i < 10; i++){
//    console.log(i);
// }

for (let i =0; i <10; i++){
    if(i===2){
        console.log('here 2 is my favorite number');
       continue;
    }
    console.log(i);
};


// while loop

let i =0;

while(i<10){
    console.log('number is' + i);
    i++;
}

// array

const  cars =['honda','toyota','apple','bmw'];

for(i=0; i<cars.length; i++){
    console.log(` here list out the cars: ${cars[i]}`);
};

// foreach

cars.forEach(function(car,index){
   console.log(`${index} :${car}`);
});

// map

const people=[
    {name: 'jon', id:1},
    {name: 'tony', id:2},
    {name: 'ash', id:3},
    {name: 'har', id:4},
];

   const name= people.map(function(people){
      return people.name;
   });

   console.log(name);