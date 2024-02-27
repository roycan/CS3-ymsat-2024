var username = document.getElementById("username").value;
console.log(username);

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.replace("index.html");
});