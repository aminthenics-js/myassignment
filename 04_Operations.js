  // ******************* Operations ********************


  // Problem 1: Arithmetic Operations

  let varA = 10;
  let varB = 3;

  console.log(varA + varB);
  console.log(varA - varB);
  console.log(varA * varB);
  console.log(varA / varB);
  console.log(varA % varB);
  console.log(varA ** varB);

  
  console.log(10 / 0);    // Infinity
  console.log("10" + 3);  // 103  ~string concatination.
  console.log(10 + "3");  // 103  
  console.log("5" * 2);   // 10
  console.log("5" * "2"); // 10
  console.log(10 % 3.5);  // 3
  

  console.log("hello" * 2)      // NaN
console.log(Infinity - 100)   // Still Infinity
console.log(0.1 + 0.2)        // 0.30000000000000004 (floating point quirk!)




  // Problem 2: Comparison Operations

  const x = 5;
  const y = "5"
  const z = 10;

console.log(x == y);  // true
console.log(x === y); // false
console.log(x != y);  // false
console.log(x !== y); // true

console.log(x > y); // false
console.log(x < z); // true
console.log(x >= 5); // true
console.log(x <= 5); // true


console.log("apple" > "banana");  // false
console.log("10" > "2");         // false : String comparison is character-by-character. "1" vs "2" → "1" comes before "2" alphabetically, So "10" < "2" is true



console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 == false);   // true : JavaScript converts types when using ==
console.log("" == false);  // true : 0 and "" are "falsy" values, so they equal false.



// More type coercion examples:
console.log(true == 1)        // true
console.log(false == 0)       // true  
console.log([] == false)      // true (empty array becomes 0)
console.log([] == ![])        // true (mind-bending!)





// Problem 3: Logical Operations

const loggedIn = true;
const hasPermission = false;
const isAdmin = true;

console.log(loggedIn && isAdmin);       // true
console.log(loggedIn || hasPermission); // true
console.log(!loggedIn);                // false

// What about multiple conditions?
console.log(true && true && false)  // false
console.log(false || false || true) // true

// What about non-booleans with logical operators?
console.log("hello" && "world")  // "world" (returns last truthy)
console.log(0 && "test")         // 0 (returns first falsy)
console.log(null || "default")   // "default"

console.log(loggedIn && hasPermission); // false
console.log(isAdmin || hasSpecialAccess);  // true
// console.log(!bannedFromSite);  bannedFromSite is not defined.

const username = "";
const displayname = username || "Guest";

console.log(displayname); // Guest : short-circuit evaluation.


// Test logical operators with non-booleans:
console.log("Test 1:", "hello" && "world")
console.log("Test 2:", 0 && "test")
console.log("Test 3:", null || "default" || "backup")

// Real use case:
const userRole = ""
const defaultRole = "viewer"
const finalRole = userRole || defaultRole
console.log("User role:", finalRole)




    // Problem 4: Assignment Operations

    let scr = 10;
    bonus = 5;
    scr += 5

    console.log(scr);  // 15

    let scr1 = 10;
    scr1 -= 2;

    console.log(scr1);  8

    let scr2 = 10;
    scr2 *= 2;

    console.log(scr2);  // 20
    
    let scr3 = 10;
    scr3 /= 2;

    console.log(scr3);  //5
    
    let scr4 = 10;
    scr4 %= 3;

    console.log(scr4);   // 1


  let counter = 0;
  counter++ 
  console.log(counter);  // 1
  
  let counter1 = 0;
  ++counter1
  console.log(counter1);  // 1
  
  let negCounter = 0;
  negCounter--
  console.log(negCounter);  // -1
  
  let negCounter1 = 0;
  --negCounter1
  console.log(negCounter1); // -1
  

  let a = 5;
  let b = a++
  console.log(a);  // 6
  console.log(b);  // 5
  
  let c = 5;
  let d = ++c
  console.log(c); // 6
  console.log(d); // 6
  