let val;

val =document;
val=document.all;
val= document.all.length;
val=document.all[2];
val=document.body;
val=document.doctype;
val=document.domain;
val=document.URL;
val=document.characterSet;
val=document.contentType;

console.log(val);

// document.getElementById

console.log(document.getElementById('task'))

// get things form the element

// console.log(document.getElementById('task').id);

//change styling

document.getElementById('task').style.background='#333';
document.getElementById('task').style.color='#fff';
document.getElementById('task').style.padding='10px';

// if you want hidden anything 

document.getElementById('task').style.display='none';

// change content

document.getElementById('task').textContent='Task List';

document.getAnimations('task-title').innerText='My Tasks';

document.getElementById('task').innerHTML='<span style="color:red"> Task list </span>';

// if you want you need to a sign to a variable

const task=document.getElementById('task');

    task.style.background='#333';
    task.style.color='#fff';
    task.style.padding='10px';

task.textContent='Task List';

task.innerText='My Tasks';

task.innerHTML='<span style="color:red"> Task list </span>';

// document.querySelector() //selecting css selector

console.log(document.querySelector('#task'));

// class selector

console.log(document.querySelector('pass the  class name'));

// element selector

console.log(document.querySelector('h1'));

document.querySelector('ul li').style.color='red';
document.querySelector('li').style.color='blue';


// more than one element

// document.getelementByClassname


const collection= document.getElementsByClassName('item');

console.log(collection);

console.log(collection[0]);

collection[0].style.color='blue';

item[3].textContent='hello';

// document.getElementByTagName()  [get all the html collection

let list =document.getElementsByTagName('li');

console.log(list);
console.log(list[0]);

list[1].style.color='red';
list[3].textContent='Hello';


// QuerySelectorAll()

const liOdd=document.querySelectorAll('li:nth-child(odd)');

const liEven=document.querySelectorAll('li:nth-childEven(even)');

console.log(liOdd);
console.log(liEven);

liOdd.forEach(function(li,index){
    li.style.color='blue';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.color='green';
};
