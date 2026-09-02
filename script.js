//model
let minNum = 1;
let upperNum = "4";
let lowerNum = "3";
let poeng = 0;
//view
pageView();
function pageView() {
  krokoapp.innerHTML = /*html*/ `
  <div>
    <h2>Poeng: ${poeng}</h2>
    <p id="tall1">${upperNum}</p>
    <input>
    <p id="tall2">${lowerNum}</p>
    <button onclick="submitButton()">Submit</button>
    <button onclick="resetButton()">Reset</button>
  </div>
    `;
}

//controller

function resetButton() {}
