/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generateExcuse() {
  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];
  let excusaGenerada =
    "Sorry... " +
    whoRandom +
    " " +
    actionRandom +
    " " +
    whatRandom +
    " " +
    whenRandom;
  document.getElementById("excuse").innerHTML = excusaGenerada;
  document
    .getElementById("generarExcusa")
    .addEventListener("click", window.onload);
};
let who = ["The dog", "My grandma", "My turtle", "My bird"];
let action = ["ate", "peed on", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
