
const price = 123.4567;
const largeNumber = 1000000;
const stringNumber = "42.8";
const notANumber = "Aminur";



// 1. Convert stringNumber to an actual number
const actualNumber1 = Number(stringNumber);
const actualNumber2 = Number(stringNumber);

console.log(actualNumber1, actualNumber2);



// 2. Check if stringNumber is a valid number
const isValid1 = !isNaN(Number(stringNumber));
const isValid2 = !Number.isNaN(Number(stringNumber))

console.log(isValid1, isValid2);


// 3. Fix price to 2 decimal places 
console.log(price.toFixed(2));


// 4. Convert largeNumber to a readable string with commas
console.log(largeNumber.toLocaleString());



// 5. Check if notANumber is actually not a number (NaN)
const notNumber = !Number.isNaN(Number(notANumber));

console.log(notNumber);


// 6. Get the integer part of price
const integerPart = parseInt(price);

console.log(integerPart);
console.log(typeof integerPart);



// 7. Check if price is finite
const priceIsFinite = isFinite(price);

console.log(priceIsFinite);





console.log(Math.sqrt(64));
console.log(Math.round(3.7));
console.log(Math.floor(3.2));
console.log(Math.ceil(3.2));
console.log(Math.max(15, 25));
console.log(Math.min(15, 25));
console.log(Math.pow(5, 3));
console.log(Math.random());


const ranMin = 1;
const ranMax = 10;
console.log(Math.random(ranMax - ranMin + 1) * ranMax);

console.log(Math.abs(-15.5));





const productCost = "45.67";
const productTax = "0.15" // 15%

const costNum = Number(productCost);
const taxNum = Number(productTax);

const finalPrice = costNum + (costNum * taxNum);
const priceInDecimal = finalPrice.toFixed(2);

console.log(priceInDecimal);


const userAge = "25.5";

const ageInNumber = Number(userAge);

const integerAge = !Number.isNaN(ageInNumber) && Number.isInteger(ageInNumber)

console.log(integerAge);





const minDamage = 10;
const maxDamage = 50;

console.log(Math.floor(Math.random() * maxDamage - minDamage + 1) + minDamage);



const sumNumber = [12.3, 45.6, 78.9, 23.4];

console.log(Math.max(...sumNumber));
console.log(Math.min(...sumNumber));

const sum = sumNumber[0] + sumNumber[1] + sumNumber[2] + sumNumber[3];
const roundSum = Math.round(sum);

console.log(roundSum);
