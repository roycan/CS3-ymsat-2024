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
