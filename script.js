let table = document.getElementById("table");
const tableSize = 9;

document.getElementById("btn").onclick = function(){
  let text = document.getElementById("text");
  let tr = table.getElementsByTagName("tr")[0]; 
  let th = document.createElement("th"); 
  th.innerHTML = text.value; 
  tr.appendChild(th); 

for(let i = 1; i < tableSize; i++){
   let tr = table.getElementsByTagName("tr")[i];
   let td = document.createElement("td"); 
   tr.appendChild(td);
  }
  insertValues();

tr = table.getElementsByTagName("tr")[9]; 
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.style.margin = "15px";
tr.appendChild(checkbox);

};


 function isChecked(){
    let checkboxes = table.getElementsByTagName("input");
   
    for(checkbox of checkboxes){
       if(checkbox.checked){
          alert();
       }
    }
}

function getVarValues(firstCol, secondCol){
   let colOne = [];
   let colTwo = [];

   for(let i = 1; i < tableSize; i++){
      let tr = table.getElementsByTagName("tr")[i];
      colOne.push(tr.children[firstCol].innerHTML);
      colTwo.push(tr.children[secondCol].innerHTML);
        
   } 
}

function insertValues(){
   for(let i = 1; i < tableSize; i++){
      let tr = table.getElementsByTagName("tr")[i];
      td = tr.lastElementChild;
      td.innerHTML = "hello";
   }

}