/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name){
    console.log("Hello",name);
}

greet("Jiro");

//var funcEx = function funky(){1+3};
//console.log(funcEx);
//console.log(funky);

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: A function declaration is the standard way of declaring functions, while function expressions are mostly the same aside from only being accessible upon its initial
// definition. Because of its temporary nature, a function expression must be used in conjunction with a variable so its returned value can be put to use before being disposed of.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
var recArea = function calculateArea (length, width) {
    return length * width;
}

console.log("Rectangle area:",recArea(5, 5));

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback is a function passed as an argument into another function. An example would be a function calculating a rectangle's area being passed into another function
// which then multiplies the first function's returned value by 3.

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(arr, func){
    var modifiedArray = [];
    
    for (let value of arr){
        modifiedArray.push(func(value));
    }

    return modifiedArray;
}

var numbers = [1, 2, 3, 4, 5];

function arrayInc(number){
    return ++number;
}

console.log(modifyArray(numbers, arrayInc));

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

import {add, approxPi} from './mathUtils.js';
console.log("2 + 3 =", add(2, 3));
console.log("Approximate value of pi:", approxPi);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from './isPalindrome.js';

isPalindrome("burgercat");
isPalindrome("tacocat");

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: CommonJS' require function and module.export variable function similarly to ES' import and export keywords respectively.
// ES (import and export) supports selective importing. Otherwise, CommonJS (require & module.export) & ES function mostly similarly aside from some quirks like
// CommonJS being dynamic while ES being static (for the most part. It can also be made dynamic).
