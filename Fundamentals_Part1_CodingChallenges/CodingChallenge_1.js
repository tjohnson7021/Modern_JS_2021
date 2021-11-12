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




