
    // Part 1: Object Creation & Access


    const myInfo = {
    name: "Aminur",
    age: 20,
    isStudent: true,

    Contact: {
        email: "aminthenics@google.com",
        phone: 2348902034
    },

    Address: {
        street: "70b Rue des Violettes",
        city: "Riedisheim",
        country: "France"
    },

    Hobbies: ["Coding", "Gaming", "Cycling"],

    Education: [
        {
            school: "National School",
            year: 2020,
            degree: "High School Diploma"
        },

        {
           school: "State University",
           year: 2022,
           degree: "Bachelor of Science in Biology"
        },

        {
            school: "City College",
            year: 2024,
            degree: "Master of Science in Environmental Science"
        }
    ],

    getFullAddress: function(){
        return `${this.Address.street}, ${this.Address.city}, ${this.Address.country}`
    },

    addSkill(skill) {
        this.languages.push("TypeScript")
    },

    getSummary(){
        return{
            name: this.name,
            profession: this.profession,
            totalHobbies: this.Hobbies.length,
            totalLanguages: this.languages.length
        }
    },

    birthday(){
        this.age += 1 
        return this.age
    }
};


console.log(myInfo.name);                 // ✅ Dot notation
console.log(myInfo.Address["city"]);      // ✅ Bracket notation
console.log(myInfo.Hobbies[1]);           // ✅ Array indexing


const firstSchool = myInfo.Education[0].school;
console.log(firstSchool);                // ✅ Nested access






      // Part 2: Object Operations - CRUD 

// CREATE (Add new properties):

myInfo.profession = "Back-end Developer"
myInfo.languages = ["JavaScript", "Python", "Rust", "Java"]
myInfo.introduce = (`Hi, I'm ${myInfo.name}`)

console.log(myInfo);



// READ (Access data):

console.log(myInfo.Contact.hasOwnProperty("email"));
console.log(Object.keys(myInfo));
console.log(Object.values(myInfo));





// UPDATE (Modify data):

myInfo.age = myInfo.age + 1;
console.log(myInfo.age);



const updatedHobbies = [...myInfo.Hobbies, "Boxing"]
console.log(myInfo.Hobbies);



myInfo.Address.city = "Paris"
console.log(myInfo.Address);



// DELETE (Remove data):

delete myInfo.Contact.phone
console.log(myInfo.Contact);


const remHobbies = myInfo.Hobbies.shift();
console.log(myInfo.Hobbies);






          // Part 3: Object Methods & this

console.log(myInfo.getFullAddress());
console.log(myInfo.addSkill());
console.log(myInfo.getSummary());
console.log(myInfo.birthday());











       // Part 4: Real-world Object Practice



const product = {
    id: 101,
    name: "RedBull",
    price: 17.00,
    inStock: true,
    categories: ["Juice", "Drink", "Energy drink"],
    discount: 15,
    ratings: [4, 20, 9, 37, 11],
    
    getDiscountedPrice: function(){
        return this.price - (this.price * this.discount / 100);
    },

    getAverageRating: function(){
        const totalRatings = this.ratings.reduce((acc, rating) => acc + rating, 0);
        return totalRatings / this.ratings.length
    }

}


console.log("original price: $" + product.price );
console.log("Discounted price: $" + product.getDiscountedPrice().toFixed(2));
console.log("Average rating: $" + product.getAverageRating().toFixed(1));




const userObject = {
    id: 512,
    username: "Aminthenics",
    cart: [],
    orders: [],

    addToCart: function(productid) {
        this.cart.push(productid);
        console.log(`Product ${productid} added to cart`);
    }
}

userObject.addToCart(101);
userObject.addToCart(205);

console.log(userObject.cart);
