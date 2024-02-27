/* 
  do not forget to add comments and follow good coding standards 
*/
let slideIndex = 1;
showSlides(slideIndex);
// for the next/prev controls
function slides(x) {
  showSlides(slideIndex += x);
}
// To control the icon images
function slideimg(x) {
  showSlides(slideIndex = x);
}
// To control the display of slides
function showSlides(x) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (x > slides.length) {slideIndex = 1}
  if (x < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/*Javascript from W3schools https://www.w3schools.com/howto/howto_js_slideshow.asp#gsc.tab=0 */

//For scoring//