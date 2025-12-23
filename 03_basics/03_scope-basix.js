

            // Part 1: Global vs Block Scope


    let globalVar = "I'm global";

    function testFunction(){
        let functionVar = "I'm in function";
        console.log("Inside function: ", globalVar);       // Can't access globalVar
        console.log("Inside function: ", functionVar);     // Can't access functionVar
    }


         console.log("Global scope: ", globalVar);
      //  console.log("Block scope: ", functionVar);   functionVar is not defined 
  

    
      testFunction()
    


      if (true) {
        let blockVar = "I'm in block";
        console.log("Inside block: ", blockVar);     
        console.log("Inside block: ", globalVar);
      }


      for( let i = 0; i < 3; i++){
        let loopVar = "Loop" + i;
        console.log("Inside loop: ", loopVar);
      }


   //  console.log(loopVar);  loopVar is not defined


    
        let name = "Global Name";

        function showName(){
            let name = "Function Name";
            console.log("Inside function: ", name);
        }

        showName()
        console.log("Outside function: ", name);
        




                // Part 2: Basic: for loop



        for(let count = 1; count <= 5; count++){
            console.log(count);
        }


      

           for(let backwardCount = 5; backwardCount >= 1; backwardCount--){
            console.log(backwardCount);
           }





        for(let evenNums = 2; evenNums <= 10; evenNums += 2){
            console.log(evenNums);
        }



        const fruits = ["apple", "banana", "orange", "grape"];

        
        for(let order = 0; order <= fruits.length; order++){
            console.log(fruits[order]);     
        }



        let myString = "";

        for(let i = 1; i <= 3; i++){
            myString += i;            
        }

        console.log(myString);
        

        for(let skipNums = 1; skipNums <= 5; skipNums++){
            if (skipNums === 3) {
                continue
            }
            console.log(skipNums);
       }