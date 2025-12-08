       //  Array Creation & Basics

// 1. Literal syntax: My top 3 favorite movies

const favMovies = ["Fight Club", "The Shawshank Redemption", "The Green Mile"];

console.log(favMovies);
console.log(favMovies.length);
console.log(favMovies[0]);
console.log(favMovies[favMovies.length - 1]);
console.log(Array.isArray(favMovies));



// 2. Array constructor: 5 lucky numbers

const luckyNumber = [34, 99, 86, 222, 92];

console.log(luckyNumber);
console.log(luckyNumber.length);
console.log(luckyNumber[0]);
console.log(luckyNumber[luckyNumber.length - 1]);
console.log(Array.isArray(luckyNumber));




// 3. From a string: Split "apple,banana,cherry" into array

const fruits = "apple,banana,cherry".split(",");

console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(Array.isArray(fruits));



// 4. Empty array: Then add 3 programming languages

const languages = [];

languages.push("JavaScript")
languages.push("Rust")
languages.push("C++")


console.log(languages);
console.log(languages.length);
console.log(languages[0]);
console.log(languages[languages.length - 1]);
console.log(Array.isArray(languages));











       // Array Operations - CRUD


// CREATE (Add elements):

const newFruitsArray = ["apple", "banana", "orange"];

newFruitsArray.push("grape")
console.log(newFruitsArray);

newFruitsArray.unshift("kiwi")
console.log(newFruitsArray);

newFruitsArray.splice(3, 0, "mango")
console.log(newFruitsArray);



// READ (Access elements)

console.log(newFruitsArray[1]);
console.log(newFruitsArray[newFruitsArray.length - 1]);
console.log(newFruitsArray.includes("banana"));



// UPDATE (Modify elements):

newFruitsArray[2] = "strawberry"
console.log(newFruitsArray);

const swapFruits = newFruitsArray[0];
newFruitsArray[0] = newFruitsArray[5]
newFruitsArray[5] = swapFruits

console.log(newFruitsArray);




// DELETE (Remove elements):

newFruitsArray.pop()
console.log(newFruitsArray);

const removedFruit = newFruitsArray.shift()
console.log(`Removed: ${removedFruit}, Array:`, newFruitsArray)

newFruitsArray.splice(1, 1)
console.log(newFruitsArray);












       // Array Properties & Methods 

const vegetables = ["potato", "lettuce", "tomato"]


console.log(newFruitsArray.indexOf("orange"));
console.log(newFruitsArray.join());

newFruitsArray.reverse()
console.log(newFruitsArray);



const fruitsCopy1 = [...newFruitsArray];
const fruitsCopy2 = newFruitsArray.slice();

const combined = [...newFruitsArray, ...vegetables]

console.log(combined);
console.log(Array.isArray(combined));













      // Real-world Practice 

// Shopping Cart System

const emptyCart = [];

emptyCart.push("milk")
emptyCart.push("eggs")
emptyCart.push("bread")

console.log(emptyCart);

emptyCart.shift()
console.log(emptyCart);


emptyCart.push("meat", "cheese")
console.log(emptyCart);


console.log(emptyCart.includes("milk"));

console.log(emptyCart.indexOf("bread"));

const cartReplace = emptyCart[0]
emptyCart[0] = "organic eggs"

console.log(emptyCart);


let totalItems = emptyCart.length;
console.log(totalItems);
