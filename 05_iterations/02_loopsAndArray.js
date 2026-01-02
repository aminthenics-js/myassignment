

                // Problem 1: For...of with Arrays

    const sumArray = (array) => {
        let total = 0;

        for (const sum of array) {
            total = total + sum;
        }

        return total;
    };

    console.log(sumArray([1, 2, 3, 4]));






                // Problem 2: For...in with Objects

    const listProperties = (obj) => {
        const keys = [];

        for (const key in obj) {
            keys.push(key);
        }

        return keys;
    };

    const person = {name: "Ali", age: 25, city: "NYC"};
    console.log(listProperties(person));






                // Problem 3: Basic forEach

    const printSquares = (numbers) => {
        numbers.forEach(element => {
            console.log(`Square of ${element} is ${element * element}`);
        });
    };

    printSquares([4, 56, 77, 10]);







                // Problem 4: forEach with Index

    const markStudents = (names) => {
        const markedNames = [];
        names.forEach((studentName, index) => {
            markedNames.push(`${index + 1}. ${studentName}`);
        });
        return markedNames;
    };

    console.log(markStudents(["Ali", "Sara", "Tom"]));






                // Problem 5: Basic Map Transformation

    const doubleNumbers = (arrNums) => {
        return arrNums.map(num => num * 2);
    };

    console.log(doubleNumbers([1, 2, 3]));






                // Problem 6: Map with Objects

    const getInitials = (names) => {
        return names.map(name => {
            const words = name.split(" ");
            return words.map(word => word[0]).join(".");
        });
    };

    console.log(getInitials(["John Doe", "Jane Smith", "Aminur Rahman"])); 