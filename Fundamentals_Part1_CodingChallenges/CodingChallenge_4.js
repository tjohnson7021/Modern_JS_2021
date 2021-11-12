/*
* CODING CHALLENGE # 4
*/

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430 
const bill_1 = 275;
const bill_2 = 40;
const bill_3 = 430;

let tip = (bill_1 >=50 && bill_1<=300) ? bill_1*(15/100) : bill_1*(20/100)

console.log(`Bill 1 was ${bill_1}, the tip was ${tip} and the total value ${bill_1 + tip}`);

tip = (bill_2 >=50 && bill_2<=300) ? bill_2*(15/100) : bill_2*(20/100)

console.log(`Bill 2 was ${bill_2}, the tip was ${tip} and the total value ${bill_2 + tip}`);

tip = (bill_3 >=50 && bill_3<=300) ? bill_3*(15/100) : bill_3*(20/100)

console.log(`Bill 3 was ${bill_3}, the tip was ${tip} and the total value ${bill_3 + tip}`);
// Hints:
// To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉