

        // Immediately Invoked Function Expressions




            // Problem 1: Basic Named IIFE

    (function appInit( count = 1){
        console.log("Application initialized");

        if (count > 0){
         appInit(count - 1);
        }
    })();






            // Problem 2: Arrow Function IIFE

  
    console.log(
        (() => 10 + 15)()
    );
    
    




            // Problem 3: Private Variables in IIFE

    const counterModule = (function (){
        let counter = 0;
        return {
            increment: function(){ ++counter },
            getValue: function(){ return counter }
        }
        
    })();

    console.log(counterModule.getValue()); 
    counterModule.increment();
    counterModule.increment();
    console.log(counterModule.getValue());
    





            // Problem 4: Multiple IIFEs with Shared State

    const dataStore = (function(){
        let privateData = {};

        return {
            setData: function(key, value){
                privateData[key] = value;
            },
            getData: function(key){
                return privateData[key];
            }
        };
    })();


    const dataProcessor = (function (store){
        return {
            getAverage: function(){
                const numbers = store.getData(`scores`) || [];
                if (numbers.length === 0) return 0;

                const sum = numbers.reduce((acc, num) => acc + num, 0);
                return sum / numbers.length;
            }
        };
    })(dataStore);

    dataStore.setData('scores', [85, 90, 78]);
    console.log(dataProcessor.getAverage())






                // Problem 5: IIFE with Parameters

    const userModules = (function (username, role){

        function getName(){
            return username;
        } 

        function getRole(){
            return role;
        }

        function isAdmin(){
            return role === "admin";
        }

        return {
            getName,
            getRole,
            isAdmin
        };
    })("john_doe", "admin");

    console.log(userModules.getName());
    console.log(userModules.isAdmin());
    





            // Problem 6: Configurable IIFE

    const logger = (function (config){
    const {prefix, debug} = config;

    return function(message){
        if(debug){
            console.log(`${prefix} ${message}`);
        };
    };
   })({prefix: "[APP]", debug: true});

   logger("User logged in");
   logger("Data saved");






            // Problem 7: Bank Account with IIFE

    const createAccount = (function(){
        return function(initialBalance){
            let balance = initialBalance;
            let transactionCount = 0;

            function deposit(amount){
                balance += amount;
                transactionCount++;
            }

            function withdraw(amount){
                if (amount <= balance){
                    balance -= amount;
                    transactionCount++;
                } else {
                    return "Insufficient funds";
                }
            }

            function getBalance(){
                return balance;
            }

            function getTransactionCount(){
                return transactionCount;
            }

            return{
                deposit,
                withdraw,
                getBalance,
                getTransactionCount
            };
        };
    })();

    const account = createAccount(1000);

    account.deposit(500);
    account.withdraw(200);

    console.log(account.getBalance());
    console.log(account.getTransactionCount());
    
    




            // Problem 8: Temperature Converter Factory

    const createConverter = (function(){
        return function(baseUnit){
            const unit = baseUnit.toLowerCase();

            return function(value, targetUnit){
                targetUnit = targetUnit.toLowerCase();

                if(unit === "celsius"){
                    if (targetUnit === "celsius") return value;
                    if (targetUnit === "fahrenheit") return (value * 9/5) + 32;
                    if (targetUnit === "kelvin") return value + 273.15;
                }

                return "Unsupported target unit"
            };
        };
    })();


    const converter = createConverter("celsius");

console.log(converter(100, "fahrenheit")); 
console.log(converter(0, "kelvin"));       
console.log(converter(25, "celsius"));     
