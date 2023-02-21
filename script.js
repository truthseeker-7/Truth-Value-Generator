let table = document.getElementById("table");
const tableSize = 9;
checkboxVal = 3;
let firstTruthCase;
let secondTruthCase;


document.getElementById("btn").onclick = function() {
  let text = document.getElementById("text");
  let tr = table.getElementsByTagName("tr")[0];
  let th = document.createElement("th");
  th.innerHTML = text.value;
  tr.appendChild(th);


  for (let i = 1; i <= tableSize; i++) {
    let tr = table.getElementsByTagName("tr")[i];
    let td = document.createElement("td");
    tr.appendChild(td);

    if (i === tableSize) {
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = checkboxVal;
      checkbox.style.margin = "15px";
      td.appendChild(checkbox);
    }
  }

  isChecked();
};


function isChecked() {
  let checkboxes = table.getElementsByTagName("input");
  let checked = [];
  for (checkbox of checkboxes) {
    if (checkbox.checked) {
      checked.push(checkbox.value);
    }
  }
  if (checked.length == 1) {
    checked.push(Number(checked[0]) + 1);
  }
  console.log(checked.length);
  getVarValues(checked[0], checked[1]);
  checkboxVal += 1;
}

function getVarValues(firstCol, secondCol) {
  let colOne = [];
  let colTwo = [];

  for (let i = 1; i < tableSize; i++) {
    let tr = table.getElementsByTagName("tr")[i];
    colOne.push(tr.children[firstCol].innerHTML);
    colTwo.push(tr.children[secondCol].innerHTML);
  }


  let operator = getOperator();
  console.log(colOne, colTwo);
  evaluate(colOne, colTwo, operator);
}

function insertValues(newCases) {
  for (let i = 1; i < tableSize; i++) {
    let tr = table.getElementsByTagName("tr")[i];
    td = tr.lastElementChild;
    if (newCases[i - 1] == true) {
      td.innerHTML = 'T';
    } else {
      td.innerHTML = 'F';
    }
  }
}

function getOperator() {
  container = document.getElementById("container");
  radioBtns = container.getElementsByTagName("input");
  for (radio of radioBtns) {
    if (radio.checked) {
      return radio.value;
    }
  }
}



function evaluate(columnOne, columnTwo, operator) {
  let newCases = [];
  for (let i = 0; i < tableSize; i++) {

    if (columnOne[i] == 'T') {
      firstTruthCase = true;
    } else {
      firstTruthCase = false;
    }
    if (columnTwo[i] == 'T') {
      secondTruthCase = true;
    } else {
      secondTruthCase = false;
    }

    switch (operator) {
      case 'or':
        newCases.push(firstTruthCase || secondTruthCase);
        console.log(newCases);
        break;

      case 'and':
        newCases.push(firstTruthCase && secondTruthCase);
        console.log(firstTruthCase, secondTruthCase);
        console.log(newCases);
        break;

      case 'bi':
        newCases.push(firstTruthCase == secondTruthCase);
        console.log(newCases);
        break;

      case 'not':
        newCases.push(!(firstTruthCase));
        break;

      case 'implies':
        if (firstTruthCase == true && secondTruthCase == false) {
          newCases.push(false);
        } else {
          newCases.push(true);
        }
        break;

      case 'converse-implies':
        if (secondTruthCase == true && firstTruthCase == false) {
          newCases.push(false);
        } else {
          newCases.push(true);
        }
    }
  }
  insertValues(newCases);
}