function hello(){

    let counter=document.querySelector('h1');
          //alert('hello')
        // if(document.querySelector('h1').innerHTML==='Hello'){
        //     document.querySelector('h1').innerHTML='Goodbye';
        // }else{
        //     document.querySelector('h1').innerHTML='Hello';
        // }
        if(counter.innerHTML==='Hello'){
            counter.innerHTML='Goodbye';
        }else{
            counter.innerHTML='Hello';
        }
          
    };