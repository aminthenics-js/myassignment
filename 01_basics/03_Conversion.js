  // *************** Conversion *****************

// String Conversion 

const number = 42
const boolean = true
const nullValue = null
const undefinedValue = undefined


// Test Method 1: String()

console.log(String(number));  // 42
console.log(String(boolean)); // true
console.log(String(nullValue)); // null
console.log(String(undefinedValue)); // undefined



// Test Method 2: .toString()

console.log(number.toString());
console.log(boolean.toString());

// console.log(nullValue.toString());  shows error
// console.log(undefinedValue.toString());  shows error


/*
   .toString() method doesn't work for null and undefined.
*/



  // Number Conversion


const numericString = "123"
const decimalString = "45.67"
const mixedString = "99 bottles"
const booleanTrue = true
const booleanFalse = false
const nullvalue = null


console.log(Number(numericString));  // 123
console.log(Number(decimalString));  // 45.67
console.log(Number(mixedString));  // NaN
console.log(Number(booleanTrue));  // 1
console.log(Number(booleanFalse)); // 0
console.log(Number(nullvalue)); // 0


console.log(parseInt(numericString));  // 123
console.log(parseInt(decimalString)); // 45
console.log(parseInt(mixedString));  // 99
console.log(parseInt(booleanTrue));  // NaN
console.log(parseInt(booleanFalse));  // NaN
console.log(parseInt(nullvalue));   // NaN


console.log(parseFloat(numericString));  //123
console.log(parseFloat(decimalString));  // 45.67
console.log(parseFloat(mixedString));  // 99
console.log(parseFloat(booleanTrue));  // NaN
console.log(parseFloat(booleanFalse));  // NaN
console.log(parseFloat(nullvalue));   // NaN


console.log(+numericString);  // 123
console.log(+decimalString);  // 45.67
console.log(+mixedString);  // NaN
console.log(+booleanTrue);  // 1
console.log(+booleanFalse);  // 0
console.log(+nullvalue);  // 0


console.log(Math.floor(numericString));  // 123
console.log(Math.floor(decimalString));  // 45
console.log(Math.floor(mixedString));  //NaN
console.log(Math.floor(booleanTrue));  // 1
console.log(Math.floor(booleanFalse));  // 0 
console.log(Math.floor(nullvalue));  // 0




   // Boolean Conversion


const emptyString = ""
const nonEmptyString = "hello"
const zero = 0
const one = 1
const nullVal = null
const undefinedVal = undefined
const notANumber = NaN


console.log(Boolean(emptyString));  // false
console.log(Boolean(nonEmptyString));  // true
console.log(Boolean(zero));  // false
console.log(Boolean(one));  // true
console.log(Boolean(nullVal));  // false
console.log(Boolean(undefinedVal));  // false
console.log(Boolean(notANumber));  //false


console.log(!!"");
console.log(!!"hello");
console.log(!!0);
console.log(!!1);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);


console.log({
    "" : false,
    "hello" : true,
    0 : false,
    1 : true,
    null : false,
    undefined : false,
    NaN : false
});



    //  Real-world Scenarios

// Scenario 1: User Input

const userAge = "25"
const userHeight = "5.9"
const hasSubscription = "true"

const age = Number(userAge);
const yearsUntil100 = 100 - age;

const height = parseFloat(userHeight);
const heightCm = height * 30.48;
const isSubscribed = hasSubscription === "true";

console.log(`${age} years until 100: ${yearsUntil100} years`);
console.log(`${height} feet = ${heightCm} cm`);
console.log(`Subscribed ${isSubscribed}`);


// Scenario 2: Form Validation

const userName = "aminur123"
const cartItems = "0" 
const discount = ""

const hasUsername = Boolean(userName)
const hasCartitems = Number(cartItems) > 0
const hasDiscount = discount !== ""

console.log("Has username:", hasUsername);
console.log("Has cart items:", hasCartitems);
console.log("Has discount:", hasDiscount);


// Scenario 3: Data Processing  

const price1 = "15.99"
const price2 = "12.50"
const quantity = "3"

const total = (parseFloat(price1) + parseFloat(price2)) * parseInt(quantity)

console.log(`Total cost $${total}`);

