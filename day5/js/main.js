// console.log("hello world");

function myFunction(){
  console.log("running myFunction");
  var hello = "hello";
  console.log(hello);
  function myOtherFunction(a , b){
    return a + b;
  }
}

// myFunction();


// local and global scopes -----------------------------------------------------
// -----------------------------------------------------------------------------
// var hello is only defined within myFunction(); its scope is local only
// so when we try to invoke hello outside of myFunction(), we're getting an undefined error
// myFunction() has global scope ; hello has local scope (local to myFunction())
// we get the same issue with myOtherFunction()
// we also get to have a variable (hello) stand for two different values ...
// ... one local, one global
//
// hello;
// console.log(myOtherFunction(2 , 40));
// var hello = "well hello there";
//  console.log(hello);

// dynamic list of tasks -------------------------------------------------------
// -----------------------------------------------------------------------------

// var days = ["monday" , "tuesday" , "wednesday" , "thursday" , "friday"];
//
// function mondayTasks(){
//   var tasks = prompt("do you have any tasks for monday? if so, say so! if not, just hit enter");
//    if (tasks.length > 0){
//     function whichTasks(){
//       var whichTasks = prompt("which tasks");
//       console.log(whichTasks);
//     }
//     whichTasks();
//   } else {
//     console.log("no tasks for monday");
//   }
// }
//
// mondayTasks();
//
// function mondayAdditionTasks(){
//
// }
