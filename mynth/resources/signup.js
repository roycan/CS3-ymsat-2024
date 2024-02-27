document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    if (username && password) {
        var user = {
            username: username,
            password: password
        };

        localStorage.setItem(username, JSON.stringify(user));

        alert('Sign up successful!');
    } else {
        alert('Please fill out all fields.');
    }
});