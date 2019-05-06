// console.log("hello world, and welcome to my homework adventure");

// homework.html - some kind of interactive conditional navbar -----------------
// -----------------------------------------------------------------------------

$(document).ready(function(){

  var navOpen = false;

  $("#icon").click(function(){
    $("#navbar").toggleClass("open");
    if(navOpen == true){
      navOpen == false;
    } else {
      navOpen == true;
    }
    console.log(navOpen);
  });

  // why don't you work :(

  $("#circle").click(function(){
    if(navOpen == true){
      // do stuff
    }
  })
})
