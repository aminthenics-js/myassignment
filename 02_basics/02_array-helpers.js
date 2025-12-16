      // Array Helper Methods for Beginners

// Part 1: .forEach() - The Basic Iterator


   const numbers = [1, 2, 3, 4, 5];

   // 1. Use .forEach() to log each number
   numbers.forEach(number => {
    console.log(number);
   });



   // 2. Use .forEach() to log each number with its index
   numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
   });


// 3. Create a new array and use .forEach() to double each number
 const doubleNumbers = [];

numbers.forEach( number => {
    doubleNumbers.push(number * 2)
});

console.log(doubleNumbers);







// Part 2: .map() - The Transformer

const prices = [100, 200, 300, 400];


// 1. Use .map() to add 10% tax to each price
const priceWithTax = prices.map( price => {
   return parseFloat((price * 1.1).toFixed(2));
});

console.log(priceWithTax);



// 2. Use .map() to convert prices to strings with "$" prefix
const priceString = prices.map(price => {
    return `$${price}`;
});

console.log(priceString);



// 3. Use .map() on array of names to make them uppercase
const names = ["john", "jane", "bob"];

const nameInUpperCase = names.map(name => {
    return name.toUpperCase();
});

console.log(nameInUpperCase);







      // Part 3: .filter() - The Selector

const scores = [85, 42, 90, 67, 30, 95, 58];

// 1. Use .filter() to get only passing scores (>= 60)

const passingScore = scores.filter( score => {
    return score >= 60;
});

console.log(passingScore);



// 2. Use .filter() to get only even numbers from [1, 2, 3, 4, 5, 6]
const newNumbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = newNumbers.filter( number => number % 2 === 0)

console.log(evenNumbers);




// 3. Use .filter() on array of words to get words longer than 5 letters
const words = ["apple", "banana", "cat", "elephant"];

const bigWords = words.filter( word => word.length > 5);

console.log(bigWords);






      // Part 4: .find() & .findIndex() - The Searchers 

const users = [
    { id: 1, name: "John", active: true},
    { id: 2, name: "Jane", active: false},
    { id: 3, name: "Bob", active: true},
];


// 1. Use .find() to get first active user
const activeUser = users.find( user => user.active === true );

console.log(activeUser);


// 2. Use .find() to get user with id = 2
const secondUser = users.find( user => user.id === 2);

console.log(secondUser);


// 3. Use .findIndex() to find position of inactive user
const inactiveUser = users.findIndex( user => user.active === false);

console.log(inactiveUser);


// 4. Use .findIndex() to find position where name === "Bob"
const bobPosition = users.findIndex( user => user.name === "Bob");

console.log(bobPosition);


