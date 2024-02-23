//collecting form data
// how to collect data from text boxes
// document.getElementById('heading').style.color ='red';
// const log=document.getElementById('login').value;

// console.log(log);

const name= document.getElementById('firstName').value;
console.log(name);

const lname =document.getElementById('lastName').value;
console.log(lname);


// how to get value form the dropdown list

const country = document.getElementById('Country').value;
console.log(country);


/**
  events  [click, focus etc]

  --> Browser specific events happens on the browser like -resizing browser window, scrolling up and down etc..
  --> DOM specific events happen on the webpage. for example clicking a button,
      hovering over a webpage element, focusing a textbox etc..

      handling events in javascript
         --> inline event handler
         --> event handler properties
         --> using addEventListener() method
 */
// inline event handler:

{/* <input type="text" id="firstName" placeholder="name" 
 value="Ashok" onfocus="this.style.backgroundColor='yellow'"
 onblur="this.style.backgroundColor='white'"
 /> */}

// event handler properties

const lName=document.getElementById('lastName');
lName.onfocus=function(){
    lName.style.backgroundColor ='yellow';
};

lName.onblur=function(){
    lName.style.backgroundColor ='white';
}


const head = document.querySelector('#lpage');
    head.onmouseover=function(){
        head.style.color ='red';
}

head.onmouseout = function(){
    head.style.color ='white';
}

// head.onmouseout =function(){
//     head.style.color ='black';
// }


//using addEventListener() method

const button= document.getElementById('submit');
button.style.background ='green';
console.log(button);

//using addEventListener() method

function display(){
    alert('login');
};
 const submit = document.getElementById('submit');
 addEventListener('click', display);

 document.getElementById('submit');
 addEventListener('click',function(){
    this.alert('you have successfully logged in');
 });

 document.getElementById('password');
 addEventListener('focus',function(){
    this.document.getElementById('password').style.background ='yellow';
 });