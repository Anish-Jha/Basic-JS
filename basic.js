const http = require('http');

// Create a server using the http module
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a basic Node.js server!');
});

const PORT = 3000; // Port number

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//with port
const express = require('express');
const app = express();

const PORT = 3000; // Port number

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, this is an Express server!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case "read":
    fs.readFile(file, "utf-8", (err, data) => {
      if (err){
        console.log(err.message);
      }else{
      console.log(data);
    }});
    break;

  case "delete":
    fs.unlink(file, (err) => {
      if (err){
        console.log(err.message);
      }else{
      console.log(`${file} was deleted`);
    }});
    break;

  case "create":
    fs.writeFile(file, "", (err) => {
      if (err){
        console.log(err.message);
      }else{
      console.log(`${file} was created`);
    }});
    break;

  case "append":
    fs.appendFile(file, content, (err) => {
      if (err){
        console.log(err.message);
      }else{
      console.log(`Content was appended to ${file}`);
    }});
    break;

  case "rename":
    const newName = process.argv[4];
    fs.rename(file, newName, (err) => {
      if (err){
        console.log(err.message);
      }else{
      console.log(`${file} was renamed to ${newName}`);
    }});
    break;

  case "list":
    fs.readdir(file, (err, files) => {
      if (err){
        console.log(err.message);
      }else{
      files.forEach((file) => console.log(file));
    }});
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}

const crypto = require("crypto");

const args = process.argv.slice(2);

const operation = args[0];
const operands = args.slice(1);

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function sub(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function mult(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function sin(a) {
  return Math.sin(parseFloat(a));
}

function cos(a) {
  return Math.cos(parseFloat(a));
}

function tan(a) {
  return Math.tan(parseFloat(a));
}

function random(size) {
  if (!size) {
    console.log("Provide length for random number generation.");
    return;
  }

  size = parseInt(size);

  const bytes = crypto.randomBytes(size);
  const result = bytes.toString("binary");

  console.log(result);
}

switch (operation) {
  case "add":
    console.log(add(operands[0], operands[1]));
    break;
  case "sub":
    console.log(sub(operands[0], operands[1]));
    break;
  case "mult":
    console.log(mult(operands[0], operands[1]));
    break;
  case "divide":
    console.log(divide(operands[0], operands[1]));
    break;
  case "sin":
    console.log(sin(operands[0]));
    break;
  case "cos":
    console.log(cos(operands[0]));
    break;
  case "tan":
    console.log(tan(operands[0]));
    break;
  case "random":
    console.log(random(operands[0]));
    break;
  default:
    console.log("Invalid operation");
    break;
}
