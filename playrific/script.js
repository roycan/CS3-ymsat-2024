/* Progress Bar */
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight)*100;
  progress.style.height = progressHeight + "%";
}

/* Guess the Number function */
function gtn(){
  var attempt = 0;
  var diff = Number(prompt("Choose a difficulty: 1, 2, 3."));
  var rNumber = 0;
  var guess = 0;
  const attemptList = [];
  /*Lets the user choose the difficulty of the game (range of numbers to guess from)*/
  if (diff==1){
    rNumber = Math.floor((Math.random()*10)+1);
    guess = Number(prompt("Guess a number between 1 and 10."));
  }
  else if (diff==2){
    rNumber = Math.floor((Math.random()*15)+1);
    guess = Number(prompt("Guess a number between 1 and 15."));
  }
  if (diff==3){
    rNumber = Math.floor((Math.random()*20)+1);
    guess = Number(prompt("Guess a number between 1 and 20."));
  }
  /*Checks if the guess is correct, too high, too low, or if the winner lost*/
  while (attempt<5){
    if (guess!=rNumber && attempt==4){
      alert("You lose, the number was " + rNumber+".");
      attemptList.push(guess);
      break;
    }
    if (guess==rNumber){
      alert("You got it!");
      attemptList.push(guess);
      attempt==5;
      break;
  }
    else if (guess>rNumber){
      alert("Too high!");
      attemptList.push(guess);
      guess = Number(prompt("Guess again."));
    }
    else if (guess<rNumber){
      alert("Too low!");
      attemptList.push(guess);
      guess = Number(prompt("Guess again."));
    }
    attempt+=1;
  }
  /*Displays the list of guesses*/
    document.getElementById("list").innerHTML = attemptList;
}


/*Rock, Paper, Scissors function*/
function rps(){
  let opp = Math.floor((Math.random()*3)+1);
  let y = prompt("Rock, paper, or scissors?").toLowerCase();
  const rps = ["rock", "paper", "scissors"];
  /*Displays the image of the randomly chosen object and the player's answer */
  pAnswer.src="../images/"+y+".jpg";
  rAnswer.src="../images/"+rps[opp-1]+".jpg";
  rAnswer.alt=rps[opp];
  /*Outputs whether the player won, loss, or tied with teh random answer */
  if (rps[opp-1]==y){
    document.getElementById("output").innerHTML="It's a tie!";
  }
  else if ((rps[opp-1]=="rock" && y=="paper")|| (rps[opp-1]=="paper" && y=="scissors") || (rps[opp-1]=="scissors" && y=="rock")){
    document.getElementById("output").innerHTML="You win! :DDDD";
  }
  else{
    document.getElementById("output").innerHTML="You lose! >:(((";
  }
}