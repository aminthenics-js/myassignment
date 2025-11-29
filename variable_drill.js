// Basic Variables

const myName = "Aminur";
let myAge = 20;
var myCol = "Cyan";

console.log(`My name is ${myName},`);
console.log(`I am ${myAge} years old.`);
console.log(`And my favorite color is ${myCol}.`);

console.table([myName, myAge, myCol])  // Create vertical table

// const myName = "Rahman"    // Cannot redeclare block-scoped variable 'myName'

let age = myAge + 1;
var favCol = "Red"

console.log(`Today I turned ${age}.`);
console.log(`Also my new favorite colour is ${favCol}.`);



// 1. Create a simple object :

const person = {
    Name : "Amin",
    Age : 23,
    Color : "Yellow"
}

console.table([person])  // Create horizental box.

const friend = {
    frdName : "Saif",
    frdAge : 20,
    frdColor : "Blue"
}

console.table([friend])

const birtYear = 2005;
let currentYear = 2025;
var role = "Student";

let realAge = currentYear - birtYear;

console.log(birtYear);
console.log(currentYear);
console.log(role);
console.log(`And my age is ${realAge}`);


console.table([birtYear, currentYear, role, realAge])

