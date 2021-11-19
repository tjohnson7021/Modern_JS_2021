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


console.log('*******************************************************************');
/*
* LECTURE: Basic Array Operations (Methods)
*/

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}


console.log('*******************************************************************');
/*
* LECTURE: Dot vs. Bracket Notation
*/

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);