// HOF
function hof(callback) {
  callback();
}

// Callbackfunction
function callbackfunc() {
  console.log("Callback Called");
}
callbackfunc();
hof(callbackfunc);

// example
function mult(multiply) {
  return function (number) {
    console.log(number);
    return number * multiply;
  };
}

var double = mult(3);
console.log(double(5));

function check() {
  let x = 10;
  console.log(x);
}
check();

// Call function
function greet() {
  console.log("Hello, " + this.name + "!");
}
// greet('John')
const person = { name: "John" };
greet.call(person);

// Apply function
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet.apply(null, ["Jon", "Ram"]);

// Bind function
function greet(name) {
  console.log("Hello, " + name + "!");
}

var greetJohn = greet.bind(null, "John");
greetJohn();

greet(); // Output: "Hello"

function greet() {
  console.log("Hello");
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

async function processData() {
  console.log("Start");

  try {
    const result = await fetchData();
    console.log(result);
    console.log("Processing data");
  } catch (error) {
    console.log("Error:", error);
  }
  console.log("End");
}

processData();

function fetchData() {
  console.log("Start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating a successful operation
      if (!success) {
        resolve("Data fetched");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData().then((result) => {
    console.log(result);
    // Handle the successful result
  })
  .catch((error) => {
    console.log("Error:", error);
    // Handle the error or failure
  });

const timeoutId = setTimeout(() => {
  console.log("Delayed function execution");
}, 2000);

const intervalId = setInterval(() => {
  console.log("Repeated function execution");
}, 1000);

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((number) => number);
console.log(doubledNumbers.join(" ")); // [2, 4, 6, 8]

numbers.forEach((number) => {
  console.log(number);
});
Output: 1, 2, 3, 4;

console.log(Math.random() * 50);
