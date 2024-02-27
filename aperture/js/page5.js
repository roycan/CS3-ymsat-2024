/* movie : 10 things */
/* playlist : https://open.spotify.com/playlist/51EP4aJ3LuX8dlrF7xoTF8?si=5e99bef08d3d440e */
var songs = ['Bad Reputation - Joan Jett & the Blackhearts',
  'Teenage Dirtbag - Wheatus',
  'All the Small Things - blink-182',
  'One Way Or Another - Blondie',
  'Uptown Girl - Billy Joel',
  'Crazy Little Thing Called Love - Queen',
  "Can't Take My Eyes off You - Frankie Valli",
  "Don't Go Breaking My Heart - Elton John, Kiki Dee",
  'Cruel to Be Kind - Letters To Cleo',
  'I Want You to Want Me - Letters To Cleo'];

function RecSong() {
  var input = document.querySelector('.songNum').value;
  var index = Number(input) - 1;
  var rec = songs[index];
  document.querySelector('.rightpane .songTitle').innerHTML = rec;
}