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