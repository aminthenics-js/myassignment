


                // Part 1: Temperature Converter

        
        function createTemperatureConverter() {
            function celsiusToFahrenheit(celsius){
            return (celsius * 9/5) + 32;
    }
    
    
            function fahrenheitToCelsius(fahrenheit){
            return (fahrenheit - 32) * 5/9;
    }  
    
    return {
        fahrenheitToCelsius,
        celsiusToFahrenheit
    };
}


    const converter = createTemperatureConverter();
       console.log("The temperature in Fahrenheit is: ", converter.celsiusToFahrenheit(32),'°F');
       console.log("The temperature in Celsius is: ", converter.fahrenheitToCelsius(78),'°C');




                // Part 2: Create a Bank Account System



      
        


            function createBankAccount(initialBalance){
                let balance  = initialBalance;

                const deposit = function depositAmount(money){
                    return balance += money;
                };

                const withdraw = function withdrawBalance(amount){
                    return balance -= amount;
                };
                
                const checkBalance = function bankBalance(){
                   return balance
                };

                return{ deposit, withdraw, checkBalance };
            }

   const myAccount = createBankAccount(7000);
    myAccount.deposit(3795);
    myAccount.withdraw(2065);

    console.log("Account balance is: ", myAccount.checkBalance());
           
            








                                // Part 3: Counter with Reset


            function createSmartCounter(){
                let count = 0;
                let totalOperations = 0;

                return {
                    increment: function(){
                        totalOperations++;
                        return ++count;
                    },

                    decrement: function(){
                        totalOperations++;
                        return --count;
                    },

                    reset: function(){
                        totalOperations++;
                        count = 0;
                        return count;
                    },

                    getstats: function(){
                        return {
                            currentCount: count,
                            operations: totalOperations
                        };
                    }
                };
            }


    const myCounter = createSmartCounter();

    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 
    console.log(myCounter.increment()); 

    console.log(myCounter.decrement());
    console.log(myCounter.decrement());
    console.log(myCounter.decrement());
    console.log(myCounter.decrement());
    console.log(myCounter.decrement());
    console.log(myCounter.decrement());


    console.log(myCounter.reset());

    console.log(myCounter.getstats());
    








    

            // Part 4: Sort Students by Grade

        
        
        const sortStudents = function(studentsArray){
            return studentsArray.sort((a, b) => b.grade - a.grade);
      };

        const studentsArray = [
            {name: "Aminur", grade: 98},
            {name: "Rahman", grade: 78},
            {name: "Aminthenics", grade: 83},
            {name: "Rahmanthenics", grade: 59}
      ];

      const sortedStudents = sortStudents(studentsArray);
      console.log(sortedStudents);
      








      


            // Part 5: Shopping Cart System


            function createShoppingCart(){
                const items = [];
                let discount = 0;

                function calculateTotal(){
                    let total = 0;
                    for(let i = 0; i < items.length; i++){
                        total += items[i].price;
                    }
                    return total;
                } 
                
                return {
                    addItem: function(name, price){
                        items.push({name: name, price: price});
                    },

                    applyDiscount: function(percentage){
                        discount = percentage;
                    },

                    checkOut: function(){
                        let total = calculateTotal();
                        total = total - (total * discount / 100);
                        return total;
                    },

                    getItemCount: function(){
                        return items.length;
                    }
                };
    }



    const cart = createShoppingCart();
    cart.addItem("Book", 20);
    cart.addItem("Pen", 5);
    cart.applyDiscount(10); 
    

    console.log(cart.checkOut()); 
    console.log(cart.getItemCount()); 

    