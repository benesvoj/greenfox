const rightSwipe = document.getElementById('rightIcon');
const leftSwipe = document.getElementById('leftIcon');

const preview = document.getElementById('preview')
const thumbnailList = document.getElementById('thumbImgId')

const img = document.createElement('img');


let counter = 0;
let images = [];
let thumbnails = []
let imagesMaxCount = 10;

for (let i = 0; i < imagesMaxCount; i++) {
    images.push(`http://picsum.photos/id/${i + 29}/600/360`);
    thumbnails.push(`http://picsum.photos/id/${i + 29}/50`)
}

console.log('images',images);
console.log('thumbnails',thumbnails);

console.log('preview', preview);
preview.appendChild(img);

img.src = images[counter];
img.setAttribute('class', 'image')


thumbnailList.appendChild(img);
console.log('thumbnailList.appendChild', thumbnailList);

img.src = thumbnails[counter];
img.setAttribute('class', 'thumbImg');

function nextSlide() {
    counter < (images.length - 1) ? counter++ : counter = 0;
    img.src = images[counter];
}

function prevSlide() {
    if (counter <= 0) {
        counter = images.length - 1;
    } else {
        counter--;
    }
    console.log(counter);

    img.src = images[counter];
}

rightSwipe.addEventListener('click', () => {
    nextSlide();
})

leftSwipe.addEventListener('click', () => {
    prevSlide();
})