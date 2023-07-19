import { imagesData } from './data.js';

var slideIndex = 1;
const imageGalleryContainer = document.getElementById('imageGallery');
const thumbnailGalleryContainer = document.getElementById('thumbnailGallery');

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
        captionElement.classList.add('caption-container');

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

    imagesData.forEach((imageInfo, index) => {
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.classList.add('column');

        const imageElement = document.createElement('img');
        imageElement.classList.add('slide-thumbnail');
        imageElement.src = imageInfo.imgSrc;
        imageElement.alt = imageInfo.imgTitle;

        const captionElement = document.createElement('h2');
        captionElement.classList.add('caption-thumbnail');
        captionElement.textContent = imageInfo.imgTitle;
        

        thumbnailContainer.appendChild(imageElement);
        thumbnailContainer.appendChild(captionElement);
        thumbnailGalleryContainer.appendChild(thumbnailContainer);

        imageElement.addEventListener('click', () => {
            currentSlide(index + 1);
        });

    })
}

function showThumbnailCaption(index) {
    const captionContainers = document.querySelectorAll(".caption-thumbnail");
    captionContainers[index].style.display = "block";
}

function hideThumbnailCaption(index) {
    const captionContainers = document.querySelectorAll(".caption-thumbnail");
    captionContainers[index].style.display = "none";
}

function addThumbnailHoverEffect(index) {
    const thumbnailContainers = document.querySelectorAll(".column");
    thumbnailContainers[index].classList.add("thumbnail-hover");
}

function removeThumbnailHoverEffect(index) {
    const thumbnailContainers = document.querySelectorAll(".column");
    thumbnailContainers[index].classList.remove("thumbnail-hover");
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("column");

    slideIndex = (n % slides.length);
    if (slideIndex === 0) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
}

window.onload = () => {
    fetchImages();
    showSlides(slideIndex);

    const prevButton = document.querySelector(".prevContainer");
    const nextButton = document.querySelector(".nextContainer");

    prevButton.addEventListener("click", () => {
        moveSlide(-1);
    });

    nextButton.addEventListener("click", () => {
        moveSlide(1);
    });

    const thumbnailContainers = document.querySelectorAll(".column");

    thumbnailContainers.forEach((thumbnailContainer, index) => {
        const titleElement = thumbnailContainer.querySelector("h2");

        thumbnailContainer.addEventListener("mouseover", () => {
            showThumbnailCaption(index);
            addThumbnailHoverEffect(index);
            titleElement.style.display = "block";
        });

        thumbnailContainer.addEventListener("mouseout", () => {
            hideThumbnailCaption(index);
            removeThumbnailHoverEffect(index);
            titleElement.style.display = "none";
        });
    });
}