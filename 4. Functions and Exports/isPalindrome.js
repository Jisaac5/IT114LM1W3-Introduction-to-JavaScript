// Todo 4.6a Create a funciton called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation
function isPalindrome(word){
    var wordSplit = word.split('');
    var reverseSplit = word.split('');
    reverseSplit.reverse();
    var reverseWord = "";

    for (var x = 0; x < reverseSplit.length; x++){
        reverseWord += reverseSplit[x];
    }

    // console.log(word);
    // console.log(wordSplit);
    // console.log(reverseSplit);
    // console.log(reverseWord);

    if (word === reverseWord){
        console.log(word,"is a palindrome");
    }
    else{
        console.log(word,"is not a palindrome");
    }
}

isPalindrome("weird");
isPalindrome("racecar");

// var test1 = "[1, 2, 3]";
// var test2 = "[1, 2, 3]";

// if (test1 === test2){
//     console.log("gaming");
// }

// var testWord = "what";
// var testWordSplit = testWord.split('');
// console.log(testWordSplit);
// console.log(testWordGlued);
// console.log(testWordSplit.reverse());



// Todo 4.6b Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
export default isPalindrome;