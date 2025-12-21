


      // Part 1: Simple Functions with if


    function isAdult(age){
        if(age >= 18){
            return true;
        }
    }

    console.log(isAdult(17));



     function isPositve(number){
        if(number > 0){
            return "Positive";
        }
     }

     console.log(isPositve(-1));
     

     function checkEmpty(text) {
      if (text === "") {
        return "Empty";
      }
   }


    console.log(checkEmpty(""));
    console.log(checkEmpty("Hello"))  


      

       function canVote(age, isCitizen){
        if (age >= 18 && isCitizen === true){
            return "Can vote";
        }
       }

       console.log(canVote(21, true));




              // Part 2: Functions with Parameters



      function greet(name){
        if (name) {
            return `Hello ${name}`;
        }
      }
       
      console.log(greet("Amin"));
      
      
      function calculateDiscount(price, hasCoupon){
        if (hasCoupon) {
            return price * 0.9;
        }
       }
   
       console.log(calculateDiscount(20, true));
       

     function canEnterClub(age, hasID){
        if(age >= 21 && hasID === true){
            return "Welcome";
        }
     }
      

      console.log(canEnterClub(27, true));
     


       function isWeekend(day){
        if(day ==="Saturday" || day === "Sunday"){
           return "Weekend";
        }
       }

       console.log(isWeekend("Saturday"));
       




            // Part 3: Multiple if Statements




      function checkNumber(num){
        if (num > 100) {
           return "Big";
        }
        if (num < 0) {
            return "Negative";
        }
        if (num === 0) {
            return "Zero";
        }
      }


      console.log(checkNumber(199));
      console.log(checkNumber(-76));
      console.log(checkNumber(0));
      



       function validatePassword(password){
        if (password.length < 8) {
            return "Too short";
        }
        if (password === "password") {
            return "Too obvious"
        }
        if (password.includes("123")) {
            return "Contain seqeunce";
        }
        return "Password is valid";
       }


       console.log(validatePassword("pass"));
       console.log(validatePassword("password"));
       console.log(validatePassword("password123"));
       console.log(validatePassword("himynameisaminthenics3094"));



        function getSize(num){
            if (num > 1000) {
                return "Large";
            }
            if (num > 100) {
                return "Medium";
            }
            if (num > 10) {
                return "Small"
            }
        }


        console.log(getSize(37));
        console.log(getSize(677));
        console.log(getSize(2387));
        