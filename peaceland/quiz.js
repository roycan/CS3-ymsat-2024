/* Toggling audio and icon */
var clicksVolume = 0;
var shosty = document.getElementById("shosty");

function change() {
  switch(clicksVolume) {
    case 0: 
      document.getElementById('volume').style.background = "url('/images/index/volume-up-fill.svg') no-repeat";
      document.getElementById('volume').style.height = "60px";
      document.getElementById('volume').style.width = "60px";
      document.getElementById('volume').style.backgroundSize = "contain";
      shosty.play();
      clicksVolume++;
      break;

    case 1:
      document.getElementById('volume').style.background = "url('/images/index/volume-mute-fill.svg') no-repeat";
      document.getElementById('volume').style.height = "60px";
      document.getElementById('volume').style.width = "60px";
      document.getElementById('volume').style.backgroundSize = "contain";
      shosty.pause();
      clicksVolume--;
      break;
  }
}

var answerKey = {
  q1: "Nicholas II",
  q2: "St. Petersburg",
  q3: "April Theses",
  q4: "Leon Trotsky",
  q5: "killed",
  q6: "Duma",
  q7: "Lavr Kornilov",
  q8: "N",
  q9: "Socialism",
  q10: "Treaty of Brest-Litovsk"
}

function check() {
  var formData = new FormData(document.getElementById("quiz"));
  var answers = new Array(10); 
  var correctCount = 0;

  for (i = 0; i < answers.length; i++) {
    answers[i] = formData.get("q"+(i+1));
    if (answers[i] == answerKey["q"+(i+1)]) {correctCount++;}
  }
  alert("Your score is: " + correctCount);
}

