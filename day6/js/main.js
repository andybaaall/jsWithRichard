// a script which checks to see if someone is old enough to buy alcohol --------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------



checkAge();

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



// a script which calculates age based on birth year ---------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------



ageCalculator();

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



// -----------------------------------------------------------------------------------------------------------------------------------
// a script calculates if >18 based on birth year ------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------



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
//   // so if we had the whole thing wrapped in a function, we could invoke the function again here
// }



// a script which checks odd / even  -------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------



// function oddEven(){
//     var number = parseInt(prompt("please enter a whole number!"));
//     if (number){
//     if ((number % 2) == 0){
//       alert("oh boy, that's (probably) an even number");
//     } else {
//       alert("that's an odd number for sure, probably");
//       }
//     } else {
//     alert("that's not a whole number! please refresh & try again");
//     }
//   }



// a script which creates a to-do list from a prompt ---------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------



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



// a script which finds the largest number in a dynamic array ------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------



// Richard's take

// var numbers = [ 1 , 2 , 3 , 4 , 5];
// var largestNumber = 0;
//
// function checkNewNumber(){
//   // console.log('got a click');
//   var newNumber = parseInt(prompt('add a new number to the array'));
//   numbers.push(newNumber);
//   console.log(numbers);
//   if(newNumber > largestNumber){
//     largestNumber = newNumber;
//   }
//   console.log(largestNumber);
// }
//
// for (var i = 0; i < numbers.length; i++) {
//   // console.log(numbers[i]);
//   if(numbers[i]> largestNumber){
//     largestNumber = numbers[i];
//   }
//   this works, because with every iteration, the largest number has updated
//   so if the array is [10, 2, 3, 4, 50]
//   the first iteration's largest number is 10
//   the second iteration's largest number is 10
//   the third iteration's largest number is 10
//   the fourth iteration's largest number is 10
//   the fifth iteration's largest number is 50
// }
// console.log(largestNumber);



// btn.addEventListener("click", function(){
//   var item = parseInt(prompt("please feed me a number to pass into an array!"))
//   if (item){
//     array.push(item);
//     console.log("the array items are now" + array + "<br>");
//     numberDiv.innerHTML = "the biggest number is now " + (Math.max(... array));
//   } else {
//     alert("that's not a number I can do anything with :(")
//   }
// });

// "the biggest number is now " + (Math.max(... array));
// that's one way of doing it, but it's possible with a loop and an if / else.
// (and we'd need to deploy that approach if we weren't dealing with numbers)



// a script which lists students' names, one name per prompt  ------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------



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
});

// this is how we could do it without the loop
// nameListHTML.innerHTML += "<li>" + (nameList[nameList.length - 1]) + "</li>";
// thanks, Simon - we don't actually *need* to reference this array
// nameListHTML.innerHTML += "<li>" + name + "</li>";
//
// Richard's take:

var numberOfStudents = parseInt(prompt("how many students?"));
var nameListHTML = document.getElementById("nameList");

for (var i = 0; i < numberOfStudents; i++) {
  var name = prompt("what is student number " + (i + 1) + "\'s name?");
  nameListHTML.innerHTML += "<li>" + name + "</li>";
}


// a script which calculates mean from a dynamic array w a button for adding new items
// -----------------------------------------------------------------------------------------------------------------------------------

var meanArray = [];

function findMean(){
  var newNumber = parseInt(prompt("enter a number to push into an array"));
  meanArray.push(newNumber);

  var total = 0;
  for (var i = 0; i < meanArray.length; i++) {
    total += meanArray[i];
  }
  console.log("the array is now " + meanArray);
  console.log("the average array item value is " + total / meanArray.length);
}



// a script which asks for X no of peoples' ages; shows lowest and highest and calculates mean
// -----------------------------------------------------------------------------



function ageCalculator(){
  var howManyPeople = parseInt(prompt("how many people's ages would you like to input?"));
  var individualAges = [];

  for (var i = 0; i < howManyPeople; i++) {
    var individualAgesItem = parseInt(prompt("how old is person " + (i + 1) + "?"));
    individualAges.push(individualAgesItem);
  }

  var eldest = 0;

  for (var i = 0; i < individualAges.length; i++) {
    if (individualAges[i] > eldest) {
      eldest = individualAges[i];
    }
  }

  var youngest = eldest + 1;
  // so Richard went with youngest = ages[0], so that the whole thing could sit in one for loop

  for (var i = 0; i < individualAges.length; i++) {
    if (individualAges[i] < youngest) {
      youngest = individualAges[i];
    }
  }

  var total = 0;

  for (var i = 0; i < individualAges.length; i++) {
    total += individualAges[i];
  }

  var mean = total / individualAges.length;

  console.log("the oldest person is " + eldest + " years old");
  console.log("the youngest person is " + youngest + " years old");
  console.log("the average age of the group is " + mean + "years old");
}



// a script which works as a calculator. First prompt A, second prompt operator, third prompt B
// -----------------------------------------------------------------------------------------------------------------------------------
// function calculator(){
//   var operand1 = parseInt(prompt("what's the first operand?"));
//   var operand2 = parseInt(prompt("what's the second operand?"));
//   var operator = prompt("what's the operator?");
//
//   function applyOperator(a){
//     if(a === "+"){
//       return "the first operand + the second operand = " + (operand1 + operand2) ;
//     } else if (a === "-"){
//       return "the first operand - the second operand = " + (operand1 - operand2);
//     } else if (a === "*"){
//       return "the first operand * the second operand = " + (operand1 * operand2);
//     } else if (a === "/"){
//       return "the first operand / the second operand = " + (operand1 / operand2);
//     } else if (a === "%"){
//       return "the first operand % the second operand = " + (operand1 % operand2);
//     } else {
//       alert("please enter the operator your want to use: either + , - , * , / or %");
//     }
//   }
//
//   alert(applyOperator(operator));
// }


// here it is as a condition tree ?

// function calculator(){
//   var operand1 = parseInt(prompt("what's the first operand?"));
//   if (operand1) {
//   var operand2 = parseInt(prompt("what's the second operand?"));
//   if (operand2) {
//     var operator = prompt("what's the operator?");
//
//     function applyOperator(a){
//       if(a === "+"){
//         return "the first operand + the second operand = " + (operand1 + operand2) ;
//       } else if (a === "-"){
//         return "the first operand - the second operand = " + (operand1 - operand2);
//       } else if (a === "*"){
//         return "the first operand * the second operand = " + (operand1 * operand2);
//       } else if (a === "/"){
//         return "the first operand / the second operand = " + (operand1 / operand2);
//       } else if (a === "%"){
//         return "the first operand % the second operand = " + (operand1 % operand2);
//       }
//       else {
//         alert("please enter the operator your want to use: either + , - , * , / or %");
//       }
//     }
//     alert(applyOperator(operator));
//   } else {
//     console.log(" not a number (operand 2)");
//   }
//   } else {
//   console.log("not a number (operand 1)");
//   }
// }

// Richard's take:

var number1 = parseInt(prompt("what's the first number?"));
var number2 = parseInt(prompt("what's the second number?"));

var math = prompt("would you rather use / , * , + or - ?");

var outcome;
if (mathOption === "+") {
  outcome = number1 + number2;
} else if (mathOption === "-") {
  outcome = number1 - number2;
} else if (mathOption === "/") {
  outcome = number1 / number2;
} else if (mathOption === "*") {
  outcome = number1 * number2;
} else outcome = "some kind of error message";

console.log(outcome);

// a password checker which checks if a password has >5 chars, <20 chars, and at least one Number
// -----------------------------------------------------------------------------------------------------------------------------------

// a password checker which checks if a password has >5 chars, <20 chars, and at least one Number
// ------------------------------------------------------------------------------------------------------------------------

function passwordChecker(){
  var password = prompt("enter a password :^)");

  if (password){
    if (password.length > 5){
      if (password.length < 20){
        // check if we can parseint this bad baby -- if yes, we've got a password
      } else {
        alert("password too long");
        passwordChecker();
      }
    } else {
      alert("password too short");
      passwordChecker();
    }
  } else {
    passwordChecker();
  }
}
