// a script which checks to see if someone is old enough to buy alcohol --------
// -----------------------------------------------------------------------------

// checkAge();
//
// function checkAge(){
//   var age = parseInt(prompt("how old are you?"));
//   var yes = "you are old enough to be served intoxicating beverages";
//   var no = "you are not old enough to be served intoxicating beverages";
//
//   if(age){
//     if(age<18){
//       var parents = (prompt("are you with your parents? please enter 'yes' or 'no'"));
//       if(parents == "yes"){
//         alert(yes);
//       } else {
//         alert(no);
//       }
//     } else {
//       alert("that's not a real age!")
//       checkAge();
//     }
//   } else {
//     alert("that's not a real age!")
//     checkAge();
//   }
// }

// if statements are always checking whether a condition is correct (let's avoid saying 'true', because that's a specific thing)
// so 'if (var)' is checking whether or not var is correct
// if var has a value, it's going to be true. We can check by running Boolean(var);
// if var doesn't have a value, it's going to be false. We can check by running Boolean(var);
// because parseInt(var) can only return an integer, any value that's not an integer will always return false.
// so when var != integer, the condition 'if (var)' can never be met.
//
// though, because JS, we -could- run something like 'if (age.valueOf === Number)'

// -----------------------------------------------------------------------------
// a script which calculates age based on birth year ---------------------------
// -----------------------------------------------------------------------------
// ageCalculator();
//
// function ageCalculator(){
//   var birthYear = parseInt(prompt("what's your birth year? YYYY format pls"));
//   var age = 2019 - birthYear;
//
//   if (birthYear){
//     alert("you're " + age + " years old :)");
//   } else {
//     alert("that's not an appropriate date!")
//     ageCalculator();
//   }
// }


// -----------------------------------------------------------------------------
// a script calculates if >18 based on birth year ------------------------------
// -----------------------------------------------------------------------------

// var birthYear = parseInt(prompt("what's your birth year? YYYY format pls"));
// var age = 2019 - birthYear;
//
// if (birthYear){
//   if (age < 18){
//     alert("you are younger than eighteen years of age!");
//   } else if (age == 18){
//     alert("you are eighteen years old; a legal adult");
//   } else if (age > 18){
//     alert("you are older than eighteen");
//   }
// } else {
//   alert("looks like you haven't input a date in YYYY format! please refresh and try again");
// }

// -----------------------------------------------------------------------------
// a script which checks odd / even  -------------------------------------------
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// a script which checks odd / even  -------------------------------------------
// -----------------------------------------------------------------------------

// var number = parseInt(prompt("please enter a whole number!"));
//
// if (number){
//   if ((number % 2) == 0){
//     alert("oh boy, that's (probably) an even number");
//   } else {
//     alert("that's an odd number for sure, probably");
//   }
// } else {
//   alert("that's not a whole number! please refresh & try again");
// }

// a script which creates a to-do list from a prompt ---------------------------
// -----------------------------------------------------------------------------

// var toDoList = document.getElementById("toDoListHTML");
// var anyTasks = prompt("do you have any tasks to do? if not, just hit <enter>");
//
// function allDone(){
//   alert("awesome, you're all caught up");
// }
//
// if(anyTasks){
//   function whatTask(){
//     var task = prompt("what's one of your tasks?");
//     toDoList.innerHTML += "<li>" + task + "</li>";
//     function moreTasks(){
//       var extraTask = prompt("do you have any more tasks? if not, just hit <enter>");
//       if (extraTask){
//         whatTask();
//       } else {
//         alert("cool, let's get you a to-do list");
//       }
//     }
//     moreTasks();
//   }
//   whatTask();
// } else {
//   allDone();
// }


// a script which finds the largest number in a dynamic array ------------------
// -----------------------------------------------------------------------------

// var btn = document.getElementById("lagestNumberBtn");
// var arrayDiv = document.getElementById("arrayDiv");
// var numberDiv = document.getElementById("numberDiv");
// var array =[];
//
// btn.addEventListener("click", function(){
//   var item = parseInt(prompt("please feed me a number to pass into an array!"))
//   if (item){
//     array.push(item);
//     arrayDiv.innerHTML = "the array items are now" + array + "<br>";
//     numberDiv.innerHTML = "the biggest number is now " + (Math.max(... array));
//   } else {
//     alert("that's not a number I can do anything with :(")
//   }
// });

// I think that there's a way of doing this with loops and if else, but I don't feel confident looping arrays.


// a script which lists students' names, one name per prompt  ------------------
// -----------------------------------------------------------------------------

var nameList = [];
var nameListHTML = document.getElementById("nameList");
var btn = document.getElementById("nameBtn");

btn.addEventListener("click" , function(){
  var name = prompt("enter the name of one of your classmates!");
  nameList.push(name);
  nameListHTML.innerHTML = "";
  for (var i = 0 ; i < nameList.length ; i ++) {
    nameListHTML.innerHTML += "<li>" + nameList[i] + "</li>";
  }
  // console.log(nameList[nameList.length - 1]);
});

// this is how we could do it without the loop
// nameListHTML.innerHTML += "<li>" + (nameList[nameList.length - 1]) + "</li>";
// thanks, Simon - we don't actually *need* to invoke this array
// nameListHTML.innerHTML += "<li>" + name + "</li>";

// with the loop : it wasn't resetting because you didn't reset anything outside of the loop
// so on line 157, we're resetting the contents of nameListHTML



// a script which calculates mean from a dynamic array w a button for adding new items
// -----------------------------------------------------------------------------

// a script which asks for X no of peoples' ages; shows lowest and highest and calculates mean
// -----------------------------------------------------------------------------

// a script which works as a calculator. First prompt A, second prompt operator, third prompt B
// -----------------------------------------------------------------------------

// a password checker which checks if a password has >5 chars, <20 chars, and at least one Number
// -----------------------------------------------------------------------------
