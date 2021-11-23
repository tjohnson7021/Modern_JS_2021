'use strict';
/*
activating strict mode makes the code more secure. So again, first strict mode forbids us to do certain things and second it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.
*/

/*
* CODING CHALLENGE # 1: Developer Skills & Editor Setup:
*/


// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and breakitup into sub-problems!


// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12,5,-5,0,4]

function printForecast(arr){
  let str = "";
  for(let i = 0; i < arr.length; i++){
    str += `... ${arr[i]}°C in ${i + 1} days `;
  }
  console.log(str);
}

printForecast([17, 21, 23]);

printForecast([12,5,-5,0,4]);