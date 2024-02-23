let heading = document.getElementById('#heading');
 console.log(heading);

let label = document.querySelector('.label');
console.log(label);

let main = document.querySelector('.main');

console.log(main);

let title = document.querySelector('.title');
console.log(title);

// reading the webpage elements data//

// let reding = heading.textContent;

// console.log(reading);

// second way to read the webpage elements//

const read = main.innerHTML;

console.log(read);

// adding content ot the page//

const para = document.getElementById('paragraph').textContent = 'im in javascript page';



// changing styles and Attributes//
 /**
    ==> how to change the attribute value of a webpage element
    ==> how to change styles of a webpage element dynamically
    ==> how to add and remove class from webpage elements
  */

//how to change the attribute value of a webpage element

document.querySelector('img').src ='images/1.png';
document.querySelector('img').height = '220';
document.querySelector('img').width = '400';

//how to change styles of a webpage element dynamically//

// document.getElementById('heading').style.backgroundColor = 'orange';
document.getElementById('heading').style.color = 'red';


// how to add and remove class from webpage elements

//document.querySelector('div').classList.remove('div');

//add a class name 

document.querySelector('.main').classList.add('add');
document.querySelector('.main').style.backgroundColor = 'grey';