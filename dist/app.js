import { Slider } from "./class-slider.js";
;
(function () {
    const allImages = ['city-1', 'city-2', 'city-3', 'city-4', 'city-5', 'nature-6', 'nature-7', 'nature-8'];
    const container = document.querySelector('.container');
    let slider = new Slider(allImages, container);
    slider.displayAllImages(allImages);
    const displayImage = (e) => {
        const image = e.target;
        slider.showImage(`${image.dataset.src}`);
    };
    function start() {
        const images = document.querySelectorAll('img');
        images.forEach((image, index) => {
            image.addEventListener('click', displayImage);
        });
    }
    start();
})();
