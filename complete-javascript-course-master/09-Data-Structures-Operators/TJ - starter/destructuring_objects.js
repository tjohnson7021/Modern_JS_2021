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



console.log('*** DESTRUCTURING OBJECTS ***');
/*** DESTRUCTURING OBJECTS ***/

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// What if we want the variable names to be different from the property names?...
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

console.log('=== Default values ===');
// Let's say we want to create a menu from the existing restaurant object (i.e. restaurant.menu doesn't exist)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

console.log('=== Mutating variables ===');
let t = 111;
let s = 999;

const obj = { t: 23, s: 7, v: 14 };

({ t, s} = obj);

console.log(t, s);

console.log('=== Nested Objects ===');
const { fri: {open: fridayOpen, close: fridayClose} } = openingHours;
console.log(fridayOpen, fridayClose);



