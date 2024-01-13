/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
//const randomNumber = 60;

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50){
    console.log("More than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber%2==0){
    console.log("The random number is even");
}
else {
    console.log("The random number is odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber%3 == 0 && randomNumber%5 == 0){
    console.log("fizzbuzz");
}
else if (randomNumber%3 == 0){
    console.log("fizz");
}
else if (randomNumber%5 == 0){
    console.log("buzz");
}
else{
    console.log(randomNumber);
}


let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = randomNumber%2 == 0 ? "Even" : "Odd";

console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: I use switch statements to monitor one variable for its many possible values. This can be done with if statements as well, but that way quickly becomes hard to read.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for(var x = 0; x < n; x++){
    console.log(x+1);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
var itr = 0;
while(list[itr]!=undefined){
    console.log(list[itr]);
    itr++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: A do while loop executes the code inside it before checking the condition, but a while loop checks the condition before executing.

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("[for of]");
for(let value of list){
    console.log(value);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("[for in loop]");
for (var x in list){
    console.log(list[x]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("[foreach]")
list.forEach(fruitFunc);

function fruitFunc(item){
    console.log(item);
}

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: for of is for iterable objects, for in is typically for object properties, and forEach is almost exclusively for arrays.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

//const numerator = Math.floor((Math.random() * 100) + 1);
//const denominator = 10;

try{
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
}
catch(e){
    console.log("Divisor was zero!");
}
finally{
    console.log("Cleaning up resources...");
}



