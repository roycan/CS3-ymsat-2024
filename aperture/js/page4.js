/* movie : dead poets society */
/* playlist : https://open.spotify.com/playlist/74UopC9fTtD92kLStCYupn?si=5c3a2dc8c772476d */
var songs = ['Cupid De Locke - The Smashing Pumpkins',
  'Fade Into You - Mazzy Star',
  'Catch - The Cure',
  'I Will - The Beatles',
  'Space Oddity - David Bowie',
  'Life on Mars? - David Bowie',
  'Blue Light - Mazzy Star',
  'Playground Love - Air, Gordon Tracks',
  "Lover, You Should've Come Over - Jeff Buckley",
  "I Know It's Over - The Smiths"];

function RecSong() {
  var input = document.querySelector('.songNum').value;
  var index = Number(input) - 1;
  var rec = songs[index];
  document.querySelector('.rightpane .songTitle').innerHTML = rec;
}