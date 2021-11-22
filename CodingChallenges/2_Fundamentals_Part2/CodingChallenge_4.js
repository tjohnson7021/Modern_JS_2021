'use strict';
/*
activating strict mode makes the code more secure. So again, first strict mode forbids us to do certain things and second it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.
*/

/*
* CODING CHALLENGE # 4
*/


// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:

// 1. Create an array 'bills' containing all 10 test bill values.
 const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals').
const tips = [];
const totals = [];

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

const calcTip = bill  => (bill >= 50 && bill <= 300) ? bill * (15/100) : bill * (20/100);


// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays
let i = 0;
while(i < bills.length){
  const tip = calcTip(bills[i]);
  tips.push(calcTip(bills[i]));
  totals.push(tip + bills[i]);
  i++;
}

console.log(bills);
console.log(tips);
console.log(totals);

// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:

// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together.

function calcAverage (arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  // 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
  const avg = sum/arr.length;
  return avg;
}

// 4.3. Call the function with the 'totals' array

const billsAvg = calcAverage(totals);

console.log(billsAvg);





