const person={
     name:'ash',
     age:30,
     job: 'developer',
     showInfo: function(realAge){
        console.log(this.name + ' is ' + realAge);
     }
}

function incrementAge(person){
    person.age ++
}
//console.log(obj.showInfo);
incrementAge(person);
//obj.showInfo(34);
console.log(person.age);

let now = new Date();

console.log(now.toDateString());


// Arrays


const values =['a','b','c','d'];

//const ash = values.slice(1,2);

values.forEach(element => {
    console.log(element);
});