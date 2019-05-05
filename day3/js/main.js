// so far we've encountered three data types:
// strings
// numbers
// undefined – sometimes we'll create these deliberately, to define them later; sometimes they're problems
// today we'll look at two new ones:
Array
Boolean

//here's a new one for you nerds:
Boolean  // these can only take two values: true, or false (or undefined, but they probably shouldn't)
// don't even try to understand Boolean mathematics, though, that's just the worst

var variable1 = true;
var variable2 = false;  // these are Boolean values

// maybe we have different functionality when the navbar is expanded and when it's compressed
// in this instance we might want to use Booleans like 'navbarOpen = false' and 'navbarOpen = false'

if (variable1 === true){
  console.log("variable is true");
}

if(variable1){  // if it's true - if our conditions are being met
  console.log("variable is true");
} else {  // if it's not true, it's got to be false
  console.log("variable is false");
}

if (!variable2){  //if 'not variable 2'
  console.log("variable 2 is false");
}

// so we might write something like
//
//  hamburgerButton.onClick{
//    hamburgerButtonIsClicked = true;
//
//    buttonFunction {
//    do some stuff
//    }
//  }
//
//  if hamburgerButtonIsClicked{
//    do some other stuf
//  } else {
//      do some other stuff
//      }
//  }


// ------------------------------------------------------------------------------------------------------------------------

// here's another one!
Array // a list of stored values

var itemList = ["item 1" , "item 2" , "item 3" , "item 4" , "item 5"];

console.log(itemList);

// Chrome's console outputs this:
// 0: "item 1"
// 1: "item 2"
// 2: "item 3"
// 3: "item 4"
// 4: "item 5"
// length: 5
// __proto__: Array(0)

// console.log(itemList.length);
// an array's length property is the number of items it contains

// var welcome = "hello there";
// console.log(welcome.length);
// a string's length property is the number of characters it contains
// this is how we write minimum character requirements, or character caps

// console.log(itemList[3]);
// this will return "item 4", because in computing, we start counting from 0
// we don't want item 3, we want iteration number 3
// ... so that's array item 2
// console.log(itemList[2]);

// we can add items to an array using push( ... );
itemList.push("item 6");
console.log(itemList);

// ... or like this
itemList[itemList.length] = "item 7";
console.log(itemList);

itemList[10] = "item 8";
console.log(itemList);

// .length will always be ++
// that's to say, it'll always add +1 to the iteration
// if we use an explicit number, we may end up creating empty iterations
