/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

// let numbers = [
//     1, 89, 55, 63, 29, 19,
//     15, 77, 62, 68, 29, 84,
//     21, 26, 49
// ];

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
]; //for testing

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log("1st value: ",numbers[0]);
console.log("5th value: ", numbers[4]);
console.log("Last value: ", numbers[numbers.length-1]);


// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
var min = numbers[0];
for (let value of numbers){
    if(value < min){
        min = value;
    }
}
console.log("Array minimum: ",min);

var max = numbers[0];
for (let value of numbers){
    if(value > max){
        max = value;
    }
}
console.log("Array maximum: ",max);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: My experience with python is limited, but its lists and JavaScript's arrays seem to be similar in function

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
var IT114L = {
    course_code: "IT114L",
    course_name: "Web Systems and Technologies (Laboratory)",
    units: 1,
    student_count: 38
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.professor_name = "Job J. Lipat";
console.log(IT114L.professor_name);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

let currentCourses = new Array();

// My courses: CS107, CS107L, IT114, IT114L (object already exists), IT133, PE044

let CS107 = {
    course_code: "CS107",
    course_name: "Information Management",
    units: 2,
    student_count: 38
}

let CS107L = {
    course_code: "CS107L",
    course_name: "Information Management (Laboratory)",
    units: 1,
    student_count: 35
}

let IT114 = {
    course_code: "IT114",
    course_name: "Web Systems and Technologies",
    units: 2,
    student_count: 41
}

let IT133 = {
    course_code: "IT113",
    course_name: "Technopreneurship",
    units: 3,
    student_count: 28
}

let PE044 = {
    course_code: "PE044",
    course_name: "PATHFIT 4: Individual/Dual Team Sports",
    units: 2,
    student_count: 35
}

currentCourses.push(new Object(CS107));
currentCourses.push(new Object(CS107L));
currentCourses.push(new Object(IT114));
currentCourses.push(new Object(IT133));
currentCourses.push(new Object(PE044));
currentCourses.push(new Object(IT114L));

//console.log(currentCourses[0].course_name);
//console.log(currentCourses[1].course_name);

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
var totalUnits = 0;
for (let value of currentCourses){
    totalUnits += value.units;
}
console.log("Total Units: ", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Python's dictionaries function similarly to JS's objects, but are iterable.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
console.log("[Spread syntax number array test]");
var newArray = [...numbers, 97];
console.log(...newArray);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
console.log("[Spread syntax course array test]");

//var {course_code, units} = IT114L;
//console.log(course_code, units);

var {
    course_name,
    professor_name,
    student_count,
    ...courseCodeAndUnits
} = IT114L;

console.log(courseCodeAndUnits);
console.log(IT114L);

