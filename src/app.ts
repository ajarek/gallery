import { Slider } from "./class-slider.js";

const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>
const container = document.querySelector('.container') as HTMLElement



let slider= new Slider(`images`, container)


function displayImage(e:Event){

    const image = e.target as HTMLImageElement
    slider.showImage (`${image.dataset.src}`)
    slider.showCloseBtn()
    closeImage()
    addClass()
}

function addClass(){
    cards.forEach(card => card.classList.add('none'))
}
function removeClass(){
    cards.forEach(card => card.classList.remove('none'))
}
function closeImage(){
    
    const closeBtn = document.querySelector('.closeBtn') as HTMLButtonElement
    const cardSlider = document.querySelector('.cardSlider') as HTMLElement

    closeBtn.addEventListener('click', () => {
        container.classList.remove('slider')
        cardSlider.remove()
        closeBtn.remove()
        removeClass()
    })
}


images.forEach(image => {
    image.addEventListener('click', displayImage)
})


