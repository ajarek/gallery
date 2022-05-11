import { Slider } from "./class-slider.js";
const allImages=['nature-1','nature-2','nature-3','city-1', 'city-2', 'city-3','city-4','city-5', ]
const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>
const container = document.querySelector('.container') as HTMLElement


let slider= new Slider(allImages, container)

slider.displayAllImages(allImages)


const displayImage=(e:Event)=>{

    const image = e.target as HTMLImageElement
    slider.showImage(`${image.dataset.src}`)
    slider.showCloseBtn()
    slider.addBtnSlider()
    slider.addTitleImage(`${image.dataset.src}`)
    closeImage()
    addClass()
}

function display(){
    const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>
    images.forEach(image =>{
        image.addEventListener('click', (e) => {
            displayImage(e)
        })
    })
}
display()

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




