// Create a site for a shopping list. when you click on a button you will be prompted to input a value. That value should then appear inside of a list on your html.
// maybe try adding a hide / undo button, also!
// It should also get added to an array which gets consoled every time you click the button as well


let title = document.getElementById("title")
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let listArray = [];

title.innerHTML = "shopping list application :)";

btn.addEventListener("click", function(){
  var listItem = prompt("what would you like to put on your list?");
  listArray.push(listItem);

  for (var i = 0; i < (listArray.length); i++) {
    list.innerHTML = "<li>" + listArray[i] + "</li>";
    // okay so we're getting there but we aren't adding list items!
  }
})
