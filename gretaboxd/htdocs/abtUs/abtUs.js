const carousel = document.querySelector('.carousel');
const images = Array.from(carousel.querySelectorAll('img'));
const indicatorsContainer = document.querySelector('.carousel-indicators');
let currentIndex = 0;

images[currentIndex].classList.add('active');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');

prevButton.addEventListener('click', () => updateCarousel(currentIndex - 1));
nextButton.addEventListener('click', () => updateCarousel(currentIndex + 1));

// Change Image every 5 seconds // 
setInterval(() => updateCarousel(currentIndex + 1), 5000);


/* index is the image's index in the images array, and image is the image that is now being processed. The function generates a new div, appends it to indicatorsContainer, adds the carousel-indicator class to it, configures a click event listener to call updateCarousel(index), and finally returns the new div. Following that, the map() function returns a new array with each of these additional div components.*/

const indicators = images.map((image, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('carousel-indicator');
  indicator.addEventListener('click', () => updateCarousel(index));
  indicatorsContainer.appendChild(indicator);
  return indicator;
});

//Change Image & Update Image in Carousel//
const updateCarousel = (newIndex) => {
  images[currentIndex].classList.remove('active');
  currentIndex = (newIndex + images.length) % images.length;
  images[currentIndex].classList.add('active');
  updateIndicators();
};

//Changing Indicators//
const updateIndicators = () => {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
};

updateIndicators(); 