
                // Problem 1: Filter Basics

    const people = [
    {name: "Ali", age: 17},
    {name: "Sara", age: 25},
    {name: "Tom", age: 15},
    {name: "Lina", age: 30}
 ];

      const getAdults = ( (people) => {
        return people.filter(function(person){
            return person.age >= 18;
        })
    });

    console.log(getAdults(people));


                // Problem 2: Map Transformation

    const products = [
      {name: "Laptop", price: 999.99},
      {name: "Mouse", price: 25.5},
      {name: "Keyboard", price: 75}
  ];

    const formatProducts = ((products) => {
        return products.map((item) => {
            return `${item.name} - $${item.price.toFixed(2)}`;
        })
    });

    console.log(formatProducts(products));


                // Problem 3: Reduce Basics

    const cart = [
        {item: "Book", price: 20, quantity: 2},
        {item: "Pen", price: 5, quantity: 10},
        {item: "Notebook", price: 15, quantity: 3}
    ];

    const getTotalValue = ((cart) => {
        return cart.reduce((acc, val) => {
            return acc + val.price * val.quantity; 
        }, 0)
    });

    console.log(getTotalValue(cart));


                // Problem 4: Basic Chaining

    const processNumbers = ((numbers) => {
        return numbers
                    .filter(posNums => posNums > 0)
                    .map(squareNums => squareNums * squareNums)
                    .reduce((acc, currVal) => acc + currVal, 0)
    });

    console.log(processNumbers([-2, 3, -1, 5, 4]));


                // Problem 5: Student Report

    const generateReport = (students) => {
        return students
                        .map(student => {
                            const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
                            return{name: student.name, average: average};
                        })
                        .filter(student => student.average >= 70)
                        .map(student => `${student.name}: ${student.average.toFixed(2)}`)
    };

    const students = [
        { name: "Ali", grades: [85, 90, 78] },
        { name: "Sara", grades: [60, 65, 70] },
        { name: "Tom", grades: [95, 92, 88] },
        { name: "Lina", grades: [50, 55, 60] }
    ];

    console.log(generateReport(students));