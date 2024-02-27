var randomRed, randomGreen, randomBlue;
var redR, greenR, blueR;

function newcolor() {
  randomRed = Math.floor(Math.random() * 256);
  randomGreen = Math.floor(Math.random() * 256);
  randomBlue = Math.floor(Math.random() * 256);

  var randomrgb = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  console.log(randomrgb);

  txt.style.color = randomrgb;
}


function percent(r1, r2, g1, g2, b1, b2) {
  var diffR, diffG, diffB;
  percentt = 0;

  diffR = (255 - Math.abs(r1 - r2)) / 255 * 0.33;
  diffG = (255 - Math.abs(g1 - g2)) / 255 * 0.33;
  diffB = (255 - Math.abs(b1 - b2)) / 255 * 0.34;

  percentt = ((diffR + diffG + diffB)*100);
  if (isNaN(percentt)) {
    diffR = (255 - Math.abs(r1 - 255)) / 255 * 0.33;
    diffG = (255 - Math.abs(g1 - 255)) / 255 * 0.33;
    diffB = (255 - Math.abs(b1 - 255)) / 255 * 0.34;
    percentt = ((diffR + diffG + diffB)*100);
  }
  percentage.innerHTML = percentt.toFixed(2) + '%';
}

function change() {
  redR = red.value;
  redRC = 255 - parseInt(redR);
  redval.innerHTML = "R: " + redR;
  greenR = green.value;
  greenRC = 255 - parseInt(greenR);
  greenval.innerHTML = "G: " + greenR;
  blueR = blue.value;
  blueRC = 255 - parseInt(blueR);
  blueval.innerHTML = "B: " + blueR;

  var rgb = `rgb(${redR}, ${greenR}, ${blueR})`;
  var rgbc = `rgb(${redRC}, ${greenRC}, ${blueRC})`;

  bgc.style.background = rgb;
  document.body.style.color = rgb;
  head.style.color = rgbc;
  foot.style.color = rgbc;
}

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