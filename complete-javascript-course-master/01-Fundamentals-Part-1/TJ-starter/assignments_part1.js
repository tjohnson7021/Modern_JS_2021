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


console.log('**********************************************************************')
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


console.log('**********************************************************************')
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


console.log('**********************************************************************')
/*
* LECTURE: Strings and Template Literals
*/

//1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
description = `The ${country} is in ${continent}, and its ${population} people speak ${language}.`;

console.log('String template literal: ' + description);


console.log('**********************************************************************')
/*
* LECTURE: Taking Decisions: if / else Statements
*/

// 1. If your country's population is greater than 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if (population > 33000000){
  console.log(`The ${country}'s population is above average.`);
} else {
  console.log(`The ${country}'s population is ${33000000 - population} below average`)  
}
// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

population = 13000000;
console.log(`The population is now set to: ${population}`);

if (population > 33000000){
  console.log(`The ${country}'s population is above average.`);
} else {
  console.log(`The ${country}'s population is ${33000000 - population} below average`)  
}

population = 130000000;
console.log(`The population is now set to: ${population}`);

if (population > 33000000){
  console.log(`The ${country}'s population is above average.`);
} else {
  console.log(`The ${country}'s population is ${33000000 - population} below average`)  
}

console.log('**********************************************************************')
/*
* LECTURE: Type Conversion and Coercion
*/
    console.log('9' - '5');
    console.log('19' - '13' + '17');
    console.log('19' - '13' + 17);
    console.log('123' < 57);
    console.log(5 + 6 + '4' + 9 - 4 - 2);

    console.log('**********************************************************************')
/*
* LECTURE: Equality Operators: == vs. ===
*/

// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');

 let numNeighbors = 2 //Number(prompt('How many neighbour countries does your country have?'));

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
if(numNeighbors === 1){
  console.log('Only 1 border!');
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1  
} else if(numNeighbors > 1){
  console.log('More than 1 border!');
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
} else {
  console.log('No borders');
}

// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
  //DONE
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
  //DONE
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
  //DONE
// 8. Reflect on why we should use the === operator and type conversion in this situation
  //DONE

  console.log('**********************************************************************')
/*
* LECTURE: Logical Operators
*/

// 1. Comment out the previous code so the prompt doesn't get in the way

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.

// 3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.  

// 4. If yours is the right country, log a string like this: 'You should live in Portugal :) '. If not, log 'Portugal does not meet your criteria :('

if (language === 'english' && population < 50000000 && !isIsland){
  console.log(`You should live in the ${country} :)`);
} else {
  console.log(`The ${country} does not meet your criteria :(`);
}


// 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

population = 45000000
console.log(`Population changed to: ${population}`);

if (language === 'english' && population < 50000000 && !isIsland){
  console.log(`You should live in the ${country} :)`);
} else {
  console.log(`The ${country} does not meet your criteria :(`);
}


console.log('**********************************************************************')
/*
* LECTURE: The switch Statement
*/