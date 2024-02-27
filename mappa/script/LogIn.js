function logInVerify() {
  var username = document.getElementById("logInUser").value;
  var email = document.getElementById("logInEmail").value;
  var password = document.getElementById("logInPass").value;
  var retypePassword = document.getElementById("logInRetypePass").value;
  let acc = document.getElementById("verifyingOfAccount");
  let userAccount = localStorage.getItem("userAccount");

  if (userAccount) {
    if (password === retypePassword) {
      accountObject = JSON.parse(userAccount);

      if ((username === accountObject.username || email === accountObject.email) && password === accountObject.password) {
        acc.innerHTML = "We now have your account! Go to your user profile!";
        document.body.appendChild(acc);
      }
      else if (username !== accountObject.username || email !== accountObject.email) {
        acc.innerHTML = "You have the wrong username/email or your account does not exist :(";
        document.body.appendChild(acc);
      }
      else if ((username === accountObject.username || email === accountObject.email) && password !== accountObject.password) {
        acc.innerHTML = "You have the wrong password :(";
        document.body.appendChild(acc);
      }  
    } else {
        alert("You have retyped your password incorrectly, Please Try Again!");
      }
  }
}