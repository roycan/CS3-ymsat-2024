var groupNumber = 1;
var audio = new Audio();

/* This plays specific audio files. */
function playAudio(audioNumber) {
  if (audioNumber == 1) {audio.src = "../audio/HY_TECH.mp3";}
  if (audioNumber == 2) {audio.src = "../audio/scroll.mp3";}
  if (audioNumber == 3) {audio.src = "../audio/rune.mp3";}
  audio.play();
}

/* This changes the picture to the next one in the sequence and stops at 4. */
function next() {
  if (groupNumber<4) {
    groupNumber++;
    amiiboPicture.src = "../images/amiiboGuides/amiiboGuide" + groupNumber + ".png";
    amiiboNumber.innerHTML = groupNumber;
    audio.src = "../audio/rune.mp3";
  }
  else {
    audio.src = "../audio/stop.mp3";
  }
  audio.play();
}

/* This changes the picture to the previous one in the sequence and stops at 1. */
function back() {
  if (groupNumber>1) {
    groupNumber--;
    amiiboPicture.src = "../images/amiiboGuides/amiiboGuide" + groupNumber + ".png";
    amiiboNumber.innerHTML = groupNumber;
    audio.src = "../audio/rune.mp3";
  }
  else {
    audio.src = "../audio/stop.mp3";
  }
  audio.play();
}