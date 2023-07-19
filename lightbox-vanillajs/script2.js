var slideIndex = 0;
var imagesMaxCount = 10;
let images = [];
var slides = document.getElementById("preview");
var img = document.createAttribute('img');

for (let i = 0; i < imagesMaxCount; i++) {
    images.push(`http://picsum.photos/id/${i + 29}/600/360`);
}

console.log('fetchedPhotos', images);

var src = document.createAttribute("src");
src.value = images[slideIndex];
console.log('imageSource', src);
// img.src = images[slideIndex];
// img.setAttribute(src);
// img.setAttribute('class', 'image');
// img.attr(src);

img.forEach(img => {
    img.setAttribute(src);
    console.log(img);
  });

slides.appendChild(img);

showSlides(slideIndex);

const moveSlides = (n) => {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;

    var dots = document.getElementsByClassName("slide-thumbnail");
    var captionText = document.getElementById("caption");


    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    console.log(slideIndex);

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }

    slides[slideIndex - 1].style.display = "block";

    // dots[slideIndex - 1].className += " active";

    // captionText.innerHTML = dots[slideIndex - 1].alt;
}