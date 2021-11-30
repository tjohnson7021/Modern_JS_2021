'use strict';
/*
activating strict mode makes the code more secure. So again, first strict mode forbids us to do certain things and second it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.
*/


// //shows the text inside of the element with the 'message' class
// console.log(document.querySelector(".message").textContent);


//* set the secret number that will be guessed
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// // show secret number for testing
// document.querySelector(".number").textContent = secretNumber;


//* create the event listener for the button to be clicked
document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value)

  //* create if statements to represent the various game outcomes

  // if there is no number entered
  if (!guess) {
    document.querySelector(".message").textContent = "no number (＃￣ω￣)";

  /*
    WINNING SCENARIO
  */
  // if the number is guessed
  } else if (guess === secretNumber){
      document.querySelector(".message").textContent = "°˖✧◝(⁰▿⁰)◜✧˖° Correct!";
      // change background color of screen to indicate correct answer.
      document.querySelector('body').style.backgroundColor = "green";
      // reveal the correct answer
      document.querySelector(".number").textContent = secretNumber;

      document.querySelector(".number").style.width = "30rem";
      // increase the score,
      score++;
      // display the new score.
      document.querySelector(".score").textContent = score;

    // if the guess is higher than the secret number...
  } else if(guess > secretNumber){
      //...and the score is 0...
      if(score > 0){
        // display the "too high" message.
        document.querySelector(".message").textContent = "(＋_＋) Too High!";
        // change background color of screen to indicate incorrect answer.
        document.querySelector('body').style.backgroundColor = "red";
        //...decrease the score...
        score--;
        //...display the new score.
        document.querySelector(".score").textContent = score;
      } else { //...the score is = 0 and...
          // display a message that the game is over
          document.querySelector(".message").textContent = "(－‸ლ) ...Dude...(gameover)";
      }
    // if the guess is lower than the secret number...
  } else if(guess < secretNumber){
      //...and the score is 0...
      if(score > 1){
        //display the "too low" message.
        document.querySelector(".message").textContent = "(￣□￣」) Too Low!";
        //change background color of screen to indicate incorrect answer.
        document.querySelector('body').style.backgroundColor = "red";
        //decrease the score,
        score--;
        // display the new score.
        document.querySelector(".score").textContent = score;
      } else { //...the score is = 0 and...
          document.querySelector(".message").textContent = "(－‸ლ) ...Dude...(gameover)";
      }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function() {
  /* restore initial values */

  // restore score to 20
  score = 20;
  // assign a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector('body').style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
