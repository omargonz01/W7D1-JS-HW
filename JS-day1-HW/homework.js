// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// `Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
// */
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findMatch = (str, names) => {
    for(let i = 0; i < names.length; i++){
      if (str.includes(names[i])) {
        console.log(`Matched ${names[i]}`);
      } else {
        console.log("No Match");
      }
    }
  };  
  
console.log(findMatch(dog_string, dog_names));
// can also call findMatch(dog_string, dog_names);?? - whats best practice


// //============Exercise #2 ============//
// /*Write a function that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      arr.splice(i, 1, "even index");
    }
    return arr;
  }

console.log(replaceEvens(Given_arr));

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
// i += 2 to get even numbers. spent too much time overthinking how to get even lol


// ---------------------Codewars Problems-------------------

// --------Problem 1.) Is n divisible by x and y?-----------

// Create a JavaScript function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero numbers.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

console.log(isDivisible(3, 1, 3)); 
console.log(isDivisible(12, 2, 6)); 
console.log(isDivisible(100, 5, 3));
console.log(isDivisible(12, 7, 5)); 

// === is the strict equality operator. 
// It compares two values for equality and returns true if the values are equal AND of the same type, return false otherwise.
// 5 === 5 is true - value and type are equal
// '5' === 5 is false - value equal, but furst is string other is number
// ? : - ternary operator - how you do if-else in javascript ( ? if true...) ( : else false...)
//  && is used in conditional statements to check if multiple conditions are true at the same time...


// -------------------Problem 2.) Square(n) Sum----------------

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i] * numbers[i];
  }
  return sum;
}

console.log(squareSum([1, 2, 2])); 

// similar to python, let sum = 0
// use a for loop to go through list/array
// for let i = 0; initializes the loop counter variable named i to 0 to keep track of the current iteration
// i < numbers.length; states when loop should stop... so basically, as long as i < numbers.length it will run
// i++; when ++ is at the end, it will increment by 1 after the loop. NOTE. can also be used as ++i if we wanted to increment before the loop
// then the rest makes sense, it multiplies the number by itself(sqaures) then adds it to the value sum, then you return the value of sum
 