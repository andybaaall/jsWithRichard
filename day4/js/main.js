// arrays with loops -----------------------------------------------------------
//------------------------------------------------------------------------------

var shoppingList = ["apples" , "bananas" , "pears" , "kiwifruit" , "oranges" , "new item" , "another new item" , "yet another new item"];
console.log(shoppingList);

document.write("<h1>this is my shopping list</h1>");
document.write("<ul>");
  // document.write("<li>" + shoppingList[0] + "</li>");
  // document.write("<li>" + shoppingList[1] + "</li>");
  // document.write("<li>" + shoppingList[2] + "</li>");
  // document.write("<li>" + shoppingList[3] + "</li>");
  // document.write("<li>" + shoppingList[4] + "</li>");
  // document.write("<li>" + shoppingList[5] + "</li>");   --- undefined

  // so how can we automate the creation of a list like this, where we want to add items that we haven't defined previously?
  // or just make typing out document.write 1000 times way quicker?

  // we do it with a loop, like this:

  for (var i = 0; i < shoppingList.length; i++) {
    // console.log("this is a string that we're going to loop");
    console.log(shoppingList[i]);
    document.write("<li>" + shoppingList[i] + "</li>");
  }

    // loop syntax:

    //for (statement 1; statement 2; statement 3) {
      // code block to be executed
    //}

    //Statement 1 is executed (one time) before the execution of the code block.
    //Statement 2 defines the condition for executing the code block.
    //Statement 3 is executed (every time) after the code block has been executed.

  // so the first time the loop is performed, i = 0
  // and with each increment, we add +1 to i
  // until the condition i < shoppingList.length is no longer being met

  // also, [i] doesn't exist outside of this loop Statement

  // this is so durned exciting; the MightyApe example is pretty burned into my brain
  // you can nest arrays, functions, objects into yr arrays
document.write("</ul>");

// nested arrays ---------------------------------------------------------------
//------------------------------------------------------------------------------

var days = ["monday " , "tuesday " , "wednesday " , "thursday" , "friday"];

var tasks = [
  [" cleaning "],
  [" homework " , " something else " , " shopping "],
  [" work " , " gym "],
  [],
  [" cleaning " , " pub "]
  // note that these arrays have different lengths
];

console.log(days);  // this one logs the strings themselves
console.log(tasks); // this one just logs 'array[2], array[2], array[2]'

document.write("<h1>daily tasks</h1>");

document.write("<ul>");
  for (var i = 0; i < days.length; i++) {
    document.write("<li>" + days[i]);
      document.write("<ul>");
        if (tasks[i].length == 0) {
          document.write("<li> well done, you have a whole free day for quiet contemplation :-)</li>")
        } else
            for (var it = 0; it < tasks[i].length; it++) {
              document.write("<li>" + tasks[i][it] + "</li>");
          }
      document.write("</ul>");
    document.write("</li>");
  }
document.write("</ul>");

// functions -------------------------------------------------------------------
//------------------------------------------------------------------------------

// for (var i = 0; i < 10; i++) {      // the order of operations doesn't matter for functions! JS will search the whole document
//   namePrompt();
// }

function namePrompt(){
  var name = prompt("what's your name?");
  document.getElementById("welcome").innerHTML += "<h4>hello " + name + " welcome to the website</h4>";
}   // if we want it to iterate, we use the += operator
    // if we want it to start fresh, we use the + operator
