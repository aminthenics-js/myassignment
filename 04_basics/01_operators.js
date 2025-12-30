

                   // Problem 1: Basic AND/OR Operations

    function canDrive(age, hasLicense){
        return age >= 18 && hasLicense;
    }

        console.log(canDrive(16, true));
        console.log(canDrive(20, false));
        console.log(canDrive(25, true));
    





                // Problem 2: OR for Default Values

    
    const greetUser = (name) => {
        const finalName = name || "Guest";
        return `Hello, ${finalName}!`;
    };

    console.log(greetUser("Alice"));
    console.log(greetUser(""));
    console.log(greetUser(null));
    





                // Problem 3: NOT Operator

    const isNotTeenager = (age) => {
        return !(age >= 13 && age <= 19);
    }

    console.log(isNotTeenager(10));  
    console.log(isNotTeenager(15));  
    console.log(isNotTeenager(25));






                // Problem 4: Basic Ternary

    function getTicketPrice(age){
        let price;
        if(age < 18){
            price = 10;
        } else {
            price = 20;
        }
        return price;
    }

    const getTicketPriceTernary = (age) => age < 18 ? 10 : 20;
    console.log(getTicketPriceTernary(15));
    console.log(getTicketPriceTernary(30));
    





                    // Problem 5: Nested Ternary

    function getGradeFunction(score){
        if(score >= 90 && score <= 100){
        return "A";
     } else if (score >= 80 && score <= 89){
        return "B";
     } else if(score >= 70 && score <= 79){
        return "C";
     } else if(score >= 60 && score <= 69){
        return "D";
     } else {
        return "F"
     }
  }

    const getGrade = (score) => 
        score >= 90 ? 'A' :
        score >= 80 ? 'B' :
        score >= 70 ? 'C' :
        score >= 60 ? 'D' :
        'F';

    console.log(getGrade(95));
    console.log(getGrade(85));
    console.log(getGrade(55));
    




                        // Problem 6: Nullish Coalescing Operator (??)

    const defaultValueOR = (value) => {
        return value || "default";
    };

    const defaultValueNullish = (value) => {
        return value ?? "default"
    };

    console.log(defaultValueOR(0));        
    console.log(defaultValueNullish(0));   
    console.log(defaultValueOR(""));       
    console.log(defaultValueNullish(""));






                    // Problem 7: Practical ?? Usage

    const getConfigValue = (config, key) => {
        return config[key] ?? "not set"; 
    };

    const config = {
        theme : "dark",
        volume : 0,
        username : null,
        notifications : ""
    };

    
    console.log(getConfigValue(config, "theme"));       
    console.log(getConfigValue(config, "volume"));     
    console.log(getConfigValue(config, "username"));    
    console.log(getConfigValue(config, "notifications"));
    console.log(getConfigValue(config, "nonexistent")); 






                // Part 4: Switch Statement (basic)

    function getDayType(day){
        if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
            return "Weekday";
        } else if(day === "Saturday" || day === "Sunday"){
            return "Weekend";
        } else {
            "Invalid day";
        }
    }

    const getDayTypeSwitch = (day) => {
        switch(day){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                return "Weekday";

            case "Saturday":
            case "Sunday":
                return "Weekend";

            default:
                return "Invalid day";
        }};

    console.log(getDayTypeSwitch("Monday"));   
    console.log(getDayTypeSwitch("Sunday"));   
    console.log(getDayTypeSwitch("Funday")); 






                // Problem 9: Switch with Multiple Cases

    const getSeason = (month) => {
        switch(month){
            case 12:
            case 1:
            case 2:
                return "Winter";

            case 3:
            case 4:
            case 5:
                return "Spring";

            case 6:
            case 7:
            case 8:
                return "Summer";

            case 9:
            case 10:
            case 11:
                return "Autumn";
            
            default:
                return "Invalid month";
        }
    };

    console.log(getSeason(1)); 
    console.log(getSeason(4));  
    console.log(getSeason(13));