"use strict";
const userFirstName = prompt("What is your name?");
const userLastName = prompt("What is your last name?");
const userName = userFirstName + userLastName;
alert("Hello " + userFirstName + " " + userLastName);

let points = 0;
const questions = [
  "Is Canada my dream vacation?",
  "Is Summer my favorite Season?",
  "Is my name Collin?",
  "Is Sushi my favorite food?",
  "Am I 22 years old?"
];
const answers = [false,false,true,true,true]

function yesNoQuestions(){
  for (var i = 0; i < questions.length; i++) {
    console.log("Entering for loop")
    do {
        console.log("Entering do loop")
        var input = prompt(questions[i]);
    } while ( !(input.toUpperCase() === "Y" || input.toUpperCase() === "YES" || input.toUpperCase() === "N" || input.toUpperCase() === "NO") );

    if (answers[i] === true) {
        if (input.toUpperCase() === "Y" || input.toUpperCase() === "YES") {
            //console.log("Q: " + questions[i] + " - A: " + answers[i] + " -- User got it correct.  Score is: " + score);
            alert("Correct!");
            points ++;
        } else {
            alert("Wrong...");
            //console.log("Q: " + questions[i] + " - A: " + answers[i] + " -- User got it wrong.  Score is: " + score);
        }
    } else {
        if (input.toUpperCase() === "N" || input.toUpperCase() === "NO") {
            //console.log("Q: " + questions[i] + " - A: " + answers[i] + " -- User got it correct.  Score is: " + score);
            alert("Correct!");
            points ++;
        } else {
            alert("Wrong...");
            //console.log("Q: " + questions[i] + " - A: " + answers[i] + " -- User got it wrong.  Score is: " + score);
        }
    }
  }
}
yesNoQuestions();
/*
answerFirst = answerFirst.toLowerCase();
if (answerFirst === "n" || answerFirst === "no") {
  alert("correct!");
  //console.log('Correct!')
  points++;
} else {
  alert("Incorrect...");
  //console.log('Incorrect...')
}

let answerSecond = prompt("Is summer my favorite season?"); 
answerSecond = answerSecond.toLowerCase();
if (answerSecond === "n" || answerSecond === "no") {
  alert("Correct!");
  //console.log('Correct!')
  points++;
} else {
  alert("Incorrect...");
  //console.log('Incorrect...')
}
let answerThird = prompt("Is my name Collin?");
answerThird = answerThird.toLowerCase();
if (answerThird === "y" || answerThird === "yes") {
  alert("Correct!");
  //console.log('Correct!')
  points++;
} else {
  alert("Incorrect...");
  //console.log('Incorrect...')
}
let answerFourth = prompt("Is sushi my favorite food?");
answerFourth = answerFourth.toLowerCase();
if (answerFourth === "y" || answerFourth === "yes") {
  alert("Correct!");
  //console.log('Correct!')
  points++;
} else {
  alert("Incorrect...");
  //console.log('Incorrect...')
}
let answerFifth = prompt("Am I 22 years old?");
answerFifth = answerFifth.toLowerCase();
if (answerFifth === "y" || answerFifth === "yes") {
  alert("Correct!");
  //console.log('Correct!')
  points++;
} else {
  alert("Incorrect...");
  //console.log('Incorrect...')
}
*/
let attempt = 0;
function numberGuess() {
    
    for (; attempt < 4; attempt++) {
    let favNum = Math.floor(Math.random()*10)+1;
    let answerSixth = parseInt(prompt("what is my favorite number?"));
    if (answerSixth < favNum) {
      alert("Guess is too low");
    } else if (answerSixth > 7) {
      alert("Guess is too high");
    } else {
      alert("The random number was " + favNum);
      points++;
      break;
    }
  }
    if (attempt == 4) alert("The correct answer is 7");
}
numberGuess()

function bandGame() {
  let userCorrect = false;
  const favBands = [
    "My Chemical Romance",
    "Green Day",
    "Cold Play",
    "Metallica",
    "Pantera",
    "Disturbed",
  ];
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label for the label idea and syntax
  outer: for (attempt = 0; attempt < 6; attempt++) {
    let bandAnswer = prompt("What bands do I like?").toLowerCase();
    console.log(bandAnswer);
    for (let i = 0; i < favBands.length; i++) {
      if (bandAnswer === favBands[i].toLowerCase()) {
        alert("You are right I do enjoy listening to them");
        points++;
        userCorrect = true;
        break outer;
      }
    }
    alert("That is not a favorite band...");
  }
  if (!userCorrect) { //print message if failed attempts reaches limit
    alert(
      "Ran out of guesses. I enjoy listening to My Chemical Romance, Green Day, Cold Play, Metallica, Pantera, and Disturbed."
    );
  }
  alert("You scored " + points + " out of 7");
}
bandGame();

