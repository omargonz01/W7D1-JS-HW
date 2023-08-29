// Testing javascript link through web console
console.log('testing');

// Multi-line Comment
/*
 this is a multi 
 line 
 comment 
*/

// Declaring a variable using var (the old way)
var x = 5;
console.log(x);

// Reassigning values
x = 3;
console.log(x);

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
console.log(typeof x)
console.log(typeof 'dylan')
console.log(typeof 3.14)

// strings in js
var firstName = 'christian'
console.log(firstName);

// Arrays AKA Python Lists
var students = ['jake', 'justin', 'omar']
console.log(typeof students)

// Objects AKA Python Dicts
var bio = {
    // 'ful name': 'Dylan Katina',
    fullName: 'Dylan Katina',
    age: 99,
    location: 'USA'
}
console.log(bio)

// Hoisting
console.log(hoist)
var hoist = 'I am hoisted broooo'
console.log(hoist)
var hoist = 'I am hoisted again'
console.log(hoist)

/* 
- NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
- Not only because of var hoisting behaviors can be tricky, but so you don't
accidentally re-declare a variable that already exists.
- LET and CONST are also variable declarations using the ES6 Syntax but do allow
for re-declaration.

- LET vs CONST
- --------let: allows for reassignment of values (Just like Python)
- --------const: does NOT allow for reassignment of values 
*/

// let
let pet = 'Alpha'
console.log(pet)
pet = 'Rhia'
console.log(pet)

// const
const favColor = 'purple'
console.log(favColor)
// favColor = 'red' - wont work

// ------------------------ Math Operations ----------------------------

// Addition
let sum = 5 + 5;
console.log(sum);

// Incrementing
console.log(sum += 3);

// Increment by 1
// console.log(sum++);
console.log(++sum);

// Subtraction
let difference = 10 - 5;
console.log(difference);

// Decrement by 1
console.log(--difference);

// Decrementing
console.log(difference -= 2)

// Multiplication
let product = 5 * 5;
console.log(product);
console.log(product *= 5)

// Division
let quotient = 25 / 5;
console.log(quotient)
console.log(quotient /= 2);

// Exponents
let exponent = 5 * 2
console.log(exponent)
console.log(exponent**=2)

// ---------- Math is a built-in for javascript ---------------

// Math.floor()
console.log(Math.floor(3.14));

// Math.ceil()
console.log(Math.floor(3.14))

// Watch out for these behaviors when adding number and strings
console.log('5' + 5)

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
function fullName(firstName, lastName){
    console.log(firstName, lastName)
}
fullName('Sam','Lundy')

// Function Expression
const nflTeam = function (city, name){
    console.log(city, name)
}
nflTeam('seattle', 'seahawks')

// -------------  Arrow Function (ES6) ----------------------
const goatPlayer = (playerName) => {
    // console.log('The goat will always be'  + ' ' + playerName) - works the same as below:
    console.log(`The goat will always be ${playerName}`)
}
goatPlayer('Michael Jordan') 

// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }
const checkWheather = (temp) => {
    if (temp < 65) {
        return "It's pretty cold outside, consider layering up!";
    } else if (temp < 80) {
        return "It's a beautiful day outside!";
    } else {
        return "It's pretty hot, avoid wearing black!";
    }
}

console.log(checkWheather(50));

// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)
// const evenOrOdd = (num) => {
//     console.log(num % 2 ==0 ? 'Even' : 'Odd')
// }
// evenOrOdd(4)
const evenOrOdd = (num) => console.log(num % 2 ==0 ? 'Even' : 'Odd')
evenOrOdd(4)

// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
// loop through an array
let students1 = ['jake', 'justin', 'omar']
for(let i = 0; i<students1.length; i++){
    console.log(i, students1[i])
}

// loop through an array with for-of loop (values) (ES6)
for(let name of students1){
    console.log(name)
}

// loop through an array with for-in loop (indices) (ES6)
for(let idx in students1){
    console.log(idx)
}

// ----- While Loops -----
let num = 0
// while (num<10){
//     console.log(num)
//     num++
// }

// Do-While
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once
do {
    console.log(num)
} while (num > 20)

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// index
console.log(artists[1])

// indexing from the end
console.log(artists[artists.length-1])

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types
console.log(artists.toString())

// joining an array with a seperator
// syntax: array.join(seperator)
console.log(artists.join('$'))

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice(0,1))
console.log(artists)

// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)
console.log(artists.splice(0,1))
console.log(artists)