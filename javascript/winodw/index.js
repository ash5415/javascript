// window properties, methods and variables


//Methods:

// Alert:
       
     window.alert('hello world');

//prompt:

            const input =prompt();

            window.alert(input);


// confirm:

            if(confirm('are you ok')){
                console.log('yes');
            }else{
                console.log('no');
            };

//properties

// if you want to check the  outer width and height of the window:

         //example
                    let val;
                       val= window.outerHeight;
                       val= window.outerWidth;

// if you want to check the  outer width and height of the window:

//example
            
            val= window.innerHeight;
            val= window.innerWidth;

            console.log(val);


// scroll points:

        val=window.scrollX;
        val=window.screenY;
        console.log(val);

// location object: (host,port and href etc...)

     val= window.location.port;
     val=window.location.hostname;
     val=window.location.port;
     val=window.location.href;
     console.log(val);

// history object: (if you want you can try forward and backward)

//  if you want go back your website you can use the history object
       
window.history.go(-2);

// navigator object()[app location, version, platform and many more]

                val=navigator.language;
                console.log(val);

                val=navigator.platform;
                console.log(val);

                val=window.navigator.locks;
                console.log(val);

     
 