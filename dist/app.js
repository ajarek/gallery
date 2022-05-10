import { Slider } from "./class-slider.js";
const images = document.querySelectorAll('img');
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.container');
let slider = new Slider(`images`, container);
function displayImage(e) {
    const image = e.target;
    slider.showImage(`${image.dataset.src}`);
    slider.showCloseBtn();
    closeImage();
    addClass();
}
function addClass() {
    cards.forEach(card => card.classList.add('none'));
}
function removeClass() {
    cards.forEach(card => card.classList.remove('none'));
}
function closeImage() {
    const closeBtn = document.querySelector('.closeBtn');
    const cardSlider = document.querySelector('.cardSlider');
    closeBtn.addEventListener('click', () => {
        container.classList.remove('slider');
        cardSlider.remove();
        closeBtn.remove();
        removeClass();
    });
}
images.forEach(image => {
    image.addEventListener('click', displayImage);
});
