// console.log('hello world');

// more stuff with functions ---------------------------------------------------
// -----------------------------------------------------------------------------

function yourName(){
  // console.log('button has been clicked');
  var name = prompt("what is your name?");
  var age = prompt("what is your age");
  // console.log(name);
  welcome(name , age);
}

function welcome(a , b){
  console.log("hello " + a);
  console.log("you are " + b + " years old");
  // ... so we can't do "hello " + name here, because name is local to yourName();
  // we could make 'name' local, or we could pass the value of yourName(); into welcome();
  // but how do we do that?
  // we give welcome(); an argument to operate on, a
  // ... and write some instructions for that function to do with that argument
  // then, we can call the function (global) into another function, and its arguments will come with it.
}

// welcome(); now expects a value, so when we call it without a value, it returns 'undefined'
// it's trying to do welcome(); to nothing, so it outputs nothing
// welcome();

function guest(a , b){
  var age = prompt("what is your age");
  welcome("guest" , age);
  // so here we're passing static values into welcome();
}

function register(){
  var username = prompt("please enter a username");
  var usernameValid = validate(username , 4);
  // this assignment operator assigns the returned value of validate() to something we can use -- here, a variable.
  // this variable is assigned one of the values (true or false) returned by validate()
  console.log(usernameValid);
  if(usernameValid === false) {
    console.log("your password is too short");
    return;
    // instead of returning a value -and- ending the function early, return here -just- ends the function early.
    // We don't move on to the next step, in both cases
    // this is how 'return' behaves if we don't specify a value to return.
  }
  var password = prompt("please enter a password");
  var passwordValid = validate(password, 6);
  if(passwordValid === false){
    console.log("your password is too short");
    return;
  }
  console.log("awesome, you're all registered");
}

function validate(value , minLength){
  // semantic names for your arguments are definitely the way to go! ( a , b ) makes way less sense than ( name , age )
  // return "this is from the validate function";
  if(value.length >= minLength){
    return true;
  } else {
    return false;
  }
}

// objects ---------------------------------------------------------------------
// -----------------------------------------------------------------------------

// instead of writing something like this:
var carManufacturer;
var carModel;
var carYear;

// we can store all of these values in an object instead:
var car = {
  manufacturer: "Honda",
  model: "Logo",
  year: 1993,
  wof: false,
  owners: ["Andy" , "Sydney"]
}

console.log(car);
console.log(car.year);
console.log(car["year"]);
    car.year = 1994;
    console.log(car.year);

car.kms = 190000; // if the browser can't find a given object key, it'll just create a new one
console.log(car);

var items = [
// when we create an array of objects like this, it's really important to make sure the objects' keys are the same
  {
    name: "apples",
    price:  2.50,
    inStock: true
  },
  {
    name: "oranges",
    price: 1.45,
    inStock: false
  },
  {
    name: "pears",
    price: 3.00,
    inStock: true
  },
];

for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
  if(items[i].inStock === true){
    document.getElementById("list").innerHTML += ("<li>" + items[i].name + " - $" +items[i].price + "</li>");
  }
}

// -----------------------------------------------------------------------------
// let's think back to our task list excercise----------------------------------
// -----------------------------------------------------------------------------

var taskList = document.getElementById("taskList");
var days =[
  {
    day: "monday",
    tasks: ["class" , "Kaspar"]
  },
  {
    day: "tuesday",
    tasks: ["class" , "theory"]
  },
  {
    day: "wednesday",
    tasks: ["class" , "meeting"]
  },
]

// console.log(days);
// console.log(days[0]);
// console.log(days[1]);
// console.log(days[2]);
// console.log(days[0].day);
// console.log(days[0].tasks);
// console.log(days[1].day);
// console.log(days[1].tasks);
// console.log(days[2].day);
// console.log(days[2].tasks);
//
// taskList.innerHTML = "";
//   for (var i = 0; i < days.length; i++) {
//     taskList.innerHTML += "<li>" + (days[i].day) + "<ul><li>" + days[i].tasks + "</li></ul>" + "</li>";
//   }

// Richard's take --------------------------------------------------------------
// -----------------------------------------------------------------------------

// of course! rather than manually entering the console logs to work out what lives where, we just start with a loop

for (var i = 0; i < days.length; i++) {
  // console.log(days[i]);
  console.log(days[i].day);
  // console.log(days[i].tasks[i]);
  // this is very close, but not quite. It's logging the 1st task for the 1st array ...
  // ... the 2nd task for the 2nd array, and the 3rd task (which doesn't exist) for the 3rd array

  // console.log(days[i].tasks[ ---- does the loop go here? ---- ]);
  // not really, but you probably could?

  // you were closer with  console.log(days[i].tasks[i]); --- line 163 --- check it out
  for (var a = 0; a < days[i].tasks.length; a++) {
    console.log(days[i].tasks[a]);
  }
}
