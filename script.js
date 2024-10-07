const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTaks(){
  if(inputBox.value === ''){
    alert("Escreva alguma coisa!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}
