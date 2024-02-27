let album = document.createElement("IFRAME");
let ep = document.createElement("IFRAME");
let stageplay = document.createElement("IMG");
let thankYou = document.createElement("IMG");
let news = document.getElementById("newsproper");
news.innerHTML = "<h2>Live Action Album Dropped!</h2>" + "Still want more?<br>" + "<br>The album for the live action version of the songs just released!";

//album embed
album.setAttribute("src", "https://open.spotify.com/embed/album/02vz6Xm6j8BetyOHMLFBpE?utm_source=generator");
news.appendChild(album);

//album resizing
album.style.border="0px";
album.style.width="60%";
album.style.height="60%";
album.style.margin="20px 0px 0px 0px";


function newspopup(n) {
  switch (n) {
    case 1:
      news.innerHTML = "<h2>Live Action Album Dropped!</h2>" + "Still want more?<br>" + "<br>The album for the live action version of the songs just released!";
      news.appendChild(album);
      album.style.border="0px";
      album.style.width="60%";
      album.style.height="60%";
      album.style.margin="20px 0px 0px 0px";
      break;
    case 2:
      news.innerHTML = "<h2>Bocchi the Rock! Live Action!</h2>" + "Do you want to experience the world of Bocchi the Rock! in real life?<br>" + "<br>This August 2023, the beloved anime will hit the theaters as a stage play. The story will be retold with elements of production only unique to this play, and you will get to listen to live versions of the songs in the anime!<br>";

      //stageplay embed
      stageplay.setAttribute("src", "../images/bocchiStagePlay.png");
      news.appendChild(stageplay);

      //stageplay resizing
      stageplay.style.width="40%";
      stageplay.style.margin="20px 0px 0px 0px";
      
        break;  
    case 3:
      news.innerHTML = "<h2>New EP Dropped!</h2>" + "We will be releasing a new EP!<br>" + "<br>Into the Light will be streaming in all music platforms this May 2023! There will be two new songs which are:<br>" + "<br> - Into the Light<br>" + "- Blue Spring and Western Sky<br>";

      //ep embed
      ep.setAttribute("src", "https://open.spotify.com/embed/album/5sDC6Ant3CvtIFt6kPhGm8?utm_source=generator");
      news.appendChild(ep);

      //ep resizing
      ep.style.border="0px";
      ep.style.width="60%";
      ep.style.height="60%";
      ep.style.margin="20px 0px 0px 0px";
        break;  
    case 4:
      news.innerHTML = "<h2>Thanks for Watching!</h2>" + "This marks the end of season 1 for the Bocchi the Rock! anime. We hope you enjoyed every episode!";

      //thank you embed
      thankYou.setAttribute("src", "../images/thankYou.jpg");
      news.appendChild(thankYou);

      //thank you resizing
      thankYou.style.width="60%";
      thankYou.style.margin="20px 0px 0px 0px";
        break;  
  }
}