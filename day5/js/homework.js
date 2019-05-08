function myFunction(){
  // console.log('foobar');
}

myFunction();
// console.log(myOtherFunction(2 , 40));

// local and global scopes -----------------------------------------------------
// -----------------------------------------------------------------------------
// okay so myFunction() can have two different sets of instructions, in two places, and perform both
// ... but myOtherFunction can't be invoked in another document


// Create a site for a shopping list, when you click on a button you will be prompt to input a value. That value should then appear inside of a list on your html.
// maybe try adding a hide / undo button, also!
// It should also get added to an array which gets consoled every time you click the button as well
// what if you did the flowchart first, because you love yourself?

// Richard gets us started:

var days = ["monday" , "tuesday" , "wednedsay"];
var tasks = [];

for (var i = 0; i < days.length; i++) {
  tasks.push([]);
}

var start = prompt("do you want to add tasks for this week?");

console.log(days);
console.log(tasks);
