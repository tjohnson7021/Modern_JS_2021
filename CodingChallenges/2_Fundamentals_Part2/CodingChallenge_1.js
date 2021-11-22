'use strict'; 
/* 
activating strict mode makes the code more secure. So again, first strict mode forbids us to do certain things and second it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.
*/

/*
* CODING CHALLENGE # 1
*/

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.

// 2. Use the function to calculate the average for both teams.

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)". 

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2.

// 5. Ignore draws this time.

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 

let dScore1 = 44, dScore2 = 23, dScore3 = 71;
let kScore1 = 65, kScore2 = 54, kScore3 = 49;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

const dolphinAvg1 = calcAverage(dScore1, dScore2, dScore3);
const koalaAvg1 = calcAverage(kScore1, kScore2, kScore3);

function checkWinner (koalasAvg, dolphinsAvg){
  if (koalasAvg >= 2 * dolphinsAvg){
    console.log(`Koalas win! (${koalasAvg} vs. ${dolphinsAvg})`);
  } else if (dolphinsAvg >= 2 * koalasAvg) {
    console.log(`Dolphins win! (${dolphinsAvg} vs. ${koalasAvg})`);
  } else {
    console.log('Nobody wins -_-')
  }
}

checkWinner(dolphinAvg1, koalaAvg1);

// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const dScore4 = 85, dScore5 = 54, dScore6 = 41;
const kScore4 = 23, kScore5 = 34, kScore6 = 27;

const dolphinAvg2 = calcAverage(dScore4, dScore5, dScore6);
const koalaAvg2 = calcAverage(kScore4, kScore5, kScore6);

checkWinner(dolphinAvg2, koalaAvg2);


// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

