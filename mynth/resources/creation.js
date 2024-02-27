function updateProfile() { // Updates your basic information
  var nameInput = document.getElementById('nameInput').value;
  var jobInput = document.getElementById('jobInput').value;
  var addressInput = document.getElementById('addressInput').value;
  var emailInput = document.getElementById('emailInput').value;

  document.getElementById('name').innerText = nameInput;
  document.getElementById('job').innerText = jobInput;
  document.getElementById('address').innerText = addressInput;
  document.getElementById('email').innerText = emailInput;
}

function uploadImage() { // Uploads your profile picture
  const input = document.getElementById('imageInput');
  const image = document.getElementById('profile-picture');

  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      image.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}

function downloadId() { // Downloads your card
  const elementToCapture = document.getElementById('container');

  html2canvas(elementToCapture, { allowTaint: true, useCORS: true, }).then(function(canvas) {
    // Convert canvas to data URL
    let dataUrl = canvas.toDataURL();

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = dataUrl;
    downloadLink.download = 'captured_image.png'; // Set desired file name and format

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the DOM
    document.body.removeChild(downloadLink);
  });
}

function changeElements() { // Changes your text color and background color
  var textColor = document.getElementById('textColor').value;
  var backgroundColor = document.getElementById('backgroundColor').value;

  var id = document.getElementById('container');
  id.style.backgroundColor = backgroundColor;
  id.style.color = textColor;
}