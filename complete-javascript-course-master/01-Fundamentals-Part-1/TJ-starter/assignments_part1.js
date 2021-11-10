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
let description = 'The ' + country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;

console.log(description);


/*
* CODING CHALLENGE # 1
*/

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
let markMass;
let johnMass;
let markHeight;
let johnHeight;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)

// let markBMI = markMass/markHeight ** 2
// let johnBMI = johnMass/(johnHeight * johnHeight);
 
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// let markHigherBMI = markBMI > johnBMI;

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

let markBMI = markMass/markHeight ** 2
let johnBMI = johnMass/(johnHeight * johnHeight);

console.log('mark\'s BMI: ' + markBMI);
console.log('john\'s BMI: ' + johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log('mark\'s BMI is higher: ' + markHigherBMI);

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBMI = markMass/markHeight ** 2
johnBMI = johnMass/(johnHeight * johnHeight);

console.log('mark\'s BMI: ' + markBMI);
console.log('john\'s BMI: ' + johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log('mark\'s BMI is higher: ' + markHigherBMI);