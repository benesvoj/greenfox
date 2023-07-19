const imagesData = [
    {
        imgSrc: "http://picsum.photos/id/29/600/360",
        imgTitle: "Picture 1",
        imgDesc: "Description for picture 1",
    },
    {
        imgSrc: "http://picsum.photos/id/30/600/360",
        imgTitle: "Picture 2",
        imgDesc: "Description for picture 2",
    },
    {
        imgSrc: "http://picsum.photos/id/31/600/360",
        imgTitle: "Picture 3",
        imgDesc: "Description for picture 3",
    },
    {
        imgSrc: "http://picsum.photos/id/32/600/360",
        imgTitle: "Picture 4",
        imgDesc: "Description for picture 4",
    },
    {
        imgSrc: "http://picsum.photos/id/33/600/360",
        imgTitle: "Picture 5",
        imgDesc: "Description for picture 5",
    },
    {
        imgSrc: "http://picsum.photos/id/34/600/360",
        imgTitle: "Picture 6",
        imgDesc: "Description for picture 6",
    },
    {
        imgSrc: "http://picsum.photos/id/35/600/360",
        imgTitle: "Picture 7",
        imgDesc: "Description for picture 7",
    },
    {
        imgSrc: "http://picsum.photos/id/36/600/360",
        imgTitle: "Picture 8",
        imgDesc: "Description for picture 8",
    },
    {
        imgSrc: "http://picsum.photos/id/37/600/360",
        imgTitle: "Picture 9",
        imgDesc: "Description for picture 9",
    },
    {
        imgSrc: "http://picsum.photos/id/38/600/360",
        imgTitle: "Picture 10",
        imgDesc: "Description for picture 10",
    }
]

var slideIndex = 1;
const imageGalleryContainer = document.getElementById('imageGallery');

fetchImages();
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function fetchImages() {
    imagesData.forEach((imageInfo) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('slides');
    
        const imageElement = document.createElement('img');
        imageElement.src = imageInfo.imgSrc;
        imageElement.alt = imageInfo.imgTitle;
    
        const captionElement = document.createElement('div');
        captionElement.classList.add('grey-container');
        captionElement.textContent = imageInfo.imgDesc;
    
        const captionTitle = document.createElement('h1');
        captionTitle.textContent = imageInfo.imgTitle;
    
        const captionDescription = document.createElement('p');
        captionDescription.textContent = imageInfo.imgDesc;
    
        captionElement.appendChild(captionTitle);
        captionElement.appendChild(captionDescription);
    
        imageContainer.appendChild(imageElement);
        imageContainer.appendChild(captionElement);
    
        imageGalleryContainer.appendChild(imageContainer);
      });
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide-thumbnail");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  console.log(slideIndex);

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