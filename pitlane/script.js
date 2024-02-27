function askNumber() {
  var number = prompt("would you like to guess what his driver number is?", "1");
  if (number == "1") {
    alert("You're right!");
  } else {
    alert("It's 1! try again next time.")
  }
}