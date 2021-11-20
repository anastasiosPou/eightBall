//Import the answers in an object named answers
const answers = require('./data.js');

console.log('This is Eight-Ball. You should ask a Yes/No question.');

// //Capture the user's question
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

// let userQuestion = '';
  
// readline.question(`Ask me anything:`, question => {
//   userQuestion = question;
//   readline.close();
// });

// console.log(`The question was -> ${userQuestion}`);
var prompt = require('prompt-sync')();

var userQuestion = prompt('Ask:');
console.log(`You asked: ${userQuestion}`);