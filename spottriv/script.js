//Array that contains the song lyrics.
const jazz = ["dont", "you", "notice", "how", "i", "get", "quiet", "when", "theres", "no", "one", "else", "around", "me", "and", "you", "and", "awkward", "silence", "dont", "you", "dare", "look", "at", "me", "that", "way", "i", "dont", "need", "reminders", "of", "how", "you", "dont", "feel", "the", "same", "oh", "the", "burning", "pain", "listening", "to", "you", "harp", "on", "bout", "some", "new", "soulmate", "shes", "so", "perfect", "blah", "blah", "blah", "oh", "how", "i", "wish", "youll", "wake", "up", "one", "day", "run", "to", "me", "confess", "your", "love", "at", "least", "just", "let", "me", "say", "that", "when", "i", "talk", "to", "you", "oh", "cupid", "walks", "right", "through", "and", "shoots", "an", "arrow", "through", "my", "heart", "and", "i", "sound", "like", "aloon", "but", "dont", "you", "feel", "it", "too", "confess", "i", "loved", "you", "from", "the", "start", "whats", "a", "girl", "to", "do", "lying", "on", "my", "bed", "staring", "into", "the", "bluе", "unrequited", "terrifying", "lovе", "is", "driving", "me", "a", "bit", "insane", "have", "to", "get", "this", "off", "my", "chest", "im", "telling", "you", "today"]

var country = "theres something about the way the street looks when its just rained theres a glow off the pavement you walk me to the car and you know i wanna ask you to dance right there in the middle of the parking lot yeah oh yeah were driving down the road i wonder if you know im trying so hard not to get caught up now but youre just so cool run your hands through your hair absent mindedly making me want you and i dont know how it gets better than this you take my hand and drag me head first fearless and i dont know why but with you id dance in a storm in my best dress fearless so baby drive slow til we run out of road in this one horse town i wanna stay right here in this passengers seat you put your eyes on me in this moment now capture it remember it cause i dont know how it gets better than this you take my hand and drag me head first fearless and i dont know why but with you id dance in a storm in my best dress fearless well you stood there with me in the doorway my hands shake im not usually this way but you pull me in and im a little more brave its the first kiss its flawless really something its fearless oh yeah cause i dont know how it gets better than this you take my hand and drag me head first fearless and i dont know why but with you id dance in a storm in my best dress fearless cause i dont know how it gets better than this you take my hand and drag me head first fearless and i dont know why but with you id dance in a storm in my best dress fearless oh oh oh yeah"

var alternative = "shes got her own trajectory it leaves my heart eleven degrees i feel her eyes reflecting me i see her lifestyle affecting me when i go round i lose a night she tends to obfuscate when its black and white its like she puts love to the back of her mind then rips it out again when shes back at mine she says oxygens overrated i dont even need to breathe shes got a tank full of highs and a mind that never sleeps i loved you then i love you now so make me laugh for an hour then rip me off high as a cloud leave that taste in my mouth she says oxygens overrated i dont even need to breathe shes got a tank full of highs and a mind that never sleeps"

country = country.split(" ");
alternative = alternative.split(" ");
var score = 0;
var lyric = [];

//This function is the starting code for the quiz, it first sets the playing field with a blank table. Afterwards it starts the timer for 10 mins.
function Start(genre) {

  document.getElementById("start").disabled = true;
  var lyricNumber = 0;
  var cellId = "1";
  var rowNumber = "row1";
  var Length = 0;

  switch (genre) {
    case "jazz":
      Length = jazz.length;
      lyric = jazz;
      break;

    case "country":
      Length = country.length;
      lyric = country;
      break;

    case "alternative":
      Length = alternative.length;
      lyric = alternative;
      break;
  }

  document.getElementById("scoreboard").innerHTML = "Score:";
  document.getElementById("score").innerHTML = score;
  document.getElementById("total").innerHTML = "/" + Length;

  //This is the looping code that creates the empty table based on the number of lyrics.
  while (Length > 0) {
    //Changes the row to avoid overflow in a normal sized window.
    switch (lyricNumber) {
      case 32:
        rowNumber = "row2";
        break;
      case 64:
        rowNumber = "row3";
        break;
      case 96:
        rowNumber = "row4";
        break;
      case 128:
        rowNumber = "row5";
        break;
      case 160:
        rowNumber = "row6";
        break;
      case 192:
        rowNumber = "row7";
        break;
      case 224:
        rowNumber = "row8";
        break;
      case 256:
        rowNumber = "row9";
        break;
      case 288:
        rowNumber = "row10";
        break;
      case 320:
        rowNumber = "row11";
        break;

    }
    //Creates the empty table cells.
    var cell = document.createElement('td');
    document.getElementById(rowNumber).appendChild(cell);
    cell.id = cellId;
    document.getElementById(cellId).style.background = "orange";
    document.getElementById(cellId).style.padding = "10px 20px";
    lyricNumber = lyricNumber + 1;
    cellId = cellId + 1;
    Length = Length - 1;

  }

  //This code starts the timer and sets the time to 10 minutes.
  var TimeMin = 10;
  setTimeout(Timer, 0);

  //This function executes the Countdown function at an interval.
  function Timer() {

    var TimeSec = 59;
    var x = setInterval(Countdown, 1000);

    //This function controls the seconds and minutes part of the timer.
    function Countdown() {

      if (TimeMin == 10)
        document.getElementById("minutes").innerHTML = 9;
      //Updates the seconds part of the timer.
      document.getElementById("seconds").innerHTML = TimeSec;
      TimeSec = TimeSec - 1;

      //This code checks if the seconds has reached zero, if true it will subtract one from the minutes part and reset the seconds part to 59.
      if (TimeSec < 0) {
        clearInterval(x);
        TimeMin = TimeMin - 1;
        document.getElementById("minutes").innerHTML = TimeMin;
        if (TimeMin > 0)
          Timer();
        else {
          alert("Time's up!");
          document.getElementById("enter").disabled = true;
        }
      }
    }
  }
}


//This function checks the user input if it matches the lyrics in the set song it will display the lyric in the table.
function Quiz(Input) {
  var lyricLength = lyric.length;
  var lyricNumber = 0;
  var cellId = "1";

  //Traverses the array to check it if the input matches any of the lyrics.
  while (lyricLength > 0) {

    if (Input == lyric[lyricNumber]) {
      //outputs the matched lyrics onto the table.
      document.getElementById(cellId).innerHTML = lyric[lyricNumber];
      document.getElementById(cellId).style.padding = "0px 5px";
      score = score + 1;
      document.getElementById("score").innerHTML = score;
    }

    else {
    }

    lyricNumber = lyricNumber + 1;
    cellId = cellId + 1;
    lyricLength = lyricLength - 1;

  }
}

//About Us and Mechanics Collapsibles
let collapse = document.getElementsByClassName("coll");
var i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let abtus = this.nextElementSibling;
    if (abtus.style.maxHeight){
      abtus.style.maxHeight = null;
    } else {
      abtus.style.maxHeight = abtus.scrollHeight + "px";
    } 
  });
}