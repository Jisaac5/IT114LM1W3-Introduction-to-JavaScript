/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
var numSquares = numbers.map(item => item**2);
console.log(numSquares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
var evenNums = numbers.filter(item => item%2 == 0);
console.log(evenNums);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
var numSum = numbers.reduce(function(result, item){
    return result + item;
}, 0);
console.log(numSum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
var uppercaseWords = words.map(item => item.toUpperCase());
console.log(uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
// const wordsTest = ['hello', 'world', 'what', 'frog', 'test', 'loooong', 'rice'];
var fourLetters = words/*Test*/.filter(item => item.length > 4);
console.log(fourLetters);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
var stringinator = words.reduce(function(result, item){
    return result+=item;
}, '')
console.log(stringinator);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Map makes a copy of an array with modifications to all elements. 
// Filter makes a copy of an array that only contains elements that fulfill its conditions (a 'filtered' copy).
// Reduce 'reduces' down an array into one single variable using a function to dictate how it does the reduction.