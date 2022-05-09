"use strict";
const images = document.querySelectorAll('img');
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.container');
class Slider {
    constructor(images) {
        this.images = images;
    }
    showImage(src) {
        const div = document.createElement('div');
        div.classList.add('cardSlider');
        div.innerHTML = `<img src="images/${src}.jpeg" alt="">`;
        container.classList.add('slider');
        container.appendChild(div);
    }
    showCloseBtn() {
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('closeBtn');
        closeBtn.innerHTML = `&#215;`;
        container.setAttribute('position', 'relative');
        container.appendChild(closeBtn);
    }
}
let slider = new Slider(`images`);
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
