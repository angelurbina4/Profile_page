var rvm = document.querySelector(".buttonRemove");
function removeList(element){
  rvm = element.parentElement.parentElement;
  console.log(rvm);
  rvm = rvm.remove();
}

var user = document.querySelector("#name");
console.log(user);

function change(element) { 
  console.log(element);
  user.innerText = "Lilo Maria";
}

var connections = document.querySelector(".pQuinientos");
console.log(connections);

var count = 501;
function decrease(element) {
  console.log(element);
  connections.innerText = (count++)+"+";
  
}

