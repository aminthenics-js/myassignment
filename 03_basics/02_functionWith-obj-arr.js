           


    //        // Part 1: Functions that Work with Arrays


    
    const numbers = [1, 2, 3, 4, 5];
    const names = ["John", "Jane", "Bob", "Alice"];


 
    
        function getFirstItem(array) {
         return array[0];
            }



        function getLastItem(array) {
         return array[array.length - 1];
            }


    console.log(getFirstItem(numbers)); 
    console.log(getLastItem(numbers));  

    console.log(getFirstItem(names));  
    console.log(getLastItem(names));    

    

       function addToEnd(array, item){
        return [...array, item];
       }

    console.log(addToEnd(numbers, 6));
    console.log(addToEnd(names, "Amin"));
    


      function findName(array, nameToFind){
        if (array.includes(nameToFind)) {
            return "Found";
        } 
        else {
            return "Not found";
        }
    }


    console.log(findName(names, "John"));
    console.log(findName(names, "Rahman"));
    









              // Part 2: Functions that Work with Objects



           const person = {
                 name: "Alex",
                 age: 25,
                 city: "New York",
                 isStudent: true
            };


         function getProperty(obj, propertyName){
            return obj[propertyName];
         }


        console.log(getProperty(person, "name"));
        console.log(getProperty(person, "age"));
        console.log(getProperty(person, "city"));
        console.log(getProperty(person, "isStudent"));
         



        function updateAge(obj, newAge){
            return {...obj, age: newAge};
        }

      
        console.log(updateAge(person, 37));



        function addProperty(obj, key, value){
            return {...obj, profession: "Developer"};
        }

        console.log(addProperty(person, "profession"));
        


        function checkProperty(obj, propertyName){
           if (obj.hasOwnProperty(propertyName)) {
            return true;
           }
           else {
            return false;
           }
        }

        console.log(checkProperty(person, "city"));
        console.log(checkProperty(person, "profession"));
        






        // Use this array of objects



                const users = [
                    {name: "John", age: 30, active: true},
                    {name: "Jane", age: 25, active: false},
                    {name: "Bob", age: 35, active: true}
                ];




        function getActiveUsers(usersArray){
            return usersArray.filter(user => user.active);
        }
        const activeUsers = getActiveUsers(users);
        console.log(activeUsers);
        
        



        function getUserNames(usersArray){
            return usersArray.map(user => user.name);
        }

        const usersName = getUserNames(users);
        console.log(usersName);
        


        
        function findUserByName(usersArray, name){
            const user = usersArray.find(user => user.name === name);
            return user || null;
        }
        
        console.log(findUserByName(users, "Jane"));
        console.log(findUserByName(users, "Aminur"));
        