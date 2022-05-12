import {Slider} from "./class-slider.js";
;(function(){
const allImages = ['city-1', 'city-2', 'city-3', 'city-4', 'city-5','nature-6', 'nature-7', 'nature-8' ]
const container = document.querySelector('.container') as HTMLElement


let slider = new Slider(allImages, container)
slider.displayAllImages(allImages)

const displayImage = (e: Event) => {
    const image = e.target as HTMLImageElement
    slider.showImage(`${image.dataset.src}`)   
}

function start() {
    const images = document.querySelectorAll('img') as NodeListOf < HTMLImageElement >
        images.forEach((image,index) => {
            image.addEventListener('click', displayImage)
        })
}

start()
})()