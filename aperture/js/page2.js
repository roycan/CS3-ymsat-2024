/* movie : eternal sunshine */
/* playlist : placeholder */
var songs = ['Phone Call - Jon Brion',
  '(dream) - salvia palth',
  'Inside Out - Duster',
  'if i am - my bloody valentine',
  'I Have the Moon - Lush',
  'Loving Machine - TV Girl',
  'Younger Than You - Whirr',
  'Better - sign crushes motorist',
  'Sea, Swallow Me - Cocteau Twins, Harold Budd',
  'Starting Over - LSD and the Search for God'];

function RecSong() {
  var input = document.querySelector('.songNum').value;
  var index = Number(input) - 1;
  var rec = songs[index];
  document.querySelector('.rightpane .songTitle').innerHTML = rec;
}