let bool = true;
let cell = [];
let horizonLine = [];
let vertLine = [];
let diagLine = [];
let secondDiagLine = [];
let size = 3;
let isWinner = false;
let winner = "";
let myTableDiv = document.getElementById("myDynamicTable");
function runTicTacToe() {
  let table = document.createElement("TABLE");
  table.border = "1";
  let tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);

  for (let i = 0; i < size; i++) {
    let tr = document.createElement("TR");
    tableBody.appendChild(tr);
    for (let j = 0; j < size; j++) {
      let td = document.createElement("TD");
      td.width = "75";
      cell.push(td);
      tr.appendChild(td);
      td.addEventListener("click", eventing);
    }
  }
  myTableDiv.appendChild(table);

  for (let m = 0; m < cell.length; m += size) {
    horizonLine.push(cell.slice(m, m + size));
  }
  for (let k = 0; k < size; k++) {
    vertLine.push([cell[k], cell[k + size], cell[k + size * 2]]);
  }
  for (let i = 0; i < horizonLine.length; i++) {
    diagLine.push(horizonLine[i][i]);
    secondDiagLine.push(horizonLine[i][horizonLine.length - i - 1]);
  }
}
runTicTacToe();

function eventing() {
  if (this.innerHTML === "") {
    if (bool) {
      this.appendChild(document.createTextNode("X"));
    } else {
      this.appendChild(document.createTextNode("O"));
    }
    bool = !bool;
  }
  const allEqual = (arr) =>
    arr.every((v) => v.innerHTML.toString() === arr[0].innerHTML.toString());
  for (let m = 0; m < horizonLine.length; m++) {
    if (
      horizonLine[m][0].innerHTML.toString() !== "" &&
      allEqual(horizonLine[m])
    ) {
      winner = horizonLine[m][0].innerHTML.toString();
      isWinner = true;
    }
  }
  for (let m = 0; m < vertLine.length; m++) {
    if (vertLine[m][0].innerHTML.toString() !== "" && allEqual(vertLine[m])) {
      winner = vertLine[m][0].innerHTML.toString();
      isWinner = true;
    }
  }
  if (diagLine[0].innerHTML.toString() !== "" && allEqual(diagLine)) {
    winner = diagLine[0].innerHTML.toString();
    isWinner = true;
  }

  if (
    secondDiagLine[0].innerHTML.toString() !== "" &&
    allEqual(secondDiagLine)
  ) {
    winner = secondDiagLine[0].innerHTML.toString();
    isWinner = true;
  }
  if (isWinner == true) {
    alert("Winner is " + winner);
    for (let m = 0; m < cell.length; m += 1) {
      cell[m].removeEventListener("click", eventing);
    }
  }
}
