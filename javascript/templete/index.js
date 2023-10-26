const name='Ashok';

const age =27;

const job = 'developer';

const city = 'Melbourne'

let html;

function hello(){
    return hello;
}

// with template strings


html=`
    <ul>
         <li>Name: ${name}</li>
         <li>Age: ${age}</li>
         <li>Job: ${job}</li>
         <li>City: ${city}</li>
         <li> hello: ${hello()}</li>
     </ul>
`;

document.body.innerHTML=html;
    