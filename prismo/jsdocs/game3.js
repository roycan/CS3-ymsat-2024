let bgdef = "#1E1F22"

function openNav() {
  document.getElementById("mySidenav").style.width = "18%";
  /*document.getElementById("main").style.marginLeft = "15%";*/
  document.body.style.backgroundColor = bgdef;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  /*document.getElementById("main").style.marginLeft = "0";*/
  document.body.style.backgroundColor = bgdef;
}


let mode = 0;
document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "m") {
      if (mode == 0) { 
        let targets = document.getElementsByClassName("ms");
        bgdef  = "white";

        document.getElementsByTagName("body")[0].style.background = "white";
        for (let i = 0; i < targets.length; i++) {
          targets[i].style.background = "#b3b3b3";
          targets[i].style.color = "#141f1f";
        }

        document.getElementById("mySidenav").style.background = "grey";

        targets = document.getElementsByClassName("navlink");
        for (let i = 0; i < targets.length; i++) {
          targets[i].style.color = "#141f1f";
        }

        mode = 1;
      } else {
        let targets = document.getElementsByClassName("ms");
        bgdef = "#1E1F22";

        document.getElementsByTagName("body")[0].style.background = "#1E1F22";
        for (let i = 0; i < targets.length; i++) {
          targets[i].style.background = "#383c48";
          targets[i].style.color = "white";
        }

        document.getElementById("mySidenav").style.background = "#111";

        targets = document.getElementsByClassName("navlink");
        for (let i = 0; i < targets.length; i++) {
          targets[i].style.color = "grey";
        }

        mode = 0;
      }

    }
} );

var level = 0;
var sides;
var randseed;
var ctr = 0;
var score = -1;
var timeLeft = 60;
var interval;

function countDown() {
  ctr = 0;
  timeLeft--;
  if (timeLeft >= 0) {
    if (timeLeft >= 10) {
      time.innerHTML = "0:" + timeLeft;
    } else {
      time.innerHTML = "0:0" + timeLeft;
    } 
  } else {
    const cs = document.getElementsByClassName("oddcircle");
    for (var i = 0; i < cs.length; i++) {
      cs[i].onclick = function filler() {;}
    }
    time.innerHTML = "Time's up!";
  }
  
}

function start() {
  level = 0;
  score = -1;
  ctr = 0;
  timeLeft = 60;
  time.innerHTML = "1:00";
  clearInterval(interval);
  interval = setInterval(countDown, 1000);
  newLvl();
}

function newLvl() {
  score++;
  level++;
  
  if (level >= 1 && level <= 5) {
    sides = 2;
  } else if (level >= 6 && level <= 10) {
    sides = 3;
  } else if (level >= 11 && level <= 15) {
    sides = 4;
  } else {
    sides = 5;
  }

  randseed = Math.floor(Math.random() * (sides*sides)) + 1;
  
  circles.innerHTML = "";
  for (var i = 0; i < sides; i++) {
    for (var j = 0; j < sides; j++) {
      ctr++;
      if (ctr == randseed) {
        circles.innerHTML += "<span class='oddcircle' onclick='newLvl()'></span>&nbsp;&nbsp;";
      } else {
        circles.innerHTML += "<span class='circle' onclick='gameOver()'></span>&nbsp;&nbsp;";
      }
    }
    circles.innerHTML += "<br><br>";
  }
  
  randomRed = Math.floor(Math.random() * 256);
  randomGreen = Math.floor(Math.random() * 256);
  randomBlue = Math.floor(Math.random() * 256);

  var rgbchange = 255 - (level * 10);
  if (rgbchange > 100) {
    rgbchange = 100;
  } else if (rgbchange < 50) {
    rgbchange = 50;
  }

  console.log(rgbchange);
  
  
  var oddRed, oddGreen, oddBlue;
  oddRed = randomRed + rgbchange;
  if (oddRed < 0) {
    oddRed = 0;
  } else if (oddRed > 255) {
    oddRed = 255;
  }
  oddGreen = randomGreen + rgbchange;
  if (oddGreen < 0) {
    oddGreen = 0;
  } else if (oddGreen > 255) {
    oddGreen = 255;
  }
  oddBlue = randomBlue + rgbchange;
  if (oddBlue < 0) {
    oddBlue = 0;
  } else if (oddBlue > 255) {
    oddBlue = 255;
  }

  var randomrgb = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  console.log(randomrgb);
  var oddrgb = `rgb(${oddRed}, ${oddGreen}, ${oddBlue})`;
  console.log(oddrgb);

  const c = document.getElementsByClassName("circle");
  for (let i = 0; i < c.length; i++) {
    c[i].style.backgroundColor = randomrgb;
  }

  document.getElementsByClassName("oddcircle")[0].style.backgroundColor = oddrgb;

  document.getElementById("score").style.color = randomrgb;
  document.getElementById("score").innerHTML = "Score: " + score;
  /*document.body.style.color = randomrgb;
  head.style.color = randomrgb;
  foot.style.color = randomrgb;*/

  ctr = 0;
}

function gameOver() {
  ;
}