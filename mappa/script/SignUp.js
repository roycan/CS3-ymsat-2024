function nextPage() {

  var name = document.getElementById('name').value.trim();
  var username = document.getElementById('username').value.trim();
  var gender = document.querySelector('input[name="gender"]:checked');
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();
  var retypePassword = document.getElementById('retypePassword').value.trim();
  
  switch(true) {
    case !name:
      alert('Please enter your name.');
      break;
    case !username:
      alert('Please enter your preferred username.');
      break;
    case !gender:
      alert('Please select a gender.');
      break;
    case !email:
      alert('Please enter your Email.');
      break;
    case !password:
      alert('Please enter your password.');
      break;
    case !retypePassword:
      alert('Please retype your password.');
      break;
    case password !== retypePassword:
      alert('Your password and retype password should be the same.');
      break;
    default:
      document.getElementById('page1').style.display = 'none';
      document.getElementById('page2').style.display = 'block';
  }
}

function previousPage() {
  document.getElementById('page1').style.display = 'block';
  document.getElementById('page2').style.display = 'none';
}

function createAccount() {
  // Gather the form data
  var formData = {
    name: document.getElementById('name').value,
    username: document.getElementById('username').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    rememberMe: document.getElementById('rememberMe').checked,
    favoriteWork: document.getElementById('favoriteWork').value,
    action: document.getElementById('action').checked,
    drama: document.getElementById('drama').checked,
    gore: document.getElementById('gore').checked,
    mystery: document.getElementById('mystery').checked,
    sports: document.getElementById('sports').checked,
    updates: document.querySelector('input[name="updates"]:checked').value,
    updateType: document.getElementById('updateType').value
  };

  // Convert the form data to a text string
  var formDataString = JSON.stringify(formData, null, 2);
  localStorage.setItem('username', formDataString);
  localStorage.setItem('email', formDataString);
  localStorage.setItem('password', formDataString);

  return false;
}

