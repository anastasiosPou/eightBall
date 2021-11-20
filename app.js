//Import the answers in an object named answers
const answers = require('./data.js');

console.log('This is Eight-Ball. You should ask a Yes/No question.');

var prompt = require('prompt-sync')();

//Store the user's question
var userQuestion = prompt('Ask:');

//Destructure the 3 arrays with the answers for later use
const {positive: positiveAnswers, neutral: neutralAnswers, negative: negativeAnswers} = answers;

function generateRandomAnswer() {
  //Function to choose a random number
  const randomize = upperLimit => Math.floor(Math.random() * upperLimit);

  const randomNumber = randomize(3);
  let answer = '';
  let randomArray = [];

  //Choose randomly an array
  switch(randomNumber) {
    case 0:
      randomArray = positiveAnswers;
      break;
    case 1:
      randomArray = neutralAnswers;
      break;
    case 2:
      randomArray = negativeAnswers;
      break;
  }

  //We choose again a random answer from the array we've randomly chosen
  answer = randomArray[randomize(randomArray.length)];
  
  console.log(`My answer: ${answer}`);
  
}

generateRandomAnswer();