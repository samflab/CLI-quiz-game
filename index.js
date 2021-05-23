var readlineSync = require("readline-sync");

var score = 0, level = 1;

//welcome message, at the start of the game
function welcome(){
  var username = readlineSync.question("Give me your name! ");
  console.log("Hi",username, "! Hope you will enjoy this Lucifer quiz.");
  printLevel();
}

function printLevel(){
  console.log("**************LEVEL",level,"*********************");
}

//asks questions and checks for correct answer
function play(question, answer){
  var answerByUser = readlineSync.question(question);

  if(answerByUser.toUpperCase() === answer.toUpperCase()){
    console.log("Ding Ding! Correct answer");
    score = score + 1;
  }
  else{
    score = score - 1;
    console.log("Oopsie doopsie, wrong answer");
  }
  if(score == 5 || score == 10 || score == 15){
    level++;
    printLevel();
  }
  
  showScore();
}

//to show the score on the screen
function showScore(){
  console.log("YaY! Your score is ", score);
  console.log("--------------------------");
}

//set of questions and answers  
var questionSet = [
  {
    question: "Where is Lucifer planning his vacation? ",
    answer: "Los Angeles"
  }, 
  {
    question: "Who plays the character Lucifer on the show? ",
    answer: "Tom Ellis"
  },
  {
    question: "Lucifer owns a nightclub, what is its name? ",
    answer: "Lux"
  },
  {
    question: "Which musical instrument Lucifer plays the most? ",
    answer: "Piano"
  },
  {
    question: "Maze is short for.. ",
    answer: "Mazikeen"
  },
  {
    question: "What is Chloe Decker's daughter's name? ",
    answer: "Trixie"
  },
  {
    question: "What does Lucifer call Dan? ",
    answer: "Detective Douche"
  },
  {
    question: "What is the name of Amendial's child? ",
    answer: "Charlie"
  },
  {
    question: "Which is the mythical being from 'The Garden' comes back to Earth? ",
    answer: "Eve"
  },
  {
    question: "Who is Charlotte Richard to Lucifer? ",
    answer: "Mother"
  },
  {
    question: "What was Maze's job in the later seasons? ",
    answer: "Bounty hunter"
  },
  {
    question: "What is the actual name of Trixie? ",
    answer: "Beatrice"
  },
  {
    question: "What does Lucifer need in order for his “desire mojo” to work?",
    answer: "Eye contact"
  },
  {
    question: "What was Lucifer called before his fall? ",
    answer: "Samael"
  }
];

welcome();
for(i = 0; i < questionSet.length; i++){
  var currentQuestion = questionSet[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("WELL PLAYED!");
console.log("------------------------------");