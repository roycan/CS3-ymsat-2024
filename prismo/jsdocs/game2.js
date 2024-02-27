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

var score = 0;
var item = 0;
function generate() {
  document.getElementById("color").onclick = generate;
  item++;
  console.log(item);
  if (item >= 10) {
    document.getElementById("rgb").innerHTML = "Restart";
    document.getElementById("color").onclick = function reset() {
      score = 0;
      item = 0;
      scores.innerHTML = "Score: " + score + "/" + item;
      generate();
    }
  }
  scores.innerHTML = "Score: " + score + "/" + item;
  rgb.style.color = "white";
  
  randomRed = Math.floor(Math.random() * 256);
  randomGreen = Math.floor(Math.random() * 256);
  randomBlue = Math.floor(Math.random() * 256);

  var randomrgb = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

  rgb.innerHTML = `(${randomRed}, ${randomGreen}, ${randomBlue})`;

  var seed = Math.floor(Math.random() * 4) + 1;

  for (var i = 1; i < 5; i++) {
    if (i == seed) {
      document.getElementById("option"+seed).style.backgroundColor = randomrgb;
      document.getElementById("option"+seed).innerHTML = "";
      document.getElementById("option"+seed).onclick = function correct() {
          rgb.innerHTML = "Correct";
          rgb.style.color = "#00b359";
          if (item >= 10) {
            document.getElementById("rgb").innerHTML = "Restart"
            document.getElementById("color").onclick = function reset() {
              score = 0;
              item = 0;
              scores.innerHTML = "Score: " + score + "/" + item;
              scores.innerHTML = "Score: " + score + "/" + item;
              document.getElementById("option"+seed).innerHTML = "Correct";
              for (var i = 1; i < 5; i++) {
                document.getElementById("option"+i).onclick = function filler() {
                  ;
                }
              }
              generate();
            }
          } else {
            score++;
            scores.innerHTML = "Score: " + score + "/" + item;
            document.getElementById("option"+seed).innerHTML = "Correct";
            for (var i = 1; i < 5; i++) {
              document.getElementById("option"+i).onclick = function filler() {
                ;
              }
            }
          }
        }
    } else {
      randomRed = Math.floor(Math.random() * 256);
      randomGreen = Math.floor(Math.random() * 256);
      randomBlue = Math.floor(Math.random() * 256);

      var randomwrong = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

      document.getElementById("option"+i).style.backgroundColor = randomwrong;
      document.getElementById("option"+i).innerHTML = "";
      document.getElementById("option"+i).onclick = function incorrect() {
          rgb.innerHTML = "Incorrect";
          rgb.style.color = "#e63900";
          scores.innerHTML = "Score: " + score + "/" + item;
          if (item >= 10) {
            document.getElementById("rgb").innerHTML = "Restart"
            document.getElementById("color").onclick = function reset() {
              score = 0;
              item = 0;
              scores.innerHTML = "Score: " + score + "/" + item;
              generate();
            }
          } else {
            document.getElementById("option"+seed).innerHTML = "Correct";
            for (var i = 1; i < 5; i++) {
              document.getElementById("option"+i).onclick = function filler() {
                ;
              }
            }
          }
        };
    }
  }
}