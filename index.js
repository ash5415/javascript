/*
       constructor function:
       a constructor function is a type of function that is used to create and initialize objects within a class. 
       It serves as a blueprint for creating multiple objects with similar properties and methods. Constructor 
       functions are typically defined using a function declaration or function expression.
       Person is the constructor function.
       It takes name and age as parameters and assigns them to the respective properties (this.name and this.age) of the object being created.
       The new keyword is used to create new instances of the Person object.
       person1 and person2 are instances of the Person object, each with its own set of name and age properties.
 */
let Person =function(name,gender,birthYear){
    this.name = name;
    this.birthYear = birthYear,
    this.gender = gender;
    this.calcAge = function(){
        let age = new Date().getFullYear()- this.birthYear;
        console.log(age);
    }
};

let ash = new Person('jon','male',1993);
console.log(ash);

let potu = new Person('rahul','male',1990);
console.log(potu);

let sai = new Person('rana','male',1989);

console.log(sai);

/**
     default functional parameters
 */

     function getYearsBeforeRetirement(birthYear, retirementAge){
          // get current year
            
            let currentYear = new Date().getFullYear();   // 2021

            // calculate age from birth year

            let age = currentYear - birthYear;      // 1990

            // calculate years before retirement

            let yearsLeft = retirementAge - age;    // 31- 60
            return yearsLeft;  
     }

     let years = getYearsBeforeRetirement(1990,60);

     console.log(years);


     function greet(){
        return function(){
            console.log(`hello`)
        }
     }
     const result = greet();

    console.log(result);


    /**
      passing function as argument
     */

      let birthYears = [1990,1991,1992,1993,1994];
           console.log(birthYears);
      function getResultArray(arr,func){
             let result =[];

             for(let i =0; i < Array.length; i++){
                let value = func(arr[i]);
                result.push(value);
             }
             return result;
      }

       function calculateAge(birthYear){
              return 2024 - birthYear
      }

      const ages =getResultArray(birthYears,calculateAge);

      console.log(ages);