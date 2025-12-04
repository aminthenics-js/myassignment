  // String Methods for Beginners

  const message = "Hello, JavaScript World!";

  console.log(message.length);
  console.log(message.toUpperCase());
  console.log(message.toLowerCase());
  console.log(message[0]);
  console.log(message[21]);
  console.log(message[message.length - 1]);


   // Searching & Extracting

 console.log(message.indexOf("JavaScript"));
 console.log(message.includes("World"));
 console.log(message.indexOf("World") !== -1)
 console.log(message.search("World") !== -1)
 console.log(message.slice(7, 17));
 console.log(message.slice(0, 5));
 console.log(message.slice(7, 16));
 


   // Modifying Strings

const messyString = "   Hello, there are extra spaces here.   ";

console.log(messyString.trim());
console.log(messyString.replace("extra", "too many"));
console.log(messyString.replaceAll(' ', '_'));

const result = "Hello ".repeat(3);
console.log(result);

console.log(messyString.split(" "));




const str = "Hello"
console.log(str.toUpperCase().toLowerCase().length)