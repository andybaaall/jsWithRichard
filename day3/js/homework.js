// console.log("hello world, and welcome to my homework adventure");

// homework.html - some kind of interactive conditional navbar -----------------
// -----------------------------------------------------------------------------

// using Boolean - if the navbar is open (navOpen == true), clicking the circle turns it blue
// but if the navbar is closed (navOpen == false), clicking the circle turns it red
// but green is a colour of doing something you shouldn't, at least on the internet, so let's go green instead :^)

$(document).ready(function(){

  var navOpen = false;

  $("#icon").click(function(){
    $("#navbar").toggleClass("open");

    if(navOpen == false){
      navOpen = true;
      // console.log("navOpen = true");
    }
    else if(navOpen == true){
      navOpen = false;
      // console.log("navOpen = false");
    }
  })

  $("#btn").click(function(){
    if(navOpen == true){
      $("#btn").toggleClass("btn-success");
    } else {
      $("#btn").toggleClass("btn-primary");
    }
  })
})
