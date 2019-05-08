// Create a site for a shopping list. when you click on a button you will be prompted to input a value. That value should then appear inside of a list on your html.
// It should also get added to an array which gets consoled every time you click the button as well

document.write("<h1>shopping list application :)</h1>");
document.write("<button id='btn'>click on me to start shopping!</button>");
document.write("<ul id=list>");

let btn = document.getElementById("btn");
let list = document.getElementById("list");
let listArray = [];

btn.addEventListener("click", function(){
  var listItem = prompt("what would you like to put on your list?");
  listArray.push(listItem);
  list.innerHTML += "<li>" + listItem + "</li>";
  console.log(listArray);
})

document.write("</ul>");
