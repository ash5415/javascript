let year= 'my date of birth 1993';

  if(year===1993){
    console.log('you are right');
  }else{
    console.log('the statement is wrong!!!!')
  };


//   let access;

//   let age= prompt('how old are you?');

//   if(age<18){
//     access=true;
//   }else{
//      access=false;
//   }



  let value = prompt('What is the "official" name of JavaScript?', '');

  if(value == ECMA){
       console.log(`right`);
  }else{
    console.log(`wrong`);
  }



  let result = prompt('Type a number', 0);
   if(reslult < 0){
       console.log(1);
   }else if(result > 0){
        console.log(-1)
   }else{
    console.log(0)
   }


   let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}



let mess= (login==='employee')
           ? 
           'hello' 
            : 
            (login==='Director') 
            ? 
            'start' 
            :
            (login==='No login')
            console.log('no one login')
