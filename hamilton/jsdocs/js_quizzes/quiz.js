/*
GOALS OF CODE:
1. Loop to get all the questions.
  1.a. Get the checked value of each question.
2. Add each checked value to the score of the quiz
3. Input the score into a range that outputs a certain comment
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

  resetValues();
}
function resetValues() {
  for (let i = 0; i < quizAnswers.length; i++) {
    quizAnswers[i] = "";
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

  let correctOptionCounter = 0;

  for (let option = 0; option < numOptions; option++) {
    // loop to see if the answer matches option and update
    if (optionValues[option] == "correct") {
      correctOptionCounter = optionValueCounter[option];
    }
  }

  // say results: ONGOING

  switch (true) {
    case (correctOptionCounter<2): 
      document.getElementById(resultTargetID).innerHTML = `${correctOptionCounter}/10 <br>${resultArray[0]}`;
      break;
    case (correctOptionCounter<5): 
      document.getElementById(resultTargetID).innerHTML = `${correctOptionCounter}/10 <br>${resultArray[1]}`;
      break;
    case (correctOptionCounter<7): 
      document.getElementById(resultTargetID).innerHTML = `${correctOptionCounter}/10 <br>${resultArray[2]}`;
      break;
    case (correctOptionCounter<=10): 
      document.getElementById(resultTargetID).innerHTML = `${correctOptionCounter}/10 <br>${resultArray[3]}`;
      break;
  } 

}