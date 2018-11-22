const body = document.querySelector('body');

const IMG_NUMBER = 5;

function paintImage(imageNumber) {
    const image = new Image();
    image.src = `images/${imageNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();