//Completed 05-06-2022
'use strict';

console.log('this.<...>',this);

/*
* Inner functions have access to outer or parent variables
* but parent functions do not have access to a child's (inner)
* variable(s).
*/

function calcAge (birthYear){
  const age = 2037 - birthYear;

  function printAge(){
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996){
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a,b){
        return a + b;
      }
    }
    /* console.log(str);  <- cannot access str
    variable outside of the if-block scope */

    console.log(millenial); /* <- this pre-ES6 var variable is
    function-scoped so they ignore the block and work with the
    entire function the block is contained within */

   /* console.log(add(2,3)); /* <- in 'strict mode', this function cannot be called
    outside of its block. the scope is limited to the if-block*/
  }
  printAge();

  return age;
}

const firstName = 'Khalidriana';
calcAge(1989);
/* console.log(age); <- cannot access age
variable outside of the function scope */