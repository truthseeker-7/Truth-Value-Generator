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
};


function getVarValues(firstCol, secondCol){
   let colOne = [];
   let colTwo = [];

   for(let i = 1; i < tableSize; i++){
      let tr = table.getElementsByTagName("tr")[i];
      colOne.push(tr.children[firstCol].innerHTML);
      colTwo.push(tr.children[secondCol].innerHTML);
        
   }
   console.log(colOne);
   console.log(colTwo);
     
}

function insertValues(){
   for(let i = 1; i < tableSize; i++){
      let tr = table.getElementsByTagName("tr")[i];
      td = tr.lastElementChild;
      td.innerHTML = "hello";
   }

}



 getVarValues(0,2);
