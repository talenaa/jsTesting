// Use console.log to print whataver you want in the console

console.log(`hello`);
console.log(`I like videogames`);
console.log('Crystal');

// Creating windows alert

/* window.alert(`java is a nightmare`);
window.alert(`programming is cool`); */

document.getElementById("intro").textContent = `hello`;
document.getElementById("paragraph").textContent = `Im a green day fan`;

/* Variable = A container that stores a value, this value can change later on, depending on the conditions or on information passed to the program
  Behaves as if it were the value it contains
*/

// The two principal steps to create a variable are:
// 1. declaration  let x;
// 2. assignment   x = 100;

// Every variable name needs to be unique.
// If we declare two variables with the same name, the console output will be an error.

let x;
x = 100;
console.log(x);

// to do both declaration and assignment at the same time, it goes something like this

let y = 443;
console.log(y);

// In the console.log we can insert declared variables with the "${}" command

let price = `5.50€`;
console.log(`The price is ${price}`);

let age = `18`;
console.log(`I am ${age} years old`);

let titles = `4`;
console.log(`Max is a ${titles} time world champion`)


