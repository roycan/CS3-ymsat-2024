// function for the photo dump in the meet the band page

let photoDumpIndex = 1;
showPhotos(photoDumpIndex);

// function that controls the next or previous photo
function plusDump(n) {
  showPhotos(photoDumpIndex += n);
}

// function for the current photo
function currentPhoto(n) {
  showPhotos(photoDumpIndex = n);
}

// function that swtiches between each photo
function showPhotos(n) {
  let i;
  let photos = document.getElementsByClassName("photoDump");
  let dots = document.getElementsByClassName("dot");

  if (n > photos.length) { photoDumpIndex = 1 }
  if (n < 1) { photoDumpIndex = photos.length }
  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  photos[photoDumpIndex - 1].style.display = "block";
  dots[photoDumpIndex - 1].className += " active1";
}