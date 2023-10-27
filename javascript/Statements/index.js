// if(something){
//     do something
// }else{
//     do something
// }


const id =100;

// equal to 

if (id == 100){
    console.log('correct');
}else{
    console.log('incorrect')
}

// not equal to 

if (id != 101){
    console.log('correct');
}else{
    console.log('incorrect')
}

// equal to value 

if (id === 100){
    console.log('correct');
}else{
    console.log('incorrect')
}


if (id){
    console.log(`the id is ${id}`);
}else{
    console.log('no id');
}

// greater or less than

if (id >= 100){
    console.log(`correct)`);
}else{
    console.log('incorrect')
}

if (id <= 100){
    console.log('correct');
}else{
    console.log('incorrect')
}

//if else

const color= 'red';

if(color === 'red'){
    console.log(`display the color red`);
}else if(color === 'green'){
    console.log(`display the wrong color`);
};



// logical operators

const name= 'ash';

const age= 20;

//AND &&

if(age > 0 && age< 12){
    console.log(`${name} is a child`);
}else if(age >=13 && age <=19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);
}

// or ||

if(age <= 5 || age <=15){
   console.log(`${name} is not qualified`);
}else{
    console.log(`${name} is registered to the race`);
}

// Ternary operator

console.log(id === 100 ? 'correct' : 'wrong');