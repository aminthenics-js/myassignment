

        // Problem 1: Convert Function Expressions to Arrow Functions


    
    const multiply = function(a, b){
        return a * b;
    };

    // To arrow function:

   const arrowFunction = (a, b) => { 
     return a * b};

   console.log(multiply(5, 3));

  




    
   const sayHello = function(){
        console.log("Hello");
    };

    // To arrow function:

   const helloFunction = () => {
        console.log("Hello");
    }
    
    helloFunction()







    const square = function(num){
        return num * num;
    };

    // To arrow function:

    const newSquare = (num) => {
        return num * num
    };

    newSquare(6)











           // Problem 2: Rewrite with Implicit Returns


    const add = (a, b) => {
        return a + b;
    };

    // MY IMPLICIT VERSION HERE

    const myAdd = (a, b) => a + b;
    myAdd(9, 8);






    const isEven = (num) => {
        return num % 2 === 0;
    };

    // MY IMPLICIT VERSION HERE

    const evenNumber = (num) => num % 2 === 0;
    console.log(evenNumber(7));






    const processData = (data) => {
        const result = data * 2;
        console.log("Processing: ", result);
        return result;
    };


    /*
    Arrow functions with implicit returns cannot handle multiple statements,
    they can only return the result of one expression directly
    So because processData does more than just return a value,
    I must use {} and return it cannot be converted to an implicit return.
    */






            // Problem 3: When to Use Explicit Returns


    const processNumbers = (numbers) => {
        return numbers
        .filter(num => num >= 0)
        .map(num => num * num)
    };


    console.log(processNumbers([-43, -67, 83, 38, -183 ]));








            // Problem 4: this in Regular vs Arrow Functions


    const person = {
        name: "Aminur",

        greetRegular: function(){
            return "Hello, " + this.name;
        },

        greetArrow: function(){
            return "Hello, " + this.name
        },

        delayedGreet: function(){
            setTimeout(function() {
                console.log("Regular inside timeout:" + this.name);
            }, 100);

            setTimeout(() => {
                console.log("Arrow inside timeout:" + this.name);
            }, 100);
        }
    };

    console.log(person.greetRegular());
    console.log(person.greetArrow());
    person.greetArrow()






            // Problem 5: this Problem


    const calcalator = {
        value: 0,

        add: function(x){
            this.value += x;
            return this.value;
        },

        multiply: function(x){
            this.value *= x;
            return this.value;
        }
    };

    console.log(calcalator.add(4));
    console.log(calcalator.multiply(2));
    console.log(calcalator.multiply(2));
    console.log(calcalator.add(4));
    





            // Problem 6: Array Methods with Arrow Functions


    
    const products = [
        {name: "Laptop", price: 1000, category: "Electronics"},
        {name: "Shirt", price: 25, category: "Clothing"},
        {name: "Book", price: 15, category: "Education"},
        {name: "Phone", price: 800, category: "Electronics"},
        {name: "Pants", price: 40, category: "Clothing"},
    ];

    const electronics= products.filter(item => item.category === "Electronics");
    console.log("Electronics:", electronics);
    

    const productNames = products.map(newItem => newItem.name);
    console.log("Names:", productNames);
    

    const totalPrice = products.reduce((total, item) => total + item.price, 0);
    console.log("Total:", totalPrice);
    

    const mostExpensive = products.reduce((max, item) => {
        return item.price > max.price ? item : max;
    });
    console.log("Most expensive:", mostExpensive);
    