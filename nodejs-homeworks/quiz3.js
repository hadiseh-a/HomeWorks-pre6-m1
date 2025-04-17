/*
1- Write code to import and log the contents of a JSON file named data.json.

2- Implement a function named login that accepts two parameters, username and password. Inside this function, search the imported JSON data for a user object where both the username and password match the provided arguments.

3- Modify the login function to return the matched user object if the credentials are correct. If no match is found, return a message indicating "email or password incorrect."

4- Write code to access the username and password from the command-line arguments passed when running the script.
hint: process.argv

5- Use the command-line arguments as inputs to the login function and log the result to the console.
*/
const data = require("./data.json");
console.log(data);
function login(username, password) {
  const person = data.find(
    (person) => person.username === username && person.password === password
  );
  if (person) return person;
  else return "email or password incorrect";
}

console.log(login(process.argv[2], process.argv[3]));
