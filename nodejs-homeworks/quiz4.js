/*
1- Install the random-words Package: Use npm to install the random-words package. This package will allow you to generate random words in your Node.js program.

2- Import the random-words Package: Write code to import the random-words package into your program.
note: use ES6 import export statement, DO NOT use require()

3- Generate Random Words: Use the generate function from the random-words package to create an array containing 5 random words.
guide: https://www.npmjs.com/package/random-words

4- Convert Words to Uppercase: Iterate over the array of words and convert each word to uppercase and log it to the console.

*/
import { generate } from "random-words";
console.log(generate(5).map((word) => word.toUpperCase()));
