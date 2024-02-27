function enterCompInput() {
  // variables needed for the function
  visualComp = document.getElementById("compVisual");
  inputComp = document.getElementById("compInput").value.toUpperCase();
  infoComp1 = document.getElementById("compInfo1");
  infoComp2 = document.getElementById("compInfo2");
  infoComp3 = document.getElementById("compInfo3");
  infoComp4 = document.getElementById("compInfo4");
  infoComp5 = document.getElementById("compInfo5");

  // if else chain depending on what the user's input is
  if (inputComp == "INTJ") {
    visualComp.src = "../images/MBTI Pictures/INTJ.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ENFP & ENTP";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>INFP, INFJ, ENFJ, INTJ, ENTJ, & INTP";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>ISFP, ESFP, ISTP, & ESTP";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>ISFJ, ESFJ, ISTJ, & ESTJ";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>None!";
  }

  else if (inputComp == "INTP") {
    visualComp.src = "../images/MBTI Pictures/INTP.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ENTJ & ESTJ";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>INFP, ENFP, INFJ, ENFJ, INTJ, INTP, ENTP";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>ISFP, ESFP, ISTP, & ESTP";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>ISFJ, ESFJ, & ISTJ";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br> None!";
  }

  else if (inputComp == "ENTJ") {
    visualComp.src = "../images/MBTI Pictures/ENTJ.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>INFP & INTP";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>ENFP, INFJ, ENFJ, INTJ, ENTJ, & ENTP";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, & ESTJ";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>None!";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>None!";
  }

  else if (inputComp == "ENTP") {
    visualComp.src = "../images/MBTI Pictures/ENTP.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>INFJ & INTJ";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>INFP, ENFP, ENFJ, ENTJ, INTP, ENTP";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>ISFP, ESFP, ISTP, & ESTP";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>ISFJ, ESFJ, ISTJ, & ESTJ";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>None!";
  }

  else if (inputComp == "INFJ") {
    visualComp.src = "../images/MBTI Pictures/INFJ.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ENFP & ENTP";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>INFP, INFJ, ENFJ, INTJ, ENTJ, & INTP";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>None!";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>None!";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, & ESTJ";
  }

  else if (inputComp == "INFP") {
    visualComp.src = "../images/MBTI Pictures/INFP.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ENFJ & ENTJ";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>INFP, ENFP, INFJ, INTJ, INTP, & ENTP";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>None!";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>None!";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, & ESTJ";
  }

  else if (inputComp == "ENFJ") {
    visualComp.src = "../images/MBTI Pictures/ENFJ.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>INFP & ISFP";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>ENFP, INFJ, ENFJ, INTJ, ENTJ, INTP, & ENTP";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>None!";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>None!";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, & ESTJ";
  }

  else if (inputComp == "ENFP") {
    visualComp.src = "../images/MBTI Pictures/ENFP.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>INFJ & INTJ";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>INFP, ENFP, ENFJ, ENTJ, INTP, & ENTP";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>None!";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>None!";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, & ESTJ";
  }

  else if (inputComp == "ISTJ") {
    visualComp.src = "../images/MBTI Pictures/ISTJ.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ESFP & ESTP";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>ISFJ, ESFJ, ISTJ, & ESTJ";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>ENTJ, ISFP, & ISTP";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>INTJ, INTP, & ENTP";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>INFP, ENFP, INFJ, & ENFJ";
  }

  else if (inputComp == "ISFJ") {
    visualComp.src = "../images/MBTI Pictures/ISFJ.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ESFP & ESTP";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>ISFJ, ESFJ, ISTJ, & ESTJ";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>ENTJ, ISFP, & ISTP";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>INTJ, INTP, & ENTP";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>INFP, ENFP, INFJ, & ENFJ";
  }

  else if (inputComp == "ESTJ") {
    visualComp.src = "../images/MBTI Pictures/ESTJ.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>INTP, ISFP, & ISTP";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>ISFJ, ESFJ, ISTJ, & ESTJ";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>ENTJ, ESFP, & ESTP";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>INTJ & ENTP";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>INFP, ENFP, INFJ, & ENFJ";
  }

  else if (inputComp == "ESFJ") {
    visualComp.src = "../images/MBTI Pictures/ESFJ.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ISFP & ISTP";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>ISFJ, ESFJ, ISTJ, & ESTJ";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>ENTJ, ESFP, & ESTP";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>INTJ, INTP, & ENTP";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>INFP, ENFP, INFJ, & ENFJ";
  }

  else if (inputComp == "ISTP") {
    visualComp.src = "../images/MBTI Pictures/ISTP.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ESFJ & ESTJ";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>None!";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>INTJ, ENTJ, INTP, ENTP, ISFJ, & ISTJ";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>ISFP, ESFP, ISTP, & ESTP";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>INFP, ENFP, INFJ, & ENFJ";
  }

  else if (inputComp == "ISFP") {
    visualComp.src = "../images/MBTI Pictures/ISFP.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ENFJ, ESFJ, & ESTJ";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>None!";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>INTJ, ENTJ, INTP, ENTP, ISFJ, & ISTJ";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>ISFP, ESFP, ISTP, & ESTP";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>INFP, ENFP, & INFJ";
  }

  else if (inputComp == "ESTP") {
    visualComp.src = "../images/MBTI Pictures/ESTP.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ISFJ & ISTJ";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>None!";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>INTJ, ENTJ, INTP, ENTP, ESFJ, & ESTJ";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>ISFP, ESFP, ISYP, & ESTP";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>INFP, ENFP, INFJ, & ENFJ";
  }

  else if (inputComp == "ESFP") {
    visualComp.src = "../images/MBTI Pictures/ESFP.png";
    infoComp1.innerHTML = "<b>The Perfect Pair 💞</b><br><br>ISFJ & ISTJ";
    infoComp2.innerHTML = "<b>You've Bewitched Me ✨</b><br><br>None!";
    infoComp3.innerHTML = "<b>Mid Compatibility 👎</b><br><br>INTJ, ENTJ, INTP, ENTP, ESFJ, & ESTJ";
    infoComp4.innerHTML = "<b>I'm Just Your Second Best 🥈</b><br><br>ISFP, ESFP, ISTP, & ESTP";
    infoComp5.innerHTML = "<b>Not Strong Enough 😓</b><br><br>INFP, ENFP, INFJ, & ENFJ";
  }


  // to adjust the dimensions of the visual
  visualComp.style.top = "100px";
  visualComp.style.height = "400px";

  // to display the info and the visual after going through the code/function
  visualComp.style.display = "block";
  infoComp1.style.display = "block";
  infoComp2.style.display = "block";
  infoComp3.style.display = "block";
  infoComp4.style.display = "block";
  infoComp5.style.display = "block";
}