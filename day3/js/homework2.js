// homework2.html - a button that adds items to an array -----------------------
// -----------------------------------------------------------------------------
var myList = [];

$("#btn").click(function(){
  myList.push(("list item ") + (myList.length + 1));
  console.log(myList);
});
