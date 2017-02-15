/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What value is stored in `givenName` right now?
// A: nothing


givenName = "Brett?";
// Q: What is `givenName` set to now?
// A: Brett in a string


givenName = givenName;
// Q: What is `givenName` set to now?
// A: still Brett

//Exercise 2

var greeting = "Hello, how are you ";
console.log(greeting + givenName);



/*=========================================================
     Part 2: Simple Math
*/
var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: the var high minus the var low.

math = high - "5";
// Q: What is `math` set to?
// A: var high minus 5


/* =========================================================
     Part 3: Expressions
*/


// Create a variable to calculate your age
// The answer should read "NAME is XX years old"
// The answer should not be written in a comment.
var born = 1992;
var today = 2017;

// Answers Below:
var age = today - born;
console.log(age);


// Store some information following in variables.
var yourName = "Ary";
var instructorName = "Joe";

// Update the variables above so the expression reads correctly.
// Answers Below:
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;



//Take the following two variables:

var myAge = 45;
//Write a conditional statement that will test if an age is over 100. If it is set a variable isOld to true otherwise set it to false.

if (myAge > 100) {
  true
} else false;


//Exercise 6
//Identify which line the error occurs on.
//Explain the cause of the error
//Fix the error, so the code produces the desired response.


var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + lastname;

console.log(fullName); // Julia Roberts
var yearBorn = 1975;
var currentYear = 2016;
Var age = currentYear - yearBorn;

console.log(age); // 41


//var fullName would yeild JuliaRoberts without a space b/t the name
//lastname isn't in proper camelCase, so the variable wont read it correctly
//in the Var age, "Var" is capitalized, so it wont work
