// ****** Code for the image buttons --> going to their corresponding pages 
document.getElementById("FrancesHa").onclick = function() {
  location.href = "/htdocs/FrancesHa/francesha.html";
};
document.getElementById("LBird").onclick = function() {
  location.href = "/htdocs/LadyB/Lady Bird.html";
};
document.getElementById("LittleW").onclick = function() {
  location.href = "/htdocs/LittleW/LittleW.html";
};
document.getElementById("Barbie").onclick = function() {
  location.href = "/htdocs/Barbie/Barbie.html";
};



// ****** Play Audio when Image button is hovered over ****** //

//////////////// For Frances Ha
var Fh = document.getElementById('FrancesHa');
var FhAudio = document.getElementById('FrancesHaAudio');
var audio1 = document.querySelectorAll('#FrancesHaAudio');

Fh.addEventListener('mouseover', function() {
  [].forEach.call(audio1, function(audio) {
    audio.volume = 0.8;
    audio.play();
  });
}, false);

Fh.addEventListener('mouseleave', function() {
  FhAudio.pause();
  FhAudio.currentTime = 0;
}, false);


//////////////// For Lady bird
var Lb = document.getElementById('LBird');
var LbAudio = document.getElementById('LBirdAudio');
var audio2 = document.querySelectorAll('#LBirdAudio');

Lb.addEventListener('mouseover', function() {
  [].forEach.call(audio2, function(audio) {
    audio.volume = 0.8;
    audio.play();
  });
}, false);

Lb.addEventListener('mouseleave', function() {
  LbAudio.pause();
  LbAudio.currentTime = 0;
}, false);


///////////////// For Little Women  
var Lw = document.getElementById('LittleW');
var LwAudio = document.getElementById('LittleWAudio');
var audio3 = document.querySelectorAll('#LittleWAudio');

Lw.addEventListener('mouseover', function() {
  [].forEach.call(audio3, function(audio) {
    audio.volume = 0.8;
    audio.play();
  });
}, false);

Lw.addEventListener('mouseleave', function() {
  LwAudio.pause();
  LwAudio.currentTime = 0;
}, false);


//////////////// For Barbie 
var Bb = document.getElementById('Barbie');
var BbAudio = document.getElementById('BarbieAudio');
var audio4 = document.querySelectorAll('#BarbieAudio');

Bb.addEventListener('mouseover', function() {
  [].forEach.call(audio4, function(audio) {
    audio.volume = 0.2;
    audio.play();
  });
}, false);

Bb.addEventListener('mouseleave', function() {
  BbAudio.pause();
  BbAudio.currentTime = 0;
}, false);