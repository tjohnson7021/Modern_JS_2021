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
    return `${(country === 'usa' || country === 'USA')? 'The ' : ''}${country} has ${population} people and its capital city is ${capitalCity}.`;
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


console.log('*******************************************************************');
/*
* LECTURE: Function Declarations vs. Expressions
*/

// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100.
function percentageOfWorld1(countryPop){
    return (countryPop/7900000000)*100;
}
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
console.log(percentageOfWorld1(1441000000));
console.log(percentageOfWorld1(335000000));
console.log(percentageOfWorld1(125800000));

// 4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations).
const percentageOfWorld2 = function (countryPop){
    return (countryPop/7900000000)*100;
}

console.log(percentageOfWorld2(1441000000));
console.log(percentageOfWorld2(335000000));
console.log(percentageOfWorld2(125800000));

const chinaPercOfWorld = percentageOfWorld2(1441000000);
console.log(chinaPercOfWorld + ' (assign to variable and print)');


console.log('*******************************************************************');
/*
* LECTURE: Arrow Functions
*/

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'.

const percentageOfWorld3 = countryPop => (countryPop/7900000000)*100;
//                              ∆                      ∆
//                              |                      |
//                           thing to                  |
//                           take in            thing to return


console.log(percentageOfWorld3(1441000000));

const china = percentageOfWorld3(1441000000);
console.log(china + ' (assign to variable and print)');


console.log('*******************************************************************');
/*
* LECTURE: Functions Calling Other Functions
*/

// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'.

// 2. To calculate the percentage,'describePopulation' call the 'percentageOfWorld1' you created earlier.

function describePopulation(country, population){
    const worldPopPerc = percentageOfWorld1(population);
    // ** the line should print 'The' when the United States is entered as the country.
    return console.log(`${(country === 'usa' || country === 'USA')? 'The ' : ''}${country} has ${population/1000000} million people, which is about ${worldPopPerc}% of the world.`);
}

// 3. Call 'describePopulation' with data for 3 countries of your choice.

describePopulation('USA', 335000000);
describePopulation('China', 1441000000);
describePopulation('Japan', 125800000);



console.log('*******************************************************************');
/*
* LECTURE: Introduction to Arrays
*/

const usaPop = 335000000;
const japanPop = 125800000;
const russiaPop = 139700000;
const chinaPop = 1441000000;


// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'.

const populations = [usaPop, japanPop, russiaPop, chinaPop];

// 2. Log to the console whether the array has 4 elements or not (true or false).

const has4Elements = populations.length === 4; 
console.log(has4Elements);

// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages);




console.log('*******************************************************************');
/*
* LECTURE: Basic Array Operations (Methods)
*/

//push - adds argument to end of array; also returns length of new array. 
//unshift - adds argument to beginning of array; also returns length of new array.
//pop - removes the last element of the array; returns the removed element.
//shift - removes first element in the array; returns the removed element.
//indexOf - returns the index of the given argument; returns -1 if argument doesnt exist.
//includes - returns true ot false if the element exists.


// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'.

const neighbors = ["Canada", "Mexico"];
console.log("Neighbors Array " + neighbors);

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array.
neighbors.push("Utopia");
console.log("New Country Added! " + neighbors);

// 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array.
neighbors.pop();
console.log("New Country Removed! " + neighbors);

// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'.
if(!neighbors.includes("Germany")) 
    console.log(`Probably not a central European country :D`)


// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const indexOfMexico = neighbors.indexOf("Mexico");
neighbors[indexOfMexico] = "Republic of Mexico";

console.log(neighbors);



console.log('*******************************************************************');
/*
* LECTURE: Introduction to Objects
*/

// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments).

const myCountry = {
    country: "USA",
    capital: "Wasington DC",
    language: "English",
    population: 335000000,
    neighbors: ["Canada", "Mexico"],

    describe: function() {
        return console.log(`The ${this.country} has ${this.population/1000000} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`)

    },

    checkIsland: function () {
        return this.isIsland = this.neighbors.length > 0 ? false : true;

    }
    
}

console.log(myCountry);


console.log('*******************************************************************');
/*
* LECTURE: Dot vs. Bracket Notation
*/

// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'.

console.log(`The ${myCountry.country} has ${myCountry.population/1000000} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

myCountry.population = myCountry.population + 2000000;
console.log(myCountry.population);

myCountry["population"] = myCountry["population"] - 2000000;
console.log(myCountry["population"]);



console.log('*******************************************************************');
/*
* LECTURE: Object Methods
*/

// 1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// 2. Call the 'describe' method.

myCountry.describe();

// 3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
console.log(myCountry.checkIsland());





console.log('*******************************************************************');
/*
* LECTURE: Iteration: The for Loop
*/

// 1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

for (let count = 1; count <= 50; count++){
    console.log(`Voter #${count} is currently voting 0.o`);
}


console.log('*******************************************************************');

/*
* LECTURE: Looping Arrays, Breaking and Continuing
*/

// 1. Let's bring back the 'populations' array from a previous assignment.

// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier.
const percentages2 =[];

for(let i = 0; i < populations.length; i++){
    percentages2[i] = percentageOfWorld1(populations[i]); 
}
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is

console.log(percentages);
console.log(percentages2);


console.log('*******************************************************************');

/*
* LECTURE: Looping Backwards and Loops in Loops
*/