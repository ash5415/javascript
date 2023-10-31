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

