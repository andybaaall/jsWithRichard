// console.log("hello world, and welcome to my homework adventure");

// homework.html - some kind of interactive conditional navbar -----------------
// -----------------------------------------------------------------------------



// homework2.html - a button that adds items to an array -----------------------
// -----------------------------------------------------------------------------
var myList = [];

$("#btn").click(function(){
  myList.push(("list item ") + (myList.length + 1));
  console.log(myList);
});
