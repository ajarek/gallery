export class Slider {
    container: HTMLElement
    images: string
    constructor(images: string, container: HTMLElement) {
        this.images = images,
        this.container = container
    }
   
    showImage(src: string) {
       
        const div = document.createElement('div')
        div.classList.add('cardSlider')
        div.innerHTML = `<img src="images/${src}.jpeg" alt="">`
        this.container.classList.add('slider')
        this.container.appendChild(div)       
}
showCloseBtn() {
    
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('closeBtn')
    closeBtn.innerHTML = `&#215;`
    this.container.setAttribute('position', 'relative')
    this.container.appendChild(closeBtn)
}

}