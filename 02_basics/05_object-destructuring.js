

                // Part 1: Basic Object Destructuring 

     const person = {
  firstName: "Aminur",
  lastName: "Rahman", 
  age: 20,
  country: "Bangladesh",
  profession: "Developer"
};


const { firstName, lastName } = person;
console.log(firstName); 
console.log(lastName);  


const { age, country } = person;
console.log(age);     
console.log(country); 

const { profession: job } = person;
console.log(job); 

const { firstName: first, ...otherInfo } = person;
console.log(first);      
console.log(otherInfo);  


const { city = "Unknown" } = person;
console.log(city); 





            // Part 2: Nested Destructuring

    
    const student = {
  Name: "Aminur",
  grades: {
    math: 95,
    science: 88,
    english: 92
  },
  contact: {
    email: "aminthenics@google.com",
    phone: "123-456-7890"
  }
};


const { Name, contact: { email } } = student;
console.log(Name);   
console.log(email);  


const { grades: { math }, contact: { phone } } = student;
console.log(math);   
console.log(phone);  


const { grades: { math: mathGrade, science, english } } = student;
console.log(mathGrade); 
console.log(science);   
console.log(english);   


const { contact: { email: studentEmail } } = student;
console.log(studentEmail); 


const {
  name: studentName,
  grades: { math: mathScore, science: scienceScore, english: englishScore },
  contact: { email: studentEmail2, phone: studentPhone }
} = student;

console.log(studentName);   
console.log(mathScore);     
console.log(scienceScore);   
console.log(englishScore);   
console.log(studentEmail2); 
console.log(studentPhone);   
    



         


           // Part 3: JSON Basics


    const jsonString = '{"name": "Book", "price": 29.99, "inStock": true, "tags": ["fiction", "bestseller"]}';

    const jsObject = JSON.parse(jsonString);

    console.log(jsonString);
    console.log(jsObject);


    const book = JSON.parse(jsonString);

    const name = book.name;
    const price = book.price

    console.log(name, price);
    
    book.price = 24.99;
    console.log(book.price);

    book.author = "J.K. Rowling";
    console.log(book);
    
    const updatedJSONstring = JSON.stringify(book);
    console.log(updatedJSONstring);
    
    const hasTags = book.hasOwnProperty("tags");
    console.log(hasTags);
    