
var clicks = 0;
var i = 0;
var txt = 'Bloody Sunday truly was a tumultuous day.';
var speed = 50;


function introduction() {
  document.getElementById("preludeText").style.opacity = 1;
  setTimeout(preludeFadeOut,3000);
  setTimeout(typing, 6000);
  setTimeout(websiteFadeIn, 9000)
}

function preludeFadeOut() {
  document.getElementById("preludeText").style.opacity = 0;
}

function websiteFadeIn() {
  document.getElementById("actualWebsite").style.opacity = 1;
}

function typing() {
  document.getElementById("sundayText").style.opacity = 1;
  if (i < txt.length) {
      document.getElementById("sundayText").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typing, speed);
  }
}
