function primeAndComposite(N,M,arr){
    //write code here
let prime_sum=0;  
let composite_sum=0;
for(let i=0; i<N; i++){
for(let j=0; j<M; j++){
    let result=isPrime(arr[i][j]);
if(result===true){
    prime_sum+=arr[i][j];
} else if(result===false && arr[i][j]!==1){
    composite_sum+=arr[i][j];
}
}
}
console.log(Math.abs(prime_sum-composite_sum))
}
function isPrime(n){
    if(n<=1){
        return false;
    }
for(let i=2; i<=Math.sqrt(n); i++){
    if(n%i===0){
        return false;
    }
}
return true;
}

//Problem 1: Create a function to check if a number is Prime or Not

function check_prime(a){ 
    let fact=0;
    for(let i=1; i<=a; i++){
      if(a%i==0){
        fact++;
      }
    }
    if(fact == 2){
      console.log(a,"is prime");
    }else{
      console.log("Not a Prime");
    }
    }
check_prime(17);

//Problem 2: Use the above function to print the Primes from 2 to a given limit.

function check_prime(a){ 
    let fact=0;
        for(let i=0; i<=a; i++){
      if(a%i==0){
        fact++;
      }
    }
    if(fact==2){
      return true;
    }else{
      return false;
    }
    }
      for(let i=2; i<=100; i++){
        let x=check_prime(i);
        if(x==true){
          console.log(i,"is prime");
        }  
      }
    
check_prime(100);

// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function prime(a){
    function check_prime(a){ 
  let fact=0;
  for(let i=0; i<=a; i++){
    if(a%i==0){
      fact++;
    }
  }
  if(fact==2){
    return false;
  }else{
    return true;
  }
  }
    for(let i=2; i<=15; i++){
      let x=check_prime(i);
      if(x==true){
        console.log(i,"is  prime");
      }
      else{
        console.log(i,"is not prime");
      }
    }
}
prime(15);

//sum of prime

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function sumOfFirstNPrimes(n) {
    let count = 0;
    let sum = 0;
  
    for (let currentNumber = 2; count < n; currentNumber++) {
      if (isPrime(currentNumber)) {
        sum += currentNumber;
        count++;
      }
    }
  
    return sum;
  }
  
  const numberOfPrimes = 20;
  const sumOfPrimes = sumOfFirstNPrimes(numberOfPrimes);
  console.log(`Sum of the first ${numberOfPrimes} prime numbers is: ${sumOfPrimes}`);  
  

//fabonaci
function fibonacciBruteForce(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciBruteForce(n - 1) + fibonacciBruteForce(n - 2);
  }
}

// Example usage:
const n = 10; // Calculate the 10th Fibonacci number
const result = fibonacciBruteForce(n);
console.log(result); // Outputs: 55 (the 10th Fibonacci number)

// clousre

const a = () => {
  let c = "text";
  const b = () => {
    console.log(c);
  };
  return b;
};

const b = a();

// b();

function set() {
  setTimeout(() => {
    console.log("b");
  }, 3000);
}

// set();

const checkPro = () => {
  console.log("start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("data fecth");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

// checkPro().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })

const hof = (bee) => {
  bee();
};

const been = () => {
  console.log("a");
};
// been();
// hof(been);

const newAPI = async () => {
  try {
    const response = await fetch("url");
    const data = await response.json();
    // Process 'data' here
  } catch (err) {
    console.log(err);
  }
};

const newAPIWithAxios = async () => {
  try {
    const response = await axios.get("url");
    const data = response.data;
    // Process 'data' here
    return data;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("This code will execute whether there is an error or not.");
  }
};

let animal = {
  type: "Mammal",
  sound: "Makes a noise",
};

let dog = Object.create(animal);
dog.breed = "Labrador";
// console.log(dog);

let propto = {
  noise: function () {
    console.log("Some sound");
  },
};

let proGod = Object.create(propto);
// proGod.sound="AAAAAAA"
proGod.sound = () => {
  console.log("Ahhhh");
};
// proGod.sound();
// proGod.noise();
