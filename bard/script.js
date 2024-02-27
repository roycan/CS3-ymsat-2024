/* 
  do not forget to add comments and follow good coding standards 
*/

// fucntion that gets triggered during an onclick event, this provides information about each band member

const info = document.getElementById("info")
let infoClicked = "none";

// function that closes the information provided

function infoClose() {
  infoClicked = "none";
  info.style.backgroundColor = "#333333";
  info.innerHTML = "";
}


function infoKita() {
  if (infoClicked == "Kita") {
    infoClose();
    return;
  }
  infoClicked = "Kita";
  
  info.innerHTML = "<h2>Kita Ikuyo</h2>" + "Kita Iyuko! Her charisma as Kessoku Band's lead vocalist and rhythm guitarist pours through more than just her songs and into the lives of those around her! An inside joke among the band is 'Kita Aura!', her sheer giddy and jolly is said to manifest in a bright aura around her, often blinding those near her! Initially joining the band by lying about her skills with the guitar, she instantly left as she couldn't fake it anymore! However, after getting into contact with Hitori 'Bocchi' Gotoh, she says her apologies to the band and rejoins. Under Bocchi's wing, Kita practices day and night with the guitar and becomes good enough to be their rhythm guitarist. Along with that, with her natural talent for singing, she becomes the face of the band as their lead vocalist! Meet Ikuyo Kita, Kessoku Band's lead vocalist and rhythm guitarist!";
  info.style.backgroundColor = "#D0574E";
}
function infoRyo() {
  if (infoClicked == "Ryo") {
    infoClose();
    return;
  }
  infoClicked = "Ryo";
  
  info.innerHTML = "<h2>Ryo Yamada</h2>" + "Ryo Yamada is the mastermind behind Kessoku Band's melodies as the bassist and composer. Her prowess in both fields is evident, as the distinct beats in their songs are the perfect accompaniment to the lyrics Hitori Gotoh writes. However, Kessoku Band was not her first band; she used to be in another band yet she left because she believed the band was losing their identity. She believes that a band without an identity is not a band at all. On top of that, her goofball humor keeps the energy high, as she loves playfully messing with everyone around her. Now, here's the kicker—she may come from a loaded family, but every dime she gets her hands on vanishes into her instrument obsession, often leading her to seek financial assistance from friends and occasionally resorting to eating grass. Allow us to introduce Ryo Yamada, the bassist and composer of Kessoku Band!";
  info.style.backgroundColor = "#4061A0";
}
function infoBocchi() {
  if (infoClicked == "Bocchi") {
    infoClose();
    return;
  }
  infoClicked = "Bocchi";
  
  info.innerHTML = "<h2>Hitori Gotoh</h2>" + "Hitori Goto, also known online as hit musical YouTube sensation GuitarHero or Bocchi by her bandmates. No matter what name she's under, her superb guitar skills as the lead guitarist always shine! She started guitar for weird reasons, but through passion and dedication, she has become a terrifying guitarist in only 3 years! Her unique and electrifying solos can rile up any crowd! Not only is she the mind behind Kessoku Band's renowned riffs, but also the genius behind the band's unique lyrics. She puts all her feelings and passions in every stanza she writes, resulting in the offbeat but soul-touching lyrics the band is known for. Don't let her skills deceive you though, despite all her impressive feats, she is self-proclaimed to be horrible at socializing and is an A-list introvert! This is Hitori Gotoh, lead guitarist and lyricist of Kessoku Band!";
  info.style.backgroundColor = "#EEB8C4";
}
function infoNijika() {
  if (infoClicked == "Nijika") {
    infoClose();
    return;
  }
  infoClicked = "Nijika";
  
  info.innerHTML = "<h2>Nijika Ijichi</h2>" + "Nijika Ijichi, leader and drummer of Kessoku Band! As both the leader and drummer, she is in charge of guiding the band not only during their performances but also through all other aspects of being a band. She is usually the glue of the band, bringing not only the music but the band together through her kindness and understanding. Her easygoing yet rigid tempo makes it easy for the band to follow during their electric performances. Despite having a sad backstory and only living with her sister, she remains motivated by her dreams and aspirations, and is always willing to help those around her. This is Nijika Ijichi, leader and drummer of Kessoku Band!";
  info.style.backgroundColor = "#E6D47B";
}

