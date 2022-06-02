'use strict';

/*
Destructuring is an ES6 feature that allows users to unpack/retrieve values from an array or object
and store them into separate variables.
*/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    //TODO: returns reassigned variables...???
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log('*** DESTRUCTURING ARRAYS ***');
/*** DESTRUCTURING ARRAYS ***/

//example without desructuring
const arr = [2,3,4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log('Regular Assigment: ',a,b,c);

//destructured assignment
const [x,y,z] = arr;
console.log('Destrcutured Assigment: ',x,y,z);
console.log('original array: ',arr);
console.log('\n');

//destructures only the 1st and 2nd variables in the array
const [first, second] = restaurant.categories;
console.log(first, second);
//OUTPUT: // Italian Pizzeria

//destructures the 1st and 3rd variables in the array, skipping the 2nd
const [phirst, ,sekund] = restaurant.categories;
console.log(phirst, sekund);
//OUTPUT: // Italian Vegetarian


// SWITCH 1st and 3rd Categories
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);
//OUTPUT: // Italian Vegetarian

//Don't do this:
  // const temp = main;
  // main = secondary;
  // secondary = temp;

//DO this:
[main, secondary] = [secondary, main];

console.log('*** After switching values');
console.log(main, secondary);
//OUTPUT: // Vegetarian Italian

console.log('\n');
console.log('*** order() function ***');

console.log(restaurant.order(2,0));

//receive 2 return values froma function
const [starter, mainCourse] = restaurant.order(2,0);

console.log(starter, mainCourse);

const nested = [2,4,[5,6]];

//destructuring and assigning variables taken from an array
// const [i, ,j] = nested;
// console.log(i,j);

//destructuring and assigning variables taken from an array
const[i, ,[j,k]] = nested;
console.log(i,j,k);

// Default vcalues
// const [p,q,r] = [8,9];
// console.log(p,q,r);
//the value for r logs as 'undefined'

//DEFAULT VALUES
const [p =1,q=1,r=1] = [8,9];
console.log(p,q,r);

