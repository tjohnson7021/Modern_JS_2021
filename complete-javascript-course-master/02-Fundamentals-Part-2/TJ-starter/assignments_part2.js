'use strict'; 
/* 
activating strict mode makes the code more secure. So again, first strict mode forbids us to do certain things and second it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.
*/


/*
* LECTURE: Functions
*/

// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

function describeCountry (country, population, capitalCity){
    // ** the line should print 'The' when the United States is entered as the country.
    return `${(country === 'usa' || country === 'USA')? 'The' : ''} ${country} has ${population} people and its capital city is ${capitalCity}.`;
}

// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

// USA - 33000000 - Washington, D.C
// Japan - 125800000 - Tokyo
// Russia - 144100000 - Moscow

const usa = describeCountry('USA', 335000000, 'Washington DC');
const japan = describeCountry('Japan', 125800000, 'Tokyo');
const russia = describeCountry('Russia', 144100000, 'Moscow');

console.log(usa);
console.log(japan);
console.log(russia);


