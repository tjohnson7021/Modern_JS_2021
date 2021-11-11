/*
* LECTURE: Values and Variables
*/

// let country = 'USA';
// let continent = 'North America';
// let population = 75000000;

// console.log('country: ', country);
// console.log('continent: ', continent);
// console.log('population: ', population);


/*
* LECTURE: Data Types
*/

// let country = 'USA';
// let continent = 'North America';
// let population = 75000000;

let isIsland = false;
let language; 

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);



/*
* LECTURE: let, const and var
*/
const country = 'USA';
const continent = 'North America';
let population = 74999999;

isIsland = false;
language = 'english'; 

console.log('country: ', country);
console.log('continent: ', continent);
console.log('population: ', population);
console.log('is island?: ', isIsland);
console.log('language: ', language);



/*
* LECTURE: Basic Operators
*/

// 1. If your country split in half,and each half would contain half the population, then how many people would live in each half?
console.log(population/2);
// 2. Increase the population of your country by 1 and log the result to the console
population++;
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
console.log(population > 6000000);

// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
console.log(population < 33000000);

// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
let description = 'The ' + country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language +'.';

console.log('Concatenanted string: ' + description);


/*
* LECTURE: Strings and Template Literals
*/

//1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
description = `The ${country} is in ${continent}, and its ${population} people speak ${language}.`;

console.log('String template literal: ' + description);


/*
* LECTURE: Taking Decisions: if / else Statements
*/

// 1. If your country's population is greater than 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if (population > 33000000){
  console.log(`The ${country}'s population is above average.`);
} else {
  console.log(`The ${country}'s population is ${33000000 - population} below average`)  
}
// 2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original

