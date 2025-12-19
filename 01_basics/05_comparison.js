   // Problem 0: The Type Coercion Trap

   console.log(5 == "5");  // true, because in loose equality strings automatically converts into number (Avoid)
   console.log(5 === "5"); // false, because type and value aren't identical
   

   console.log(0 == 0);   // true
   console.log(0 == ""); // true (empty string)
   console.log("  \t\n" == 0); // true (whitespace string)
   

   console.log(true == 1);   // true, true becomes 1, so 1 == 1
   console.log(true == "1"); // true, "1" becomes number 1, and true becomes 1
   console.log(false == 0); // true, false becomes 0
   console.log(false == "");  // true, empty string becomes 0, and false becomes 0
   

   console.log(null == undefined);  // true
   console.log(null === undefined); // false
   console.log(null == 0);   // false, null only loosely equals undefined.
   console.log(undefined == 0); //false
   



   // Problem 1: The === vs == Showdown 

   const pairs = [
      [5, "5"],
      [0, false],
      [1, true],
      [null, undefined],
      ["", false],
      [[], false],
      [[], []],
      [{}, {}],
      [NaN, NaN],
   ]

   

let first = 5;
let second = "5";

console.log(first == second);
console.log(first === second);
console.log("== is true because '5' becomes 5. === is false because number !== string\n");


let boolean1 = 0;
let boolean2 = false;

console.log(boolean1 == boolean2);
console.log(boolean1 === boolean2);
console.log("== is true because 0 becomes false. === is false because number !== boolean\n");


let newBoolean1 = 1;
let newBoolean2 = true;

console.log(newBoolean1 == newBoolean2);
console.log(newBoolean1 === newBoolean2);
console.log("== is true because 1 becomes true. === is false because number !== boolean\n");


let empty1 = null;
let empty2 = undefined;

console.log(empty1 == empty2);
console.log(empty1 === empty2);
console.log("== is true because null becomes undefined. === is false because null !== undefined \n");


let emptyString = "";
let boolean = false;

console.log(emptyString == boolean);
console.log(emptyString === boolean);
console.log("== is true because empty string becomes false. === is false because emtpt string !== boolean\n");


let emptyArray = [];
let Boolean = false;

console.log(emptyArray == Boolean);
console.log(emptyArray === Boolean);
console.log("== is true because empty array becomes false. === is false because empty array !== boolean\n");


let array1 = [];
let array2 = [];

console.log(array1 == array2);
console.log(array1 === array2);
console.log("== is true because array1 becomes array2. === is false because array1 !== array2\n");


let curlBrace1 = {};
let curlBrace2 = {};

console.log(curlBrace1 == curlBrace2);
console.log(curlBrace1 === curlBrace2);
console.log("== is true because curl brace1 becomes curl brace2. === is false because curl beace1 !== curl brace2\n");


let NotAnumber1 = NaN;
let NotAnumber2 = NaN;

console.log(NotAnumber1 == NotAnumber2);
console.log(NotAnumber1 === NotAnumber2);
console.log("== is true because NaN1 becomes NaN2. === is false because NaN1 !== NaN2\n");

       // Using console.table() for Problem 1 to make a clean comparison table

     console.table([
        {first: 5, second: "5", '==': 5 == "5", '===': 5 === "5"},
        {boolean1: 0, boolean2: false, '==': 0 == false, '===': 0 === false},
        {newBoolean1: 1, newBoolean2: true, '==': 1 == true, '===': 1 === true},
        {empty1: null, empty2: undefined, '==': null == undefined, '===': null === undefined},
        {emptyString: "", boolean: false, '==': "" == false, '===': "" === false},
    // {array1: [], array2: [], '==': [] == [], '===': [] === []}, 
        // This condition will always return false since JavaScript compares objects by reference, not value.
     //{curlBrace1: {}, curlBrace2:{}, '==': {} == {}, '===': {} === {}},
        // This condition will always return false since JavaScript compares objects by reference, not value.
        {NotAnumber1: NaN, NotAnumber2: NaN, '==': NaN == NaN, '===': NaN === NaN}
    ]);





  

   // Problem 2: Comparison Table 


   const test = [
     // Numeric Comparisons
    `5 > 3`,
    `"5" > 3`,
    `"5" > "3"`,
    `10 > "100"`,
    `"10" > "100"`,

     // Equality Madness
    `0 == "0"`,
    `0 === "0"`,
    `false == "false"`,
    `false == 0`,
    `"" == 0`,

    // Null/Undefined Special Cases
    `null == undefined`,
    `null === undefined`,
    `null == 0`,
    `null == ""`,
    `undefined == 0`,

    
    // String Weirdness
    `"a" < "b"`,
    `"ab" < "ac"`,
    `"10" < "2"`,
    `"10" < 2`,


    // Boolean Mix
    `true == 2`,
    `true == 1`,
    `false == -1`,
   ]


   console.log("5 > 3:", 5 > 3, "| Types:" , typeof 5, typeof 3);
   console.log('"5" > 3:', "5" > 3, "| Types:" , typeof "5", typeof 3);
   console.log('"5" > "3":', "5" > "3", "| Types:" , typeof "5", typeof "3");
   console.log('10 > "100":', 10 > "100", "| Types:", typeof 10, typeof "100");
   console.log('"10" > "100":', "10" > "100", "| Types:", typeof "10", typeof "100");

   console.log('0 == "0":', 0 == "0", "| Types:",typeof 0, typeof "0");
   console.log('0 === "0":', 0 === "0", "| Types:",typeof 0, typeof "0");
   console.log('false == "false":', false == "false", "| Types:", typeof false, typeof "false");
   console.log('false == 0:', false == 0, "| Types:", typeof false, typeof 0);
   console.log('"" == 0:', "" == 0, "| Types:", typeof "", typeof 0);

   console.log("null == undefined:", null == undefined, "| Types:", typeof null, typeof undefined);
   console.log("null === undefined:", null === undefined, "| Types:", typeof null, typeof undefined);
   console.log("null == 0:", null == 0, "| Types:", typeof null, typeof 0);
   console.log('null == "":', null == "", "| Types:", typeof null, typeof "");
   console.log("undefined == 0:", undefined == 0, "| Types:", typeof undefined, typeof 0);
   
   console.log('"a" < "b":', "a" < "b", "| Types:", typeof "a", typeof "b");
   console.log('"ab" < "ac":', "ab" < "ac", "| Types:", typeof "ab", typeof "ac");
   console.log('"10" < "2":', "10" < "2", "| Types:", typeof "10", typeof "2");
   console.log('"10" < 2:', "10" < 2, "| Types:", typeof "10", typeof 2);
   
   console.log('true == 2:', true == 2, "| Types:", typeof true, typeof 2);
   console.log('true == 1:', true == 1, "| Types:", typeof true, typeof 1);
   console.log('false == -1:', false == -1, "| Types:", typeof false, typeof -1);
   
   
   
   
   
   // Problem 3: Real-world Scenarios


   const userInputPassword = "12345";
   const storedPassword = 12345;

   console.log("Loose check:", userInputPassword == storedPassword); // Dangerous, converts types automatically and behavior is unpredictable.
   console.log("Strict check:", userInputPassword === storedPassword); // Safer, returns true only if type and value identical.
   
   const itemCount = 0;
   const cartEmpty = false;

   console.log("itemCount == cartEmpty:", itemCount == cartEmpty);
   console.log("itemCount === cartEmpty:", itemCount === cartEmpty);  /* Actually: if itemCount == cartEmpty is true, and cartEmpty is false.
   That means itemCount 0 equals false, so cart is empty */
   
   const userAge = "";
   const minimumAge = 18;

   console.log('userAge >= minimumAge:', userAge >= minimumAge);
   console.log('userAge == minimumAge:', userAge == minimumAge);

   const newUiFeature = "true";
   const useNewUi = true;

   console.log('newUiFeature == useNewUi:', newUiFeature == useNewUi);
   console.log('newUiFeature === useNewUi:', newUiFeature === useNewUi);



                          // The Golden Rules (My Summary)
   
    // MY COMPARISON RULES:

// 1. Always use === unless I explicitly need type coercion from ==.
// 2. String comparison works by comparing characters lexicographically, left to right.
// 3. null and undefined are equal only with == because the abstract equality rules treat them as loosely equivalent.
// 4. The most surprising thing I learned: that == can trigger unexpected coercions like [] == 0 being true.
// 5. I will never forget: "10" < "2" is true because string comparison is lexicographical, so "1" comes before "2".


