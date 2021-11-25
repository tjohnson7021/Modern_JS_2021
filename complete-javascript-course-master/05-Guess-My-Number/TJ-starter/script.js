'use strict';

// //shows the text inside of the element with the 'message' class
// console.log(document.querySelector(".message").textContent);


//* set the secret number that will be guessed
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;


//* create the event listener for the button to be clicked
document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value)

  console.log(guess, typeof guess);
  //* create if statements to represent the various game outcomes

  // if there is no number entered
  if (!guess) {
    document.querySelector(".message").textContent = "no number (＃￣ω￣)";
  // if the number is guessed
  } else if (guess === secretNumber){
      document.querySelector(".message").textContent = "°˖✧◝(⁰▿⁰)◜✧˖° Correct!";

      //increase the score,
      score++;
      // display the new score.
      document.querySelector(".score").textContent = score;

    // if the guess is higher than the secret number...
  } else if(guess > secretNumber){
      //...and the score is 0...
      if(score > 0){
        document.querySelector(".message").textContent = "(＋_＋) Too High!";
        //...decrease the score...
        score--;
        // ...display the new score.
        document.querySelector(".score").textContent = score;
      } else { //...the score is = 0 and...
          // display a message that the game is over
          document.querySelector(".message").textContent = "(－‸ლ) ...Dude...(gameover)";
      }
    // if the guess is lower than the secret number...
  } else if(guess < secretNumber){
      //...and the score is 0...
      if(score > 1){
        document.querySelector(".message").textContent = "(￣□￣」) Too Low!";
        //decrease the score,
        score--;
        // display the new score.
        document.querySelector(".score").textContent = score;
      } else { //...the score is = 0 and...
          document.querySelector(".message").textContent = "(－‸ლ) ...Dude...(gameover)";
      }
  }
});