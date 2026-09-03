//model
let minNum = 1;
let upperNum = 0;
let lowerNum = 0;
let poeng = 0;
let answer = null;

//view
pageView();
function pageView() {
  krokoapp.innerHTML = /*html*/ `
  <div>
    <h2>Poeng: ${poeng}</h2>
    <p>${upperNum}</p>
    <input oninput="answer=this.value">
    <p>${lowerNum}</p>
    <button onclick="submitButton()">Submit</button>
    <button onclick="numberFunction()">Reset</button>
  </div>
    `;
}

//controller;

function submitButton() {
  if (answer == null) return;
  if (upperNum === lowerNum && answer === "=") {
    poeng++;
  } else if (upperNum > lowerNum && answer === ">") {
    poeng++;
  } else if (upperNum < lowerNum && answer === "<") {
    poeng++;
  } else {
    poeng--;
  }
  answer = null;
  pageView();
}

function numberFunction() {
  upperNum = numberGen();
  lowerNum = numberGen();
  pageView();
}

function numberGen() {
  return Math.floor(Math.random() * 10) + 1;
}
