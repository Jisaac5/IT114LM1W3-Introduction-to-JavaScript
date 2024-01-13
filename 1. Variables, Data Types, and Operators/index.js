/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var testVar = 1;

console.log("testVar = ", testVar, "\n");

//var testVar = 1;

//Moving the var to after the log line made the log print it out as "undefined".

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let testVar2 = 2;

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const constVar = "stone";
//constVar = 3.5;

//Trying to reassign the const's value caused an error.

console.log("[Testing values for all 3 variables]");
console.log("testVar = ", testVar);
console.log("testVar2 = ", testVar2);
console.log("constVar = ", constVar);

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
console.log("\n[Arithmetic operator tests]")

console.log("The remainder of dividing 10 by 3: ", 10%3);

var incrementVar = 1;
console.log("Var before incrementing: ", incrementVar,"\nIncremented var: ", ++incrementVar);

var decrementVar = 1;
console.log("Var before decrementing: ", decrementVar,"\nDecremented var: ", ++decrementVar);

//Note: Increment & decrement must be used as prefixes if they are to be used immediately

var negateMe = 5;
console.log("Var before negation: ", negateMe,"\nVar after negation: ", -negateMe);

var numInQuotes = "6";
console.log("3 + \"6\" string converted to a number: ", +numInQuotes+3);

console.log("3 raised to 4 is: ", 3**4);

// Checkpoint 1.2 What operators did you use?
// Answer: I used the remainder(%), increment(++), decrement(--), unary negation(-), unary plus(+), and exponentiation(**)
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

console.log("\n[String operator test]");
console.log("Hello "+"World");

var concatString = "Lorem";
console.log(concatString);
concatString += " ipsum";
console.log(concatString);
concatString += " dolor";
console.log(concatString);

// Checkpoint 1.3 What operators did you use?
// Answer: I used the concatenation operator(+) in two ways.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

console.log("\n[Logical operator test]");

//Logical AND test
var andVar1 = false && true;
console.log(andVar1);

var andVar2 = true && false;
console.log(andVar2);

var andVar3 = true && "Bread";
console.log(andVar3);

var andVar4 = false && "Butter";
console.log(andVar4);

console.log();

//Logical OR test
var orVar1 = true || false;
console.log(orVar1);

var orVar2 = false || false;
console.log(orVar2);

var orVar3 = false || "Jam";
console.log(orVar3);

var orVar4 = true || "Cheese";
console.log(orVar4);

//Logical NOT test

console.log();

var notVar1 = !false;
var notVar2 = !true;
var notVar3 = !"Ham";

console.log(notVar1,"\n",notVar2,"\n",notVar3);

// Checkpoint 1.4 What operators did you use?
// Answer: I used the logical AND(&&), logical OR(||), and logical NOT(!)


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

console.log("\n[Relational operator test");

const stuff = ["dirt", "stone", "bricks"];

console.log(0 in stuff);
console.log(2 in stuff);
console.log(3 in stuff);
console.log("stone" in stuff); 

// built-in objects
"PI" in Math; // returns true

const myString = new String("fern");
console.log('\n',"length" in myString);
console.log("velocity" in myString);

//Instanceof
var woah = new String("WOAH");

console.log("[Instanceof test]");
console.log(woah instanceof String);
console.log(woah instanceof Array);


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: It equates to true. This happens because JavaScript converts the empty array ([]) into a string to complete the comparison.
// Since the array is empty, its string form is also empty (""), leading to a "false" value in the comparison.

// Your code here

console.log();
console.log("[Checkpoint 1.5 testing]");

console.log([] == false);