// console.log("hello world, and welcome to my homework adventure");

// homework.html - some kind of interactive conditional navbar -----------------
// -----------------------------------------------------------------------------

// using Boolean - if the navbar is open (navOpen == true), clicking the circle turns it blue
// but if the navbar is closed (navOpen == false), clicking the circle turns it red

$(document).ready(function(){

  var navOpen = false;

  $("#icon").click(function(){
    $("#navbar").toggleClass("open");
    if(navOpen == false){
      navOpen = true;
    } else {
    navOpen = false;
    }
    console.log(navOpen);
  });

  $("#circle").click(function(){
    if(navOpen == true){
      $("#circle").click(function(){
        $("#circle").toggleClass("btn-primary");

        // why do I have to click twice to toggle??? 

      });
    } else {
      console.log("navOpen is false");
    }
  })
})
