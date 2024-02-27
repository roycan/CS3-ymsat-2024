/*This is the JS code for the Infinite Matches webpage*/

/*Variables number, wins, loses, and draws are declared to be assigned to user's number of games, number of wins, number of loses, and number of draws.*/
number = 0;
wins = 0;
loses = 0;
draws = 0;
/*Game function is declared with a parameter of letter which is the user's input*/
function game(letter) {
  /*Checks if user inputted valid values (R,S,P only). If valid, code continues*/
  if (letter=="R" || letter=="S" || letter=="P"){
      /*Calls for the user function with letter(user input) as parameter*/
      user(letter);
      /*Adds 1 to number of games*/
      number++;
      /*Sets an array or set of the possible weapons for the AI and assigns to ai a random index so we can assign a random weapon for AI*/
      const images = ["r","s","p"];
      ai = images[Math.floor(Math.random()*images.length)];
       /*Makes letter lower case to avoid problems with case-sensitivity*/
      letter = letter.toLowerCase();
       /*This whole if else process is to check whether the user wins the game, or loses the game, or if it's a draw by setting result messages per possible scenario. Then adds 1 to either the draw, loses, or wins, depending on the result of game.*/
      if (ai=="r" && letter=="s"){
        document.getElementById("result").innerHTML = "You lost! Try again.";
        loses++;
      }
      else if (ai=="p" && letter=="r"){
        document.getElementById("result").innerHTML = "You lost! Try again.";
        loses++;
      }
      else if (ai=="s" && letter=="p"){
        document.getElementById("result").innerHTML = "You lost! Try again.";
        loses++;
      }
      else if (ai=="r" && letter=="p"){
        document.getElementById("result").innerHTML = "Congrats, you won!";
        wins++;
      }
      else if (ai=="p" && letter=="s"){
        document.getElementById("result").innerHTML = "Congrats, you won!";
        wins++;
      }
      else if (ai=="s" && letter=="r"){
        document.getElementById("result").innerHTML = "Congrats, you won!";
        wins++;
      }
      else{
        document.getElementById("result").innerHTML = "Draw!"
        draws++;
      }
      /*Assigns the picture that corresponds to the random weapon for the AI*/
      var image = document.getElementById("image");
      image.src="../infinite/"+ai+".png";
      /*Calls the stats function to update the user of the match's stats or details (user's number of games, wins, loses, and draws*/
      stats(number, wins, loses, draws);
    }
  /*If invalid value for letter or the user's input, there will be an alert box stating that the value is invalid*/
  else{
    alert("Invalid input. 'R', 'S', or 'P' only.")
  }
  }
/*User function is declared that has the parameter of letter which is the user's input. An image source would be assigned to "user" that would show the user's choice of weapon.*/
function user(letter){
  var user = document.getElementById("user");
  if (letter=="R"){
    user.src="../user/rock.png";
  }
  else if (letter=="P"){
    user.src="../user/paper.png";
  }   
  else{
    user.src="../user/scissors.png";
  }
}
/*Rematch function is declared that basically resets the match. Turns both the images that represents the user's weapon and the AI's weapon into the logo which is the default photo when the game has not yet started. Turns the number of games, wins, draws, and loses to 0 as well through assigning 0 to the variables and calling the stats function. It also sets an empty string to the id result so that the message would be removed.*/
function rematch(){
  var image = document.getElementById("image");
  var user = document.getElementById("user");
  image.src="../infinite/initial.png";
  user.src="../infinite/initial.png";
  number = 0;
  draws = 0;
  wins = 0;
  loses = 0;
  stats(number, wins, loses, draws);
  document.getElementById("result").innerHTML = "";
  }
/*Stats function is declared which basically assigns a string message to the id stats using the values of its parameters--number, wins, loses, and draws*/
function stats(number, wins, loses, draws){
  document.getElementById("stats").innerHTML="Number of games: "+number+"<br>Wins: "+wins+"<br>Loses: "+loses+"<br>Draws: "+draws;
}


