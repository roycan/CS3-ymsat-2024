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

const values = [[" ", " ", " ", " "],
                [" ", " ", " ", " "], 
                [" ", " ", " ", " "], 
                [" ", " ", " ", " "]]

function updateBox() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var cur_box = document.getElementById("box"+i+j);
      cur_box.innerHTML = values[i][j];
      switch (values[i][j]) {
        case "2":
          cur_box.style.background = "#ff5c33";
          break;
        case "4":
          cur_box.style.background = "#ff3333";
          break;
        default:
          cur_box.style.background = "#1E1F22";
      }
    }
  }

  console.log(values);
}

function startGame() {
  var temp_r, temp_c;
  for (var i = 0; i < 2; i++) {
    var rand_r = Math.floor(Math.random() * 3);
    var rand_c = Math.floor(Math.random() * 3);
    if (i == 0) {
      temp_r = rand_r;
      temp_c = rand_c;
    } else {
      while (rand_r == temp_r && rand_c == temp_c) {
        rand_r = Math.floor(Math.random() * 3);
        rand_c = Math.floor(Math.random() * 3);
      }
    }
    values[rand_r][rand_c] = "2";
  }
  updateBox();
}

function left() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (values[i][j] == " ") {
        ;
      } else {
        if (values[i][0] == " ") {          
          values[i][0] = values[i][j];
          values[i][j] = " ";
        } else if (values[i][0] == values[i][j]) {
          values[i][0] = (parseInt(values[i][0]) * parseInt(values[i][j])).toString();
          console.log(values[i][0]);
          values[i][j] = " ";
        } else if (values[i][1] == " ") {
          values[i][1] = values[i][j]; 
          values[i][j] = " ";
        } else if (values[i][1] == values[i][j]) {
          values[i][1] = (parseInt(values[i][1]) * parseInt(values[i][j])).toString();
          console.log(values[i][1]);
          values[i][j] = " ";
        } else if (values[i][2] == " ") {
          values[i][2] = values[i][j];
          values[i][j] = " ";
        } else if (values[i][2] == values[i][j]) {
          values[i][2] = (parseInt(values[i][2]) * parseInt(values[i][j])).toString();
          console.log(values[i][2]);
          values[i][j] = " ";
        } else if (values[i][3] == " ") {
          values[i][3] = values[i][j];
        }
      }
    }
  }
}

function down() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (values[i][j] == " ") {
        ;
      } else {
        if (values[3][j] == " ") {          
          values[3][j] = values[i][j];
          values[i][j] = " ";
        } else if (values[2][j] == " ") {
          values[2][j] = values[i][j]; 
          values[i][j] = " ";
        } else if (values[1][j] == " ") {
          values[1][j] = values[i][j];
          values[i][j] = " ";
        } else if (values[0][j] == " ") {
          values[0][j] = values[i][j];
        }
      }
    }
  }
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
      down();
    }
    else if (e.keyCode == '37') {
       left();
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

    updateBox();

}