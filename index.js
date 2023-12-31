//clousre
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // Inner function accessing outerVariable
  }

  return innerFunction; // Return the inner function from the outer function
}

const myFunction = outerFunction(); // Call outerFunction and store the returned inner function

// Even though outerFunction has finished executing,
// myFunction still remembers the outerVariable due to closure
myFunction(); // Outputs: "I am from the outer function"


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
const guy = { name: "John" };
greet.call(guy);

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
      if (success) {
        resolve("Data fetched");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then((result) => {
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

// Constructor function with methods and properties
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Creating instances with 'new' keyword
let myCar = new Car('Toyota', 'Corolla', 2020);
let yourCar = new Car('Honda', 'Accord', 2018);

let animal = {
  type: 'Mammal',
  sound: 'Makes a noise'
};

let dog = Object.create(animal);
dog.breed = 'Labrador';

// Using ES6 class syntax
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(5, 10);


function BankAccount() {
  this.balance = 0;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = function (amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
  };
}
const account = new BankAccount();
console.log(account.balance); // Output: 0

account.deposit(100);
console.log(account.balance); // Output: 100

account.withdraw(50);
console.log(account.balance); // Output: 50

account.withdraw(70); // Throws an error: Insufficient balance

// checking object property

const person = {
  name: "John",
  age: 30,
};

// Using hasOwnProperty()
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("address")); // Output: false

// Using the 'in' operator
console.log("name" in person); // Output: true
console.log("address" in person); // Output: false

//getting object property
const person1 = {
  name: "John",
  age: 30,
};

// Using dot notation
console.log(person1.name); // Output: "John"
console.log(person1.age); // Output: 30

// Using square bracket notation
console.log(person1["name"]); // Output: "John"
console.log(person1["age"]); // Output: 30


//prototyples inheritance
// Parent object (prototype)
let animal2 = {
  makeSound: function() {
    console.log('Some generic sound');
  }
};

// Child object inheriting from the parent
let dog = Object.create(animal2);
dog.breed = 'Labrador';

// Adding a method to the child object
dog.bark = function() {
  console.log('Woof!');
};

// Using properties and methods from the prototype
dog.makeSound(); // Outputs: 'Some generic sound'
dog.bark(); // Outputs: 'Woof!'


// Memoization
function expensiveFunction(n) {
  console.log("Computing...");
  // Simulating a time-consuming calculation
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

// Function with memoization
const memoizedFunction = (function () {
  const cache = {}; // Cache to store computed results

  return function (n) {
    if (n in cache) {
      // Return the cached result if available
      return cache[n];
    } else {
      // Compute and cache the result
      const result = expensiveFunction(n);
      cache[n] = result;
      return result;
    }
  };
})();

console.log(memoizedFunction(5)); // Output: Computing... 15
console.log(memoizedFunction(5)); // Output: 15 (result fetched from cache)

// Login MVC pattern react

function LoginForm({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}


// MongoDB

"create Index"=db.collection.createIndex({ field: 1 });

"sort"=db.collection.find().sort({ field: 1 });

// Insert a single document
db.collectionName.insert({ key: value });

// Insert multiple documents
db.collectionName.insertMany([
  { key1: value1 },
  { key2: value2 },
  { key3: value3 }
]);

// Update a single document
db.collectionName.updateOne({ filter }, { $set: { key: value } });

// Update multiple documents
db.collectionName.updateMany({ filter }, { $set: { key: value } });

// Delete a single document
db.collectionName.deleteOne({ filter });

// Delete multiple documents
db.collectionName.deleteMany({ filter });

//Increase: The $inc operator is used to increment a numeric field in a document.
db.collectionName.updateOne({ filter }, { $inc: { field: value } });

//Decrease: The $inc operator can also be used to decrement a numeric field in a document.
db.collectionName.updateOne({ filter }, { $inc: { field: -value } });

// Find all documents
db.collectionName.find();

// Find documents matching a filter
db.collectionName.find({ key: value });

// Find documents with specific fields
db.collectionName.find({}, { field1: 1, field2: 1 });

// Find a single document
db.collectionName.findOne({ key: value });

//Aggregation: MongoDB provides the Aggregation Framework for performing advanced data analysis and transformation operations.
db.collectionName.aggregate([
  { $match: { key: value } },
  { $group: { _id: "$field", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 5 }
]);

//Indexing: MongoDB supports indexing to improve query performance.
// Create an index on a field
db.collectionName.createIndex({ field: 1 });

// Query using an index
db.collectionName.find({ field: value }).hint({ field: 1 });




