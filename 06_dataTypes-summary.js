       // Primitive Types Review 

    const myName = "Aminur";    // Storing user input - names, emails, addresses. Processing URLs and file paths.
  console.log(myName);
  console.log(typeof myName);
  
    const myAge = 20;         // Performing calculations like prices, scores, timers, and measurements.
  console.log(myAge);
  console.log(typeof myAge);
    
    const decimal = 3.1415;
  console.log(decimal);
  console.log(typeof decimal);
    
    const isStudent = true;    // Controlling logic such as login success, feature toggles, and condition checks.
  console.log(isStudent);
  console.log(typeof isStudent);
  
    const hasJob = false;
  console.log(hasJob);
  console.log(typeof hasJob);
    
    let myCountry;             // Indicating a variable or property that has not been assigned a value yet.   
  console.log(myCountry);
  console.log(typeof myCountry);
    
    const birthPlace = null;      // Representing an intentionally empty value,  "no selected item" in a form.
  console.log(birthPlace);
  console.log(typeof birthPlace);
  
    const description = Symbol("id");  // Creating unique object keys to avoid naming conflicts in large applications.
  console.log(description);
  console.log(typeof description);
  
    const bigNum = 9007199254740991n;  // Handling very large numbers such as financial data, IDs, or cryptographic keys.
console.log(bigNum);
console.log(typeof bigNum);



       // ARRAYS - The Ordered Collection

    
    const favFood = ["Fried-rice", "Noodles", "Pudding"];
  console.log(favFood);
   console.log(favFood[0]);
  
    const favoriteFood = favFood;
    favoriteFood[1] = "Chocolate";
  console.log(favoriteFood);

    favoriteFood.push("NiggaBall");
  console.log(favoriteFood);

   favoriteFood.pop();
console.log(favoriteFood);
   
  
  


    // OBJECTS - Creating an object representing myself

  
    const objMyself = {
      name: "Aminur",
      age: 20,
      isStudent: true
    }
  console.table([objMyself]);
  console.log(objMyself.name);
  console.log(objMyself["age"]);

    objMyself.age = 29;
    objMyself.favoriteColor = "Cyan";
  console.log(objMyself);
    
    const hasEmail = objMyself.hasOwnProperty("email");
  console.log(hasEmail);
  
  



    // ARRAY + OBJECT COMBO
  

    const friends = [
      {name: "Mahdi", age: 20},
      {name: "Emon", age: 22}
    ]
  console.log(friends[0].name);
  console.log(friends[1].age);


   friends.push({name: "Tahmid", age: 19})
  console.log(friends);
     

  console.table([friends])

  
  
  

  