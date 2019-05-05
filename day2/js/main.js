// console.log('hello world');
var pageTitle = document.getElementById("pageTitle");

//operators!
//
//assignment operators ------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------
// var value = 10;        //declaring a value

//arithmetic operators ------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(value - 1);
// console.log(value + 2);
// console.log(value * 2);
// console.log(value / 2);
//
// console.log(++ value);   //increment by 1
// console.log(value ++);   //increment by 1 - for some reason it doesn't want to work on (argument ++) unless we follow with (++ argument)
//console.log(-- value);    //increment by -1 (okay so apparently maths people call this 'decrementing')

//comparison operators ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// >
// <
// >=
// <=
// ==   equal to, without making a declaration (check if it's true)
// ===  equal to, and the same type (check if it's true, and that they're the same data type)
// !=   not equal to
// !==  not equal to, OR not of the same type

// var inputNumber = prompt('please give me a number');
// console.log(inputNumber); //(so this logs inputNumber as a string, not an integer)
// if(inputNumber > 2){
  // console.log(inputNumber + ' is greater than 2');
// } else {
  // console.log(inputNumber + ' is less than 2');
// };
//so this works, but not if we input a non-numerical string, or the string '2'


// var randomNumber = prompt('please enter the number 6');
// if (randomNumber == 6){
//   console.log('great job, thanx');
// } else {
//   console.log('you did not enter 6, damn yr eyes');
// };

// if (randomNumber === 6){
//   console.log('great job, thanx');
// } else {
//   console.log('you did not enter 6, damn yr eyes');
// };
//
// var value = prompt('please enter a number');
//  if (value > 10){
//   console.log('congrats, you entered a value greater than 10');
// } else if (value > 10){
//   console.log('congrats, you entered a value greater than 10');
// } else if (value >= 10){
//   console.log('congrats, you entered a value greater than, or equal, to 10');
// } else if (value < 10){
//   console.log('congrats, you entered value less than 10');
// } else if (value <= 10){
//   console.log('congrats, you entered a value less than, or equal, to  10');
// }else if (value == 10){
//   console.log('congrats, you entered the numerical string "10" ');
// } else if (value === 10){
//   console.log('congrats, you entered the integer "10" ');
// } else if (value != 10){
//   console.log('congrats, you entered something other than 10');
// } else if (value !== 10){
//   console.log('congrats, you entered something other than 10 or something that\'s not a string');
// };

//practice ------------------------------------------------------------------------------------------------------------------------------------------------
//when the child is 5 or under, free entry. When the child is over 5yo, entry fee is $5
// var age = prompt('please enter the age of your child in arabic numerals, O good and Wise Parent');
// if(age <= 5){
//   console.log('ah, your child is of an age to view the spectacle for free');
// } else if(age > 5){
//   console.log('ah, you must surrender twelve electrum tokens bearing the face of Sagon in order to admit your gentle offspring');
// };

//when the grade is 49+, the student receives an A. When the mark is less than 49, they get an F
// var mark = prompt('what\'s yr grade in %?');
// if(mark == 0){
//   console.log('you fail');
// } else {console.log('you pass :)');
// };
//
// if((mark < 0) || (mark > 100)){
//   console.log("that's not a real grade! refresh and try again.")
// } else if(mark < 20){
//   console.log('okay, that\'s an F');
// } else if (mark < 30) {
//   console.log('okay, that\'s a D');
// } else if (mark < 40) {
//   console.log('okay, that\'s a C');
// } else if (mark < 50) {
//   console.log('okay, that\'s a B');
// } else if (mark < 60) {
//   console.log('okay, that\'s a B+');
// } else if (mark < 70) {
//   console.log('okay, that\'s an A-');
// } else if (mark < 80) {
//   console.log('okay, that\'s an A');
// } else if (mark <= 100) {
//   console.log('okay, that\'s an A+');
// }
pageTitle.innerHTML = "this is a title that tells you what grade you got";


// when earnings are > $100, you pay 10% tax. When they're < $100, you pay 9%
// var earnings = prompt('gross income in dollars?')
// var tax;
// if(earnings >= 100){
//   tax = earnings * 0.1;
// } else {
//   tax = earnings * 0.09;
// }
// console.log('you have to pay $' + tax + ' tax');
pageTitle.innerHTML = "this is a calculator that tells you that you have to pay your taxes";


// when the cost of a meal is 100+, there is no service charge. For other meals the charge is 10%. There are three people at the table all orderng different meals (3 prompts)
// show the price for all three and then the total

// var meal1 = parseInt(prompt("what's the cost of meal one?"));
//   if(meal1 > 100){
//     var meal1Service = meal1 * 0.10;
//     var meal1Total = meal1 + meal1Service;
//   } else var meal1Total = meal1
//
// var meal2 = parseInt(prompt("what's the cost of meal two?"));
// if(meal2 > 100){
//   var meal2Service = meal2 * 0.10;
//   var meal2Total = meal2 + meal2Service;
// } else var meal2Total = meal2
//
// var meal3 = parseInt(prompt("what's the cost of meal three?"));
// if(meal3 > 100){
//   var meal3Service = meal3 * 0.10;
//   var meal3Total = meal3 + meal3Service;
// } else var meal3Total = meal3
//
// var tableTotal = meal1Total + meal2Total + meal3Total;
// console.log("table total is $ " + tableTotal);

// var meal1 = parseInt(prompt("what's the cost of meal one?"));
//   if (meal1 > 100){
//     meal1 = (meal1 * 0.10) + meal1;
//   }
// var meal2 = parseInt(prompt("what's the cost of meal two?"));
//   if (meal2 > 100){
//     meal2 = (meal2 * 0.10) + meal2;
//   }
// var meal3 = parseInt(prompt("what's the cost of meal three?"));
//   if (meal3 > 100){
//     meal3 = (meal3 * 0.10) + meal3;
//   }
// var tableTotal = meal1 + meal2 + meal3;
// console.log("table total is $ " + tableTotal);
pageTitle.innerHTML = "this is a calculator that helps you pay for your meal";


// homework !

// a program is required to input two integer values and display a message if one is an exact divisor of the other
// eg. 4 / 2 = 2 r 0
// message: '2 is an exact divisor of 4'

// var input1 = prompt("what's the first input (btw it has to be an integer)?")
// var input2 = prompt("what's the second input (btw it has to be an integer)?")
//
// if ((Number.isInteger(input1) != true) || (Number.isInteger(input2) != true)){
//   console.log("you haven't actually entered an integer, sweaty??");
// } else if(input2 == 0){
//   console.log("hey, what are you trying to pull??")
// } else if(input1 % input2 == 0){
//   console.log("input one divides nicely by input two");
// } else if(input1 % input2 !== 0){
//     console.log("input one doesn't divide nicely by input two");
// }

pageTitle.innerHTML = "this is a calculator that tells you if input 2 is an exact divisor of input 1 <br> or tells you off, because you're doing it wrong";

// coffees are 3.50 each, but if you order 10+, you get a 15% discount
// write a program that asks for the number of coffees and applies the discount if necessary

// var coffees = parseInt(prompt("how many coffees would you like to buy?"));
// var orderTotal = (coffees * 3.5);
// if(coffees >= 10){
//   var orderTotal = (orderTotal - (orderTotal * 0.15));
// }
// console.log("order total is $" + orderTotal);

pageTitle.innerHTML = "this is a calculator that helps you buy coffee";

// muffins are 2.50 each, but if you get 25 + they're 1.90 each
// write a program that asks for the quantity, then shows the unit price and the total
//
// var muffins = parseInt(prompt("how many muffins would you like to buy?"));
// console.log("okay, so that's " + muffins + " muffins");
//
// if(muffins >= 25){
//   var unitCost = 1.90;
// } else unitCost = 2.50;
// console.log("the cost per muffin is $" + unitCost + "0");
// console.log("the total cost of the order is $" + muffins * unitCost + "0");

pageTitle.innerHTML = "this is a calculator that helps you buy muffins";


// steak dinners are 26.50; for every 2 dinners you get a 3rd free (this happens whether or not you want it to)
// write a program that works out how many meals are being ordered, how many free meals come with them, and outputs the price.
//
// bonus: mushroom sauce is an extra 2 bucks, but the free steaks don't get sauce
// get the number of mushroom sauces as another input, and adjust the total

var meals = parseInt(prompt("how many steaks would you like to order?"));
var mushroom = parseInt(prompt("how many servings of mushroom sauce would you like to order?"));

console.log("okay, that's " + meals + " steaks");
console.log("also that's " + mushroom + "servings of mushroom sauce");

if(meals % 2 != 1){
  console.log("plus also you get " + (meals/2) + " free meals"); // A
} else if (meals % 2 >= 1){
  console.log("plus also you get " + Math.floor(meals / 2) + " free meals"); // B
}

console.log("the total cost of the meal is $" + (meals * 26.5) + (mushroom * 2));

pageTitle.innerHTML = "this is a calculator that helps you buy heaps of steak"
