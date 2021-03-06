'use strict';
/*
activating strict mode makes the code more secure. So again, first strict mode forbids us to do certain things and second it creates visible errors and the developer console, where in other situations JavaScript would just fail silently.
*/


// //shows the text inside of the element with the 'message' class
// console.log(document.querySelector(".message").textContent);


//* set the secret number that will be guessed
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

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

      if (score > highScore){
        highScore = score;
        document.querySelector(".highscore").value = highScore;
        document.querySelector(".highscore").textContent = highScore;
      }

    //When the guess is wrong
  } else if (guess !== secretNumber && score > 1) {


      document.querySelector('body').style.backgroundColor = "red";
      score--;
      document.querySelector(".score").textContent = score;

      if (guess > secretNumber){

        document.querySelector(".message").textContent = "(＋_＋) Too High!";

      } else {

        document.querySelector(".message").textContent = "(￣□￣」) Too Low!";
      }

  } else { //...the score is = 0 and...
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "(－‸ლ) ...Dude...(gameover)";
  }
});


/*
* AGAIN! Button Functionality (resets page)
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
