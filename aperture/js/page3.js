/* movie : the perks */
/* playlist : https://open.spotify.com/playlist/4pYFunNHiiA2pTpbw9qm2I?si=2b8a7518f3764918 */
var songs = ['Asleep - The Smiths',
  'Teen Age Riot - Sonic Youth',
  'Just Like Heaven - The Cure',
  'Come On Eileen - Dexys Midnight Runners',
  "Pearly-Dewdrops' Drops - Cocteau Twins",
  '1979 - The Smashing Pumpkins',
  'Break - Alex G (unreleased)',
  'Gold Dust - Duster',
  'Things To Do - Alex G',
  'Heroes - David Bowie'];

function RecSong() {
  var input = document.querySelector('.songNum').value;
  var index = Number(input) - 1;
  var rec = songs[index];
  document.querySelector('.rightpane .songTitle').innerHTML = rec;
}