// PomoPulse Functions
  // BUGTEST VALUES
  // var workLength = 10;
  // var shortBreakLength = 3;
  // var longBreakLength = 5;
  
  // Constants for initial and actual timer values
  // var workLength = 1500; // Initial work session length in seconds which is 25 minutes
  // var shortBreakLength = 300; // Initial short break length in seconds which is 5 minutes
  // var longBreakLength = 900; // Initial long break length in seconds which is 15 minutes

  var timerPaused = false;

  // Functions when Start button is clicked
  function startTimer() {
    // Gets input values
    window.workLength = document.getElementById("workInput").value;
    window.shortBreakLength = document.getElementById("shortBreakInput").value;
    window.longBreakLength = document.getElementById("longBreakInput").value;
    // Checks if input values are empty and assign default values if so to not have any null times
    if (document.getElementById("workInput").value == "") {
      workLength = 1500;
    }
    if (document.getElementById("shortBreakInput").value == "") {
      shortBreakLength = 300;
    }
    if (document.getElementById("longBreakInput").value == "") {
      longBreakLength = 900;
    }
    workLength = parseInt(workLength);
    shortBreakLength = parseInt(shortBreakLength);
    longBreakLength = parseInt(longBreakLength);
    window.timeLeft = workLength + 1; // Ensure that the start of the Work Cycle is at 10 seconds because timeLeft starts counting down immmediately, therefore wasting a second
    window.maxTimeLeft = workLength;
    window.cycles = 1;
    // Removes Start button and runs timer() function
    document.getElementById("startButton").remove();
    timer();
  }

  // Runs the timer
  function timer() {
    if (!timerPaused && timeLeft > 0) {
      // Decrements timeLeft by 1 every second if timerPaused is false and timeLeft is greater than 0, and outputs the remaining time
      timeLeft--;
      outputTime();
    }
    if (timeLeft == 0) {
      // Checks if the timeLeft is 0, plays a ping alarm sound, and increments the number of cycles by 1 if it is
      ping.play();
      cycles++;
      if (cycles % 8 == 0) {
        // Checks if the number of cycles is a multiple of 8, and if it is, change the timer's status, and maximum time to a Long Break
        document.getElementById("timerStatus").innerHTML = "Long Break";
        timeLeft = longBreakLength;
        maxTimeLeft = longBreakLength;
        outputTime();
      } else if (cycles % 2 == 0) {
        // Checks if the number of cycles is a multiple of 2 (even) but not of 8, and if it is, change the timer's status, and maximum time to a Short Break
        document.getElementById("timerStatus").innerHTML = "Short Break";
        timeLeft = shortBreakLength;
        maxTimeLeft = shortBreakLength;
        outputTime();
      } else {
        // Otherwise, the timer's status remains in Work Mode
        document.getElementById("timerStatus").innerHTML = "Work Mode";
        timeLeft = workLength;
        maxTimeLeft = workLength;
        outputTime();
      }
  
      // Logs previous cycle
      var prevCycle = cycles - 1; // When a cycle finishes, it decreases the recorded number of cycles by 1 to log the previous cycle
      if (prevCycle % 8 == 0) {
        // Checks if the previous cycle was a Long Break, and if it is, outputs a Long Break in the activity log
        document.getElementById("activityLog").innerHTML += "<li>Long Break completed!</li>";
      } else if (prevCycle % 2 == 0) {
        // Checks if the previous cycle was a Short Break, and if it is, outputs a Short Break in the activity log
        document.getElementById("activityLog").innerHTML += "<li>Short Break completed!</li>";
      } else {
        // Checks if the previous cycle was a Work Session, and if it is, outputs a Work Session in the activity log
        document.getElementById("activityLog").innerHTML += "<li>Work Session completed!</li>";
      }
    }
    // Repeats the timer function every second
    setTimeout(timer, 1000);
  }

  // Executes when the Pause/Resume button is pressed
  function pause() {
    // Toggles the timerPaused state and updates the button text accordingly
    if (!timerPaused) {
      timerPaused = true;
      document.getElementById("pause").innerHTML = "Resume";
    } else {
      timerPaused = false;
      document.getElementById("pause").innerHTML = "Pause";
    }
  }

  // Resets the page when Reset button is pressed
  function reset() {
    location.reload(); // Reloads the page to reset the timer
    // BANTER
    // wow what a genius solution omg!!! -e
    // nice reload bro -p
    // thanks i worked really hard on it -e
    // that's amazing -p
  }

  // Outputs the timeLeft in minutes and/or seconds and updates UI elements
  function outputTime() {
    var minutes = Math.floor(timeLeft / 60); // Converts the timeLeft into minutes
    var seconds = timeLeft % 60; // Converts the timeLeft into seconds
    document.getElementById("timeRemaining").style.width = (timeLeft / maxTimeLeft) * 100 + "%"; // Updates the timeBar by getting the percentage of the timeLeft
    if (timeLeft >= 60) {
      // Checks if the timeLeft is greater than or equal to 60, and if it is, outputs the timeLeft in minutes and seconds
      document.getElementById("timeLeft").innerHTML =
        minutes + "m " + seconds + "s";
    } else {
      // Otherwise, outputs the timeLeft in seconds
      document.getElementById("timeLeft").innerHTML = seconds + "s";
    }
    if (seconds >= 10) {
      // Checks if the seconds are greater than or equal to 10, and if it is, output the title's remaining time in minutes and seconds (with tens)
      document.title = minutes + ":" + seconds + " | " + document.getElementById("timerStatus").innerHTML + " | PomoPulse";
    } else {
      // Otherwise, output the title's remaining time in minutes and seconds (with ones)
      document.title = minutes + ":0" + seconds + " | " + document.getElementById("timerStatus").innerHTML + " | PomoPulse";
    }
  }


//TaskTracker Functions (Coming soon)
  /*
  - set task name as variable
  - accept date due as another variable
  - output task in a box on screen
  */


// FocusRCG Functions
  // Executes when Generate Random Color button is pressed
  function rcg() {
    // Generates random values for red, green, blue color components
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    // Converts the random values into hexadecimal strings
    var red = r.toString(16);
    var green = g.toString(16);
    var blue = b.toString(16);

    // Checks if the r, g, and b values are less than 16, and if they are, adds a leading 0 to each corresponding color string component (red, green, blue)
    leadingZero(r, red);
    leadingZero(g, green);
    leadingZero(b, blue);

    // Generates the hexadecimal color string
    let hexCode = "#" + red + green + blue;

    // Outputs the RGB Value of the random color
    document.getElementById("rgbVal").innerHTML = "RGB Value: (" + r + ", " + g + ", " + b + ")";
    // Outputs the Hex Code of the random color
    document.getElementById("hexVal").innerHTML = "Hex Code: " + hexCode;
    // Changes the background color of the circular container to the random color
    document.getElementById("colorDisplay").style.backgroundColor = hexCode;
  }

  //Function to simplify code for adding leading zero if the hex conversion does not have a leading zero
  function leadingZero(colNum, col) {
    if (colNum < 16) {
      col = "0" + col;
    }
  }

  function footer() {
    // create footer template
    document.getElementById("footer").innerHTML = "<p>&copy; 2024 Samson & Sichon</p><p><a href=\"htdocs/about-us.html\">About Us</a> | <a href=\"htdocs/pomopulse.html\">PomoPulse</a> | <a href=\"htdocs/tasktracker.html\">TaskTracker</a> | <a href=\"htdocs/rcg.html\">Random Color Generator</a></p> <p>Contact us: <a href=\"https://twitter.com/chessfan24\">Eshan Samson</a> | <a href=\"https://twitter.com/pj_ballindruid\">Prince Jasper Allen Sichon</a> <small>(names are clickable)</small></p><p><small>References and Appendices in Console and About Us Page</small></p>";

    /*
    Reference Code:
    
    <footer class="container-fluid" id="footer">
      <p>&copy; 2024 Samson & Sichon</p>
      <!-- Links to other webpages of the project -->
      <p><a href="htdocs/about-us.html">About Us</a> | <a href="htdocs/pomopulse.html">PomoPulse</a> | <a href="htdocs/tasktracker.html">TaskTracker</a> | <a href="htdocs/rcg.html">Random Color Generator</a></p>
      <!-- Contact Hyperlinks -->
      <p>Contact us: <a href="https://twitter.com/chessfan24">Eshan Samson</a> | <a href="https://twitter.com/pj_ballindruid
      ">Prince Jasper Allen Sichon</a> <small>(names are clickable)</small></p>
      <p><small>References and Appendices in Console and About Us Page</small></p>
    </footer>
    */
  }

  function acceptFormResponse() {
    //to be continued
    alert("Thank you for your response!");
  }

  function noConsent() {
    document.getElementById("requiresConsent").innerHTML = "Unfortunately, we cannot get your feedback without your consent. If you would like to answer the form again, please refresh the page.";
  }