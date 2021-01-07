"use strict";
const userFirstName = prompt("What is your name?");
const userLastName = prompt("What is your last name?");
const userName = userFirstName + userLastName;
alert("Hello " + userFirstName + userLastName);

const info = [
  { q: "Is Canada my dream vacation?", a: false },
  { q: "Is Summer my favorite Season?", a: false },
  { q: "Is my name Collin?", a: true },
  { q: "Is Sushi my favorite food?", a: true },
  { q: "Am I 22 years old?", a: true },
];
function getBoolAnswer(question) {
  while (true) {
    const answer = prompt(question).toLowerCase();
    if (answer === "yes" || answer === "y") return true;
    if (answer === "no" || answer === "n") return false;
  }
}
for (let i = 0; i < info.length; i++) {
  console.log(getBoolAnswer(info[i].q));
}
