/*
1- Install the moment Package: Use npm to install the moment package, which provides utilities for working with dates and times in Node.js.

2- Import the moment Package: Write code to import the moment package into your program.

3- Parse a Date: Use the moment function to parse the date. e.g. "2024-01-14".

4- Calculate Time from Now: Use the .fromNow() method on the parsed date to calculate how much time has passed since or will pass until "2024-01-14" relative to the current date.

5- Print the Result: Log the result to the console.

guide: https://momentjs.com/docs/#/displaying/fromnow/
*/
import moment from "moment";
const day = moment("2024-01-14").fromNow();
console.log(day);
