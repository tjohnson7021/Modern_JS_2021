/*
* CODING CHALLENGE # 2
*/

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs . Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

let markMass;
let johnMass;
let markHeight;
let johnHeight;


markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

const markBMI = markMass/markHeight ** 2
const johnBMI = johnMass/(johnHeight * johnHeight);

console.log('mark\'s BMI: ' + markBMI);
console.log('john\'s BMI: ' + johnBMI);

if(markBMI > johnBMI){
  console.log("Mark's BMI is higher that John's");
} else {
  console.log("John's BMI is higher that Mark's");
}

if(markBMI > johnBMI){
  console.log(`Mark's BMI (${markBMI}) is higher that John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher that Mark's (${markBMI})`);
}







