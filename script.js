let table = document.getElementById("table");
const tableSize = 9;
checkboxVal = 3;

document.getElementById("btn").onclick = function(){
  let text = document.getElementById("text");
  let tr = table.getElementsByTagName("tr")[0]; 
  let th = document.createElement("th"); 
  th.innerHTML = text.value; 
  tr.appendChild(th); 
  checkboxVal += 1;

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

  insertValues();
  isChecked();
};


 function isChecked(){
    let checkboxes = table.getElementsByTagName("input");
    let checked = [];
    for(checkbox of checkboxes){
      if(checkbox.checked){
         checked.push(checkbox.value);
      }
    }
    
   getVarValues(checked[0], checked[1]);
   checked.length = 0;
}

function getVarValues(firstCol, secondCol){
   let colOne = [];
   let colTwo = [];

   for(let i = 1; i < tableSize; i++){
      let tr = table.getElementsByTagName("tr")[i];
      colOne.push(tr.children[firstCol].innerHTML);
      colTwo.push(tr.children[secondCol].innerHTML);
        
   } 
   alert(colOne);
   alert(colTwo);
}

function insertValues(){
   for(let i = 1; i < tableSize; i++){
      let tr = table.getElementsByTagName("tr")[i];
      td = tr.lastElementChild;
      td.innerHTML = "hello";
   }
}