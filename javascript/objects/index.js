// objects

const person={
    firstName:'Ashok',
    lastName: 'velpula',
    job: 'developer',
    age:27,
    email:'ashok1668.v@gmail;.com',
    hobbies:['music','sports'],
    address:{
       city: 'Austraila',
       state:'victoria'
    },
    getBirthYear: function(){
        return 2023 - this.age;
    }
}

let val;
val =person
console.log(val);

val= person.firstName;

console.log(val);


const people=[
    {name:'ash', age:25},
    {name:'ashok', age:27},
    {name:'ash', age:28},
]

for(let i=0; i<people.length;i++){
    console.log(people[i].age);
}