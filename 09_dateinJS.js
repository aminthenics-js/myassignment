  // Creating Dates 
  
const currentDate = new Date();
console.log("1. Current date:", currentDate);
console.log("Type of currentDate:", typeof currentDate);


const specificDate = new Date(2025, 0, 1);
console.log("2. Specific date:", specificDate.toString());
console.log("Type of specificDate:", typeof specificDate);


const stringDate = new Date("2024-12-25");
console.log("3. String date:", stringDate.toString());
console.log("Type of stringDate:", typeof stringDate);


const componentsDate = new Date(2024, 5, 15);
console.log("4. Components date:", componentsDate.toString());
console.log("Type of componentsDate:", typeof componentsDate);


const timeStamp = Date.now()
console.log("5. Time stamp in miliseconds:", timeStamp.toString());
console.log("Type of timeStamp:", typeof timeStamp);






    // Getting Date Components

const today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime());


const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

console.log(monthNames[today.getMonth()]);





   // Formatting Dates

console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());
console.log(today.toLocaleDateString());


const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDay()).padStart(2, "0");

const formatted = `${year}-${month}-${day}`

console.log(formatted);





    //  Date Calculations

const isToday = new Date();
const newYear = new Date("2025-01-01");
const diffDaysNY = Math.ceil((newYear - isToday) / (1000 * 60 * 60 * 24));

console.log("Days until new year:", diffDaysNY);


const sevenDaysAgo = new Date(isToday.getTime() - 7 * 24 * 60 * 60 * 1000);
console.log("Date 7 days age:", sevenDaysAgo.toDateString());


const birthdayMonth = 8;
const birthday = 14;

const birthdayThisYear = new Date(isToday.getFullYear(), birthdayMonth - 1, birthday);
const birthdayNextYear = new Date(isToday.getFullYear() + 1, birthdayMonth - 1, birthday);

const nextBirthday = new Date(
    isToday < birthdayThisYear ? birthdayThisYear : birthdayNextYear
);

const diffDaysBD = Math.ceil((nextBirthday - isToday) / (1000 * 60 * 60 * 24));
console.log("Days until next birthday:", diffDaysBD);
