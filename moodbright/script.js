let mybutton = document.getElementById("top");

window.onload = function() {off()};

function off() { // default display is none
  mybutton.style.display = "none";
}

window.onscroll = function() {scroll()};

function scroll() { // scroll function; once nav bar is passed, button appears
  if (document.body.scrollTop > 490 || document.documentElement.scrollTop > 490) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunc() { // button pressed, brought to top
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // others
}




function quote() { // function for the quote generator
  var quotes = Array(
    "You found the secret holy quote; Pass this to 10 of your friends to guarantee high grades in PSHS.",
    "You're the best at being you, regardless of how cheezy it sounds!",
    "Life doesn't magically get better in a second. It's a slow and daunting process, going up step by step like a staircase, but it's all worth it because in the end, you get an amazing high-up view.",
    "Life's hard, but you feel better after getting through it because it's a testament to your strength.", 
    "Me personally, your opinion is invalid (say or imagine saying this to someone who's trying to put you down).",
    "You're going to make it. Trust us.",
    "You are the only person who can define yourself.");
  var rand = Math.floor(Math.random() * (quotes.length)); // select random index
  document.getElementById("quoteText").innerHTML = quotes[rand]; // get quote from index
}

function getFormData() {
  const form = document.getElementById('feedback');
  const formData = new FormData(form);
  const outputDiv = document.getElementById('content');
  for (let [key, value] of formData.entries()){
    console.log(`${key}: ${value} <br>`);
  }
  outputDiv.innerHTML = '<h2> Thanks for Submitting! <h2>';
  console.alert("Thanks for submitting!");
}



