let slideNumber = 1;
showSlides(slideNumber); //Display of current picture

function nextSlides(numberDot){
  showSlides(slideNumber += numberDot);
} // Moves to next given slide

function currentSlide(numberDot){
  showSlides(slideNumber = numberDot); //current slide number must be equal to dot number
}

function showSlides(numberDot){
  let index;
  let slides = document.getElementsByClassName("carouselFade");
  let transitionDots = document.getElementsByClassName("dot");

  if (slides.length < numberDot)
    slideNumber = 1; //If the dot number is greater, slideNumber goes back to the first slide
  
  if (numberDot < 1)
    slideNumber = slides.length; //Brings slide to the last slide

  for (index = 0; index < slides.length; index++){
    slides[index].style.display = "none"; //display settings for image if not for given design
  }

  for (index=0; index < transitionDots.length; index++){
    transitionDots[index].classList.remove("active"); //removes gray color from dots after moving to next slide
  }

  slides[slideNumber - 1].style.display = "block";
  transitionDots[slideNumber - 1].className += " active";  //adds gray color to dots once moving to the slide
}

function redirectArticle(pageName) {
  window.location.href = `/htdocs/aboutItArticlesandFeatures/${pageName}.html`; //redirects to new articles
}

function redirectQuiz(pageName){
  window.location.href = `/htdocs/quizzes/${pageName}.html`   //redirects to new quizzes
}