'use strict';

// *** PRIMITIVE TYPES *** //
let lastName  = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // acts as expected.

// *** REFERENCE TYPES *** //
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log("Before marriage", jessica);
//OUTPUT// lastName: 'Davis'
console.log("After marriage", marriedJessica);
//OUTPUT// lastName: 'Davis'

/*
When we attempted to copy the original 'jessica' object to the
'marriedJessica' object, it did not create a new object in the heap.

'marriedJessica' is just another variable in the stack which holds
the reference to the original object (jessica).

They hold the same memory address reference in the heap. Any changes
to 'marriedJessica' will change 'jessica'
 */


/*** TO CREATE A NEW (shallow) OBJECT FROM AN EXISTING ONE ***/
console.log('*** After making a SHALLOW copy of the reference object with Object.assign');
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log("Before marriage", jessica2);
//OUTPUT// lastName: 'Williams'
console.log("After marriage", jessicaCopy);
//OUTPUT// lastName: 'Davis'

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log("*** Added 'family' array and push to names to jessica2.family");

console.log("Before marriage", jessica2);
//OUTPUT// family: (4) ['Alice', 'Bob', 'Mary', 'John']
console.log("After marriage", jessicaCopy);
//OUTPUT// family: (4) ['Alice', 'Bob', 'Mary', 'John']

/*
When we attempted to copy the original 'jessica2' object to the
'jessicaCopy' object, it did create a new (shallow) object, however, the
deeper 'family' object was NOT cloned and therefor it is changed
when the push function is used on the new 'jessicaCopy'.
 */