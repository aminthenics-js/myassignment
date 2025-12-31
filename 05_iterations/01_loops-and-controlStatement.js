

                // Problem 1: Basic For Loop

    const printNumbers = (n) => {
        for (let i = 1; i <= n ; i++) {
            console.log(i);
        }
    }

     printNumbers(6)




                // Problem 2: Sum with For Loop

    const sumToN = (n) => {
        let total = 0;

        for (let iNumber = 1; iNumber <= n; iNumber++) {
            total += iNumber;
        }
            return total;
    }

    console.log(sumToN(5));
    console.log(sumToN(10));





                // Problem 3: Multiplication Table

    const multiplicationTable = (number) => {
        for(index = 1; index <= 10; index++){
           console.log(`${number} x ${index} = ${number * index}`);
        }
    }

    multiplicationTable(7)
    
    



                // Problem 4: While Loop Counter

    const countdown = (strNum) => {
        let number = strNum;

        while (number >= 0) {
            console.log(number);
            number -= 1;
        }
    }

     countdown(10);





                // Problem 5: Password Checker

    const askPassword = () => {
        let attempt = 0;
        let password = "";

        const inputs = ["password", "123", "secret", "secret123"];

        let index = 0;

        while (password !== "secret123") {
            password = inputs[index];
            attempt += 1;
            index += 1;
        }
        console.log(`Correct password ${password}`);
        return attempt;
    }

    console.log(askPassword());





                // Problem 6: Find First Even Number

    const findFirstEven = (numArray) => {
        let i = 0;

        while (i < numArray.length) {
            if( numArray[i] % 2 === 0){
                return numArray[i];
            }
            i++;
        }
         return "Even numbers not found";
    }

        console.log(findFirstEven([1, 3, 5, 8, 9]));
        console.log(findFirstEven([1, 3, 5, 7]));





                // Problem 7: Do-While loop Menu System

    const showMenu = () => {
        const simulatedInputs = ["start", "options", "exit"];
        let choices = [];
        let index = 0;
        let choice;

        do {
           choice = simulatedInputs[index];
           index++;
           if(choice !== "exit"){
            choices.push(choice);
           }

        } while (choice !== "exit")

            return choices;
    }

    console.log(showMenu());





                 // Problem 8: Guaranteed Execution


    const getPositiveNumber = () => {
         let number;
         
         const simulatedInputs = [-5, -2, 0, 10];
         let index = 0;

         do {
            number = simulatedInputs[index];
            index++;
         } while (number <= 0);
         
         return number;
    }

    console.log(getPositiveNumber());





                // Problem 9: Break Statement

    const findNumber = (arr, target) => {
        let index = -1;

        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === target){
                index = i;
                break;
            }
            
        }

        return index;
    }


    console.log(findNumber([10, 20, 30, 40], 30));
    console.log(findNumber([10, 20, 30, 40], 99));





                    // Problem 10: Continue Statement

    const sumOddNumbers = (array) => {
        let sum = 0;

        for (let index = 0; index < array.length; index++) {
            if(array[index] % 2 === 0){
                continue;
            }
            sum += array[index];
        }

        return sum;
    }

    console.log(sumOddNumbers([1, 2, 3, 4, 5]));
    console.log(sumOddNumbers([2, 4, 6]));

    