function calculateTime() {
  // Get user's input
  const numberOfEpisodes = parseInt(document.getElementById('episodes').value);
  const episodeDuration = parseInt(document.getElementById('duration').value);
  // Calculate total time
  const totalTimeMinutes = numberOfEpisodes * episodeDuration;
  // Convert total time to hours and minutes
  const hours = parseInt(totalTimeMinutes / 60);
  const minutes = totalTimeMinutes % 60;
  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Total time needed: ' + hours + ' hours and ' + minutes + ' minutes.';
  }

