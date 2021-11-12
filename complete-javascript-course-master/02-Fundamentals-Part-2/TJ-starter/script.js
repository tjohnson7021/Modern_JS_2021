'use strict'; 
/* 
activating strict mode makes the code more secure. So again, first strict mode forbids us to do certain things and second it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.
*/

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // w/o strict mode (line 1), the error on this line would not show.
if (hasDriversLicense) console.log ('I can drive :D')

console.log('*******************************************************************');
/*
* LECTURE: Functions
*/

function logger (){
  console.log('My name is Jonas');
}

// 'calling' / 'running' / 'invoking the function'
logger();

function fruitProcessor(apples, bananas){
  console.log(apples, bananas);
  const juice = `Juice with ${apples} apples and ${bananas} bananas.`; 
  return juice;
}

const smoothie = fruitProcessor(5,3);
console.log(smoothie);

console.log(fruitProcessor(4,4));

// Function declaration - CAN be called before definition
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
  }

  
  // Function expression - CANNOT be called before declaration
  const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);