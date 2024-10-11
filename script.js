//Part 1: Declaring and Invoking Functions
function greet(name) {
  console.log("Hello " + name);
}

greet("Sam");

//Bonus Challenge 1 - Modification
greet(' - Note: only the "Hello" displays when no parameter is given');

//Part 2: Working with Parameters and Returning Values

function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(5, 15);

//Part 3: Function Scope
let x = 10;

function changeValue() {
  let x = 5;
  console.log("Variable x from within the function scope = " + x);
}

changeValue();

//global variable comparison
console.log("Global variable x = " + x);

//Part 4: Closures
function outerFunction() {
  let count = 0;

  function innerFunction() {
    count += 1;
    console.log(count);
  }
  return innerFunction;
}

let closure = outerFunction();
closure();

//Bonus challenge 2

function mainFunction() {
  let blue = true;

  function childFunction() {
    blue = false;
    console.log(blue);
  }
  return childFunction;
}

let returnOpposite = mainFunction();
returnOpposite();
