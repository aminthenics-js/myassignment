  

      // Part 1: Create Simple Objects


const bookObj = {
    title: "The Great Gatsby",
    author: "Scott Fitzgerald",
    pages: 208,
    isRead: false
};


console.log(bookObj);
console.log(bookObj.title);
console.log(bookObj["pages"]);
console.log(bookObj.hasOwnProperty("price"));





const carObj = {
    brand: "Toyota",
    model: "Camry",
    year: 1982,
    color: "White"
};


console.log(carObj);
console.log(carObj.brand);
console.log(carObj["year"]);








const movieObj = {
    title: "One Battle After Another",
    director: "Paul Thomas Anderson",
    year: 2025,
    rating: 7.9,
    genres: ["Action, Thriller, Dark Comedy, Political Satire, Crime Drama"]
};


console.log(movieObj);
console.log(movieObj.title);
console.log(movieObj["year"]);









       // Part 2: Access & Modify Object Properties 



bookObj.title = "The Lord of the Rings"
console.log(bookObj.title);

bookObj.pages += 50;
console.log(bookObj.pages);

bookObj.isRead = true
console.log(`You read it: ${bookObj.isRead}`);


const publisher = {
    ...bookObj,
    name: "Jesmyn Ward"
};

console.log(publisher);


const characters = {
    ...bookObj,
    actor: ["Jay Gatsby", "Nick Carraway", "Daisy Buchanan", "Jordan Baker"]
};

console.log(characters);



carObj.color = "black"
console.log(carObj);



const saleProperty = {
    ...carObj,
    forSale: true
};

console.log(saleProperty);


const featuresProperty = {
    ...carObj,
    features: ["AC", "GPS", "Monitor", "Airbags", "ABS", "Lane assist"]
};

console.log(featuresProperty);








       // Part 3: Nested Objects 


const student = {
    name: "Alex",
    age: 20,

    address: {
        street: "70b Rue des Violettes",
        city: "Riedisheim",
        country: "France"
    },

    contact: {
        email: "abchelp@gmail.com",
        phone: "4594-5830"
    },

    courses: ["Math", "Science", "English"]
};


console.log(student.address.city);
console.log(student.contact.email);
console.log(student.courses[0]);

student.contact.phone = "555-9999"
console.log(student.contact);

student.courses.push("History")
console.log(student.courses);

student.address.city = "New York"
console.log(student.address.city);
