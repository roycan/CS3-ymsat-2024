/*Toggling audio and icon */
var clicks = 0;
var shosty = document.getElementById("shosty");

function change() {
  switch(clicks) {
    case 0: 
      document.getElementById('volume').style.background = "url('/images/index/volume-up-fill.svg') no-repeat";
      document.getElementById('volume').style.height = "60px";
      document.getElementById('volume').style.width = "60px";
      document.getElementById('volume').style.backgroundSize = "contain";
      shosty.play();
      clicks++;
      break;

    case 1:
      document.getElementById('volume').style.background = "url('/images/index/volume-mute-fill.svg') no-repeat";
      document.getElementById('volume').style.height = "60px";
      document.getElementById('volume').style.width = "60px";
      document.getElementById('volume').style.backgroundSize = "contain";
      shosty.pause();
      clicks--;
      break;
  }
}