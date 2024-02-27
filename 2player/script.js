//for index

//for memory

let memoryCards = [
  "<img src='1memory images/NBA_Logos/76ERS.jpeg'>",
  "<img src='1memory images/NBA_Logos/BLAZERS.png'>",
  "<img src='1memory images/NBA_Logos/BUCKS.jpeg'>",
  "<img src='1memory images/NBA_Logos/BULLS.jpeg'>",
  "<img src='1memory images/NBA_Logos/CAVS.png'>",
  "<img src='1memory images/NBA_Logos/CELTICS.png'>",
  "<img src='1memory images/NBA_Logos/CLIPPERS.png'>",
  "<img src='1memory images/NBA_Logos/GRIZZLIES.png'>",
  "<img src='1memory images/NBA_Logos/HAWKS.jpeg'>",
  "<img src='1memory images/NBA_Logos/HEAT.png'>",
  "<img src='1memory images/NBA_Logos/HORNETS.png'>",
  "<img src='1memory images/NBA_Logos/JAZZ.png'>",
  "<img src='1memory images/NBA_Logos/KINGS.jpeg'>",
  "<img src='1memory images/NBA_Logos/KNICKS.jpeg'>",
  "<img src='1memory images/NBA_Logos/LAKERS.jpeg'>",
  "<img src='1memory images/NBA_Logos/MAGIC.jpeg'>",
  "<img src='1memory images/NBA_Logos/MAVERICKS.jpeg'>",
  "<img src='1memory images/NBA_Logos/NETS.jpeg'>",
  "<img src='1memory images/NBA_Logos/NUGGETS.jpeg'>",
  "<img src='1memory images/NBA_Logos/OKC.jpeg'>",
  "<img src='1memory images/NBA_Logos/PACERS.jpeg'>",
  "<img src='1memory images/NBA_Logos/PELICANS.jpeg'>",
  "<img src='1memory images/NBA_Logos/PISTONS.png'>",
  "<img src='1memory images/NBA_Logos/RAPTORS.png'>",
  "<img src='1memory images/NBA_Logos/ROCKETS.png'>",
  "<img src='1memory images/NBA_Logos/SPURS.png'>",
  "<img src='1memory images/NBA_Logos/SUNS.jpg'>",
  "<img src='1memory images/NBA_Logos/WARRIORS.jpeg'>",
  "<img src='1memory images/NBA_Logos/WIZARDS.png'>",
  "<img src='1memory images/NBA_Logos/WOLVES.png'>",
  "<img src='1memory images/NBA_Logos/76ERS.jpeg'>",
  "<img src='1memory images/NBA_Logos/BLAZERS.png'>",
  "<img src='1memory images/NBA_Logos/BUCKS.jpeg'>",
  "<img src='1memory images/NBA_Logos/BULLS.jpeg'>",
  "<img src='1memory images/NBA_Logos/CAVS.png'>",
  "<img src='1memory images/NBA_Logos/CELTICS.png'>",
  "<img src='1memory images/NBA_Logos/CLIPPERS.png'>",
  "<img src='1memory images/NBA_Logos/GRIZZLIES.png'>",
  "<img src='1memory images/NBA_Logos/HAWKS.jpeg'>",
  "<img src='1memory images/NBA_Logos/HEAT.png'>",
  "<img src='1memory images/NBA_Logos/HORNETS.png'>",
  "<img src='1memory images/NBA_Logos/JAZZ.png'>",
  "<img src='1memory images/NBA_Logos/KINGS.jpeg'>",
  "<img src='1memory images/NBA_Logos/KNICKS.jpeg'>",
  "<img src='1memory images/NBA_Logos/LAKERS.jpeg'>",
  "<img src='1memory images/NBA_Logos/MAGIC.jpeg'>",
  "<img src='1memory images/NBA_Logos/MAVERICKS.jpeg'>",
  "<img src='1memory images/NBA_Logos/NETS.jpeg'>",
  "<img src='1memory images/NBA_Logos/NUGGETS.jpeg'>",
  "<img src='1memory images/NBA_Logos/OKC.jpeg'>",
  "<img src='1memory images/NBA_Logos/PACERS.jpeg'>",
  "<img src='1memory images/NBA_Logos/PELICANS.jpeg'>",
  "<img src='1memory images/NBA_Logos/PISTONS.png'>",
  "<img src='1memory images/NBA_Logos/RAPTORS.png'>",
  "<img src='1memory images/NBA_Logos/ROCKETS.png'>",
  "<img src='1memory images/NBA_Logos/SPURS.png'>",
  "<img src='1memory images/NBA_Logos/SUNS.jpg'>",
  "<img src='1memory images/NBA_Logos/WARRIORS.jpeg'>",
  "<img src='1memory images/NBA_Logos/WIZARDS.png'>",
  "<img src='1memory images/NBA_Logos/WOLVES.png'>"
];
let memoryTurnCount = 0;
let memoryPressCount = 0;
let memoryFirstCardValue = 0;
let memoryFirstCardIndex = 0;
let memoryPlayerOne = 0;
let memoryPlayerTwo = 0;

function memoryShuffleArray(array) {
  let len = array.length, currentIndex;
  for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
    let randIndex = Math.floor(Math.random() * (currentIndex + 1));
    var temp = array[currentIndex];
    array[currentIndex] = array[randIndex];
    array[randIndex] = temp;
  }
}

function memoryPress(i) {
  document.getElementsByTagName("td")[i].innerHTML = memoryCards[i];
  memoryPressCount++;
  if (memoryPressCount == 1) {
    memoryFirstCardValue = memoryCards[i];
    memoryFirstCardIndex = i;
  }
  else {
    if (memoryFirstCardIndex != i) {
      let memorySecondCardIndex = i;
      setTimeout(memoryCheckMatch, 2000, memoryFirstCardValue, memoryCards[i], memoryFirstCardIndex, memorySecondCardIndex);
      memoryPressCount = 0;
      if (memoryTurnCount % 2 == 0) {
        document.getElementById("memoryPlayerTurn").innerHTML = "Player 2";
      }
      else {
        document.getElementById("memoryPlayerTurn").innerHTML = "Player 1";
      };
    }
    else {
      alert("You can't click on the same card!");
    };
  }
}

function memoryCheckMatch(card1, card2, firstIndex, secondIndex) {
  if (card1 == card2) {
    alert("card match!");
    document.getElementsByTagName("td")[firstIndex].removeAttribute("onclick");
    document.getElementsByTagName("td")[secondIndex].removeAttribute("onclick");
    if (memoryTurnCount % 2 == 0) {
      memoryPlayerOne++;
      document.getElementById("memoryScoreOne").innerHTML = memoryPlayerOne;
    }
    else {
      memoryPlayerTwo++;
      document.getElementById("memoryScoreTwo").innerHTML = memoryPlayerTwo;
    }
    console.log(memoryTurnCount);
    memoryTotalScore();
  }
  else {
    document.getElementsByTagName("td")[firstIndex].innerHTML = "<img src='1memory images/nbalogo.jpg'>";
    document.getElementsByTagName("td")[secondIndex].innerHTML = "<img src='1memory images/nbalogo.jpg'>";
    memoryTurnCount++;
    console.log(memoryTurnCount, card1, card2, firstIndex, secondIndex);
  }
}

function memoryTotalScore() {
  if ((memoryPlayerOne + memoryPlayerTwo) == 30) {
    if (memoryPlayerOne > memoryPlayerTwo) {
      alert("Player One wins with " + memoryPlayerOne + " points!")
    }
    else if (memoryPlayerTwo > memoryPlayerOne) {
      alert("Player Two wins with " + memoryPlayerTwo + " points!")
    }
    else {
      alert("It is a draw!")
    }
  };
}

function memoryNewGame() {
  memoryShuffleArray(memoryCards);
  for (i = 0; i < 60; i++) {
    document.getElementsByTagName("td")[i].innerHTML = "<img src='1memory images/nbalogo.jpg'>";
    let memoryPressStringVal = "memoryPress(" + i + ")";
    document.getElementsByTagName("td")[i].setAttribute("onclick", memoryPressStringVal);
  }
  memoryTurnCount = 0;
  memoryPressCount = 0;
  memoryPlayerOne = 0;
  memoryPlayerTwo = 0;
  document.getElementById("memoryPlayerTurn").innerHTML = "Player 1";
  document.getElementById("memoryScoreOne").innerHTML = memoryPlayerOne;
  document.getElementById("memoryScoreTwo").innerHTML = memoryPlayerTwo;
}

//30

//for pong

//for tictactoe

const tictactoeTurnChar = ['<img src="3tictactoe images/tictactoeO.png">', '<img src="3tictactoe images/tictactoeX.png">'];
let tictactoeTurnCount = 0;
let tictactoeStatus = 'ongoing';

function tictactoePress(i) {
  if (document.getElementsByTagName("td")[i].innerHTML == '' && tictactoeStatus == 'ongoing') {
    document.getElementsByTagName("td")[i].innerHTML = tictactoeTurnChar[tictactoeTurnCount % 2];
    tictactoeTurnCount++;
    setTimeout(tictactoeCheck, 1);
  }
  else if (tictactoeStatus == 'ended') {
    alert("Start a new game to keep playing!")
  }
  else {
    alert("This square is taken!");
  }
}

function tictactoeCheck() {
  if (
    //horizontal win conditions
    document.getElementsByTagName("td")[0].innerHTML == document.getElementsByTagName("td")[1].innerHTML &&
    document.getElementsByTagName("td")[0].innerHTML == document.getElementsByTagName("td")[2].innerHTML &&
    document.getElementsByTagName("td")[0].innerHTML != '' ||
    document.getElementsByTagName("td")[3].innerHTML == document.getElementsByTagName("td")[4].innerHTML &&
    document.getElementsByTagName("td")[3].innerHTML == document.getElementsByTagName("td")[5].innerHTML &&
    document.getElementsByTagName("td")[3].innerHTML != '' ||
    document.getElementsByTagName("td")[6].innerHTML == document.getElementsByTagName("td")[7].innerHTML &&
    document.getElementsByTagName("td")[6].innerHTML == document.getElementsByTagName("td")[8].innerHTML &&
    document.getElementsByTagName("td")[6].innerHTML != '' ||
    //vertical win conditions
    document.getElementsByTagName("td")[0].innerHTML == document.getElementsByTagName("td")[3].innerHTML &&
    document.getElementsByTagName("td")[0].innerHTML == document.getElementsByTagName("td")[6].innerHTML &&
    document.getElementsByTagName("td")[0].innerHTML != '' ||
    document.getElementsByTagName("td")[1].innerHTML == document.getElementsByTagName("td")[4].innerHTML &&
    document.getElementsByTagName("td")[1].innerHTML == document.getElementsByTagName("td")[7].innerHTML &&
    document.getElementsByTagName("td")[1].innerHTML != '' ||
    document.getElementsByTagName("td")[2].innerHTML == document.getElementsByTagName("td")[5].innerHTML &&
    document.getElementsByTagName("td")[2].innerHTML == document.getElementsByTagName("td")[8].innerHTML &&
    document.getElementsByTagName("td")[2].innerHTML != '' ||
    //diagonal win conditions
    document.getElementsByTagName("td")[0].innerHTML == document.getElementsByTagName("td")[4].innerHTML &&
    document.getElementsByTagName("td")[0].innerHTML == document.getElementsByTagName("td")[8].innerHTML &&
    document.getElementsByTagName("td")[0].innerHTML != '' ||
    document.getElementsByTagName("td")[2].innerHTML == document.getElementsByTagName("td")[4].innerHTML &&
    document.getElementsByTagName("td")[2].innerHTML == document.getElementsByTagName("td")[6].innerHTML &&
    document.getElementsByTagName("td")[2].innerHTML != ''
  ) {
    if (tictactoeTurnCount % 2 == 1) {
      alert("Player O wins!");
    }
    else {
      alert("Player X wins!");
    }
    tictactoeStatus = 'ended';
  }
  else if (tictactoeTurnCount == 9) {
    alert("It is a tie!");
    tictactoeStatus = 'ended';
  }
}

function tictactoeNewGame() {
  tictactoeStatus = 'ongoing';
  tictactoeTurnCount = 0;
  for (i = 0; i <= 8; i++) {
    document.getElementsByTagName("td")[i].innerHTML = '';
  }
}

function tictactoeDisplayNames() {
  const form = document.getElementById('ttt_form');
  const formData = new FormData(form);
  document.getElementById("tttPlayer1Name").innerHTML = formData.get('tttSelectPlayer1');
  document.getElementById("tttPlayer2Name").innerHTML = formData.get('tttSelectPlayer2');
}