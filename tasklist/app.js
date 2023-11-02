// Define UI Vars

const form= document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn= document.querySelector('.clear-tasks');
const filter= document.querySelector('#filter');
const taskInput=document.querySelector('#task');
// load all event listeners
loadEventListener();

// load all event listeners
function loadEventListener(){
    // add task event
    form.addEventListener('submit',addTask);
    //remove task event
}


//Add task

function addTask(e){
    if(taskInput.value === ''){
        alert('add a task');
    }

    // create li elements
    const li =document.createElement('li');

     //add class
     li.className='collection-item';

    // create  text node node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create NEW LINK ELEMENT
    const link = document.createElement('a');

    //add class
    link.className='delete-item secondary-content';

    // add icon html
    link.innerHTML= '<i class="fa fa-remove"></i>';

    //append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value='';

    e.preventDefault();
}
