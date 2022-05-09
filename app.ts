const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>
const container = document.querySelector('.container') as HTMLElement

class Slider {
    images: string
    constructor(images: string) {
        this.images = images
    }
    showImage(src: string) {
        const div = document.createElement('div')
        div.classList.add('cardSlider')
        div.innerHTML = `<img src="images/${src}.jpeg" alt="">`
        container.classList.add('slider')
        container.appendChild(div)       
}
showCloseBtn() {
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('closeBtn')
    closeBtn.innerHTML = `&#215;`
    container.setAttribute('position', 'relative')
    container.appendChild(closeBtn)
}

}

let slider= new Slider(`images`)

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

