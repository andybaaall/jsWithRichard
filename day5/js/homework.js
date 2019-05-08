// function myFunction(){
  // console.log('foobar');
// }

// myFunction();
// console.log(myOtherFunction(2 , 40));

// local and global scopes -----------------------------------------------------
// -----------------------------------------------------------------------------
// okay so myFunction() can have two different sets of instructions, in two places, and perform both
// ... but myOtherFunction can't be invoked in another document

// dynamic to-do list homework -------------------------------------------------
// -----------------------------------------------------------------------------

//Recreate the project we did on day 4 where we render a list of tasks. The site should ask the user if there are any tasks that need to be done for each of the days of the week.
//Once it has gone through all of the days, it should then render out on the screen the same way which we did on Tueaday

// Richard gets us started:

var days = ["monday" , "tuesday" , "wednedsay"];
var tasks = [];

for (var i = 0; i < days.length; i++) {
  tasks.push([]);
}

var start = prompt("do you want to add tasks for this week?");

console.log(days);
console.log(tasks);
