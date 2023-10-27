// function declarations

function app(firstName = 'ash', lastName = 'velpula'){
    return `hello ${firstName} ${lastName}`;
}
console.log(app());


//function expressions

const ph= function prod(x = 3) {
    return x * x;
    
}
console.log(ph());

// property methods

const todo={
    add : function(){
        console.log(('add todo'));
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}
todo.add();
todo.edit(22);