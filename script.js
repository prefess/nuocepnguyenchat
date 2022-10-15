function myFunction() {
 
// Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode("Cam 12K");
const textnode2 = document.createElement("span");
  textnode2.setAttribute('class', 'close');
  textnode2.innerHTML = "&times;" //String.fromCharCode("&times;");
// Append the text node to the "li" node:
node.appendChild(textnode);
  node.appendChild(textnode2);

// Append the "li" node to the list:
document.getElementById("myList").appendChild(node);
  
  
  //xóa đối tượng
 var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
}

function myFunction1() {

// Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode("Táo 20k");
  
// Append the text node to the "li" node:
  const textnode2 = document.createElement("span");
  textnode2.setAttribute('class', 'close');
  textnode2.innerHTML = "&times;" //String.fromCharCode("&times;");
// Append the text node to the "li" node:
node.appendChild(textnode);
  node.appendChild(textnode2);
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("myList").appendChild(node);
  
  
  //xóa đối tượng
   var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
}

