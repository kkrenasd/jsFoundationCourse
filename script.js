
 
/*
// Strict Mode
// Notes - strict mode is a special mode that we can active in JS and make it easier for us to write a secure JaveScript code (it helps us introduce the bugs in out code)
//use strict has to be in the first line
*/ 
 
// let hasDriversLicense = false;
// const passTest = true;
 
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive.")

//     const interface = "Mia";
//     const private = 23;
 
 
/*
// Activating Strict Mode
*/
 
 
/*
// Functions
// Notes -  function is a simple piece of code that we can reuse over and over again in our code
// IMPORTANT - dont repeat yourself!!!
*/
 
//  const age = 21;
// console.log("age");
// console.log("age");
// console.log("age");

// function logger () {
//     console.log("My name is mia");
// }

// logger();
// logger();
// logger();

//passing a data than return a data
//appleNum or orangeNum are called parameters (that are specific only to this function)
//fruitProcessor(5,3), the 5 and 3 called argument
//The parameters like a placeholder that holding data or value that we can pass by the function
//argument - they are actual values that we are passing by

// function fruitProcessor(appleNum, orangeNum) {
//     const juice = 'Juice with ${appleNum} apples and ${orangeNum} oranges';
//     return juice;
// }

// const fruitJuice = fruitProcessor(5,3);
// console.log(fruitJuice)


/*
// Function Declarations vs. Expressions
// Notes -  Function are just values, or number a string to return
//main  difference - we can actually call function declration before they are defined, but NOT expressions.
*/

//function decoration
// function calcAge1(birthYear) {
//     //const age = 2025 - birthYear;
//     //return age
//     return 2025 - birthYear;
// }
 
//  const age1 = calcAge1(1984)
//  console.log(age1);

//function expression

// const calcAge2 = function (birthYear) {
//     return 2025 = birthYear;
// }
// const age2 = calcAge2(1986);
// console.log(age2);

// const yearUntilRetiremement = (birthYear, firstName) => {
//     const age = 2025 - birthAge;
//     const retirement = 65 - age;
//     return '${firstName} retires in $(retirement} years';
// }

// console.log(yearUntilRetirement(1991, "bob"))
// console.log(yearUntilRetirement(1991, "bob"))

/*
// Arrow functions
// Notes - arrow function is a shorter form of the function expression 
*/

// const calcAge2 = function (birthYear) {
//     return 2025 = birthYear;
// }

// const calcaAge3 = birthYear => 2025 - birthYear;

// const yearUntilRetiremement = (birthYear, firstName) => {
//     const age = 2025 - birthAge;
//     const retirement = 65 - age;
//     return '${firstName} retires in $(retirement} years';
 
/*
// Functions Calling Other Functions
// Notes -
*/
 
 function cutFruitPieces (fruit) {
    return fruit * 4
 }

 function fruitProcessor(apple, orange) {
    const applePieces = cutFruitPieces  (apple);
    const orangePieces = cutFruitPieces (orange);

    const juice = 'Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.';
    return juice;
 }

 console.log(fruitProcessor(3, 6))