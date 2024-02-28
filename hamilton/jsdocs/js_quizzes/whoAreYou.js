/*
GOALS OF CODE:
1. Loop to get all the questions.
  1.a. Get the checked value of each question.
2. Add each checked value to the score of the quiz
3. Input the score into a range that outputs a certain character
*/

var questionNumber = 1; //default question when page is loaded

// set and replace the questions
function setQuestions(questionTextID, optionNum, numQuestions, resultTargetID) {

  // if quiz is over, clear and display results
  if (questionNumber > numQuestions) {
document.getElementById(questionTextID).parentElement.style.display = "none";
    calculateResults(answerValues.length, 'result');

    document.getElementById(resultTargetID).style.display = "flex";
  } else {
    document.getElementById(questionTextID).innerHTML = quizQuestions[`question_${questionNumber}`]["questionText"];

    for (let option = 1; option <= optionNum; option++) {
      document.getElementById(`option_${option}`).innerHTML = quizQuestions[`question_${questionNumber}`][`option_${option}`]["optionText"];
    }
  }
}
function nextQuestion(questionTextID, optionNum, numQuestions, resultTargetID) {
  questionNumber++;
  setQuestions(questionTextID, optionNum, numQuestions, resultTargetID);
}
function reset(questionTextID, optionNum, numQuestions, resultTargetID) {
  questionNumber = 1;

  setQuestions(questionTextID, optionNum, numQuestions, resultTargetID);

  document.getElementById(questionTextID).parentElement.style.display = "block";
  document.getElementById(resultTargetID).style.display = "none";
}

function tieBreaker(modeCounter){
  if (modeCounter == 2){
    
    
  } 
  else if (modeCounter == 3) {

  } else {
    alert("This is a bug, wth");
  }
}


// calculate and show results
function getValue(selectedOption) {
  let result = quizQuestions[`question_${questionNumber}`][selectedOption]["optionValue"];
  storeResults(result);
}
function storeResults(result) {
  quizAnswers[questionNumber - 1] = result;
}
function calculateResults(numOptions, resultTargetID) { //ongoing
  let optionValues = [];
  let optionValueCounter = [];


  for (let option = 0; option < numOptions; option++) { // initialize all values 
    optionValues[option] = answerValues[option];
    optionValueCounter[option] = 0;
  }

  // count number of times a result was selected
  for (let answer = 0; answer < quizAnswers.length; answer++) {
    for (let option = 0; option < numOptions; option++) {
      // loop to see if the answer matches option and update
      if (quizAnswers[answer] == optionValues[option]) {
        optionValueCounter[option]++;
      }
    }
  }

  // say results: ONGOING
  // get the greatest and its index
  greatest = 0;
  for (let valueCount = 0; valueCount < optionValueCounter.length; valueCount++) {
    if (optionValueCounter[valueCount] > greatest) {
      greatest = optionValueCounter[valueCount];
      greatestIndex = valueCount;
    }
  }
  // check if there is only one mode or multiple
  let modeCounter = 0;
  let modes = new Array(0);

  for (let valueCount = 0; valueCount < optionValueCounter.length; valueCount++) {
    if (greatest == optionValueCounter[valueCount]) {
      modes[modeCounter] = valueCount;
      modeCounter++;
    }
  }
  // if singular, output into a switch statement
  if (modeCounter == 1) {
    switch (greatestIndex) {
      case 0: 
        document.getElementById(resultTargetID).innerHTML = resultArray[0];
        break;
      case 1: 
        document.getElementById(resultTargetID).innerHTML = resultArray[1];
        break;
      case 2: 
        document.getElementById(resultTargetID).innerHTML = resultArray[2];
        break;
      case 3: 
        document.getElementById(resultTargetID).innerHTML = resultArray[3];
        break;
    }
  } else {
    document.getElementById(resultTargetID).innerHTML = "We need to keep pushing! Let's play a tiebreaker to see who you really are...";
    tieBreaker(modeCounter);
  }
  // if multiple, output choices for the user
  
}