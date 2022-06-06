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

    //function that will be passed as an argument
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]}
                and ${this.mainMenu[mainIndex]} will be delivered to
                ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3} `);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//calling new delivery function
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });


console.log('*** THE REST OPERATOR ***');
/*** THE REST OPERATOR ***/

/**
 * The SPREAD operator works on the RIGHT side:
 */
const arr =[1,2,...[3,4]];

/**
 * The REST operator works on the LEFT side:
 */
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

/**
 * Objects (Rest Pattern)
 */

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


/**
 *  2) Functions (Rest Pattern)
 */
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // adds all the values in x, whatever they are.


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// console.log('*** THE SPREAD OPERATOR ***');
// /*** THE SPREAD OPERATOR ***/

// const arr = [7,8,8];
// // this is one way of creating a new array from an old array
// const badNewArray = [1,2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// //creating a new array from an old array using the spread operator (...)
// console.log('\n');
// console.log('+++ with spread operator(...) +++');
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// //creating a new array from an old array WITHOUT using the spread operator creates a NESTED ARRAY
// console.log('\n');
// console.log('+++ without spread operator(...) +++');
// const newArrWithoutSpread = [1, 2, arr];
// console.log(newArrWithoutSpread);


// //log the individual entries to the console using the spread operator
// console.log('\n');
// console.log('+++ console.log() with spread operator(...) +++');
// console.log(...newArr);

// console.log('\n');
// console.log('+++ create newMenu using restaurant.mainMenu +++');
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// /*
// the spread operator takes ALL of the elements from the array, and does not create new variables. It
// can only be used in places where we would out values separated by commas
// */

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu);

// /*
// The spread operator works on all Iterables (arrays, strings, maps, or sets)
// */
// console.log('\n');
// console.log('+++ spread operator works on all iterables (arrays, strings, maps, or sets) +++');
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Ingredient 2? "),
// //   prompt("Ingredient 3? "),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// /**
//  * As of ES2018, the spread operator works on OBJECTS
//  */
//  console.log('\n');
//  console.log('+++ using the (...) with Objects (ES2018) +++');

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Guiseppe'
// };

// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// console.log('*** DESTRUCTURING OBJECTS ***');
// /*** DESTRUCTURING OBJECTS ***/

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// // What if we want the variable names to be different from the property names?...
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// console.log('=== Default values ===');
// // Let's say we want to create a menu from the existing restaurant object (i.e. restaurant.menu doesn't exist)
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// console.log('=== Mutating variables ===');
// let t = 111;
// let s = 999;

// const obj = { t: 23, s: 7, v: 14 };

// ({ t, s} = obj);

// console.log(t, s);

// console.log('=== Nested Objects ===');
// const { fri: {open: fridayOpen, close: fridayClose} } = openingHours;
// console.log(fridayOpen, fridayClose);



// console.log('');
// console.log('*** DESTRUCTURING ARRAYS ***');
// /*** DESTRUCTURING ARRAYS ***/

// //example without desructuring
// const arr = [2,3,4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log('Regular Assigment: ',a,b,c);

// //destructured assignment
// const [x,y,z] = arr;
// console.log('Destrcutured Assigment: ',x,y,z);
// console.log('original array: ',arr);
// console.log('\n');

// //destructures only the 1st and 2nd variables in the array
// const [first, second] = restaurant.categories;
// console.log(first, second);
// //OUTPUT: // Italian Pizzeria

// //destructures the 1st and 3rd variables in the array, skipping the 2nd
// const [phirst, ,sekund] = restaurant.categories;
// console.log(phirst, sekund);
// //OUTPUT: // Italian Vegetarian


// // SWITCH 1st and 3rd Categories
// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);
// //OUTPUT: // Italian Vegetarian

// //Don't do this:
//   // const temp = main;
//   // main = secondary;
//   // secondary = temp;

// //DO this:
// [main, secondary] = [secondary, main];

// console.log('*** After switching values');
// console.log(main, secondary);
// //OUTPUT: // Vegetarian Italian

// console.log('\n');
// console.log('+++ order() function +++');

// console.log(restaurant.order(2,0));

// //receive 2 return values froma function
// const [starter, mainCourse] = restaurant.order(2,0);

// console.log(starter, mainCourse);

// const nested = [2,4,[5,6]];

// //destructuring and assigning variables taken from an array
// // const [i, ,j] = nested;
// // console.log(i,j);

// //destructuring and assigning variables taken from an array
// const[i, ,[j,k]] = nested;
// console.log(i,j,k);

// // Default vcalues
// // const [p,q,r] = [8,9];
// // console.log(p,q,r);
// //the value for r logs as 'undefined'

// //DEFAULT VALUES
// const [p =1,q=1,r=1] = [8,9];
// console.log(p,q,r);

