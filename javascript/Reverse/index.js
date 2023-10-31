// let val;

// const list = document.querySelector('ul.item-collection');

// const listItem=document.querySelector('li.item :first-child');

// val =list;
// val=listItem;

// console.log(val);

//creating elements and adding to the dom

// create element

const li= document.createElement('li');

//add class
 li.className='item';

 // add id

 li.id='new-item';

 // add attributes

 li.setAttribute('title','New Item');

 // create a text node and append

 li.appendChild(document.createTextNode('Hello world'));

 // create a new link element

 const link= document.createElement('a');

 // add className 

 link.className='delete-item secondary';

 //add icon html

 link.innerHTML='<li class="delete-item secondary-content"></li>';

 // append link to li

 link.appendChild(link);

 //append li as child to ul

 document.querySelector('ul.item-collection').appendChild(li);

 console.log(li);



 //  how to remove elements

 const newHeading =document.createElement('h2');

 // add id
newHeading.id='task-title';

//new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading

const oldHeading=document.getElementById('task');
//parent
const cardAction= document.querySelector('item');
// replace
cardAction.replaceChild(oldHeading, newHeading);

console.log(newHeading);

// remove element

const lis=document.querySelectorAll('li');

const list =document.querySelector('ul');

// remove list item

lis[0].remove();

 