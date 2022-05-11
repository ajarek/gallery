export class Slider {
    container: HTMLElement
    imagesArr: string[]
    constructor(imagesArr: string[], container: HTMLElement) {
        this.imagesArr = imagesArr,
        this.container = container
    }
     displayAllImages(arrImages: string[]) {
        arrImages.forEach(image => {       
            const card=document.createElement('div')
            card.classList.add('card')
            card.setAttribute('data-src', `${image}`)
            const myImg= document.createElement('img')
            myImg.setAttribute('src', `images/${image}.jpeg`)
            myImg.setAttribute('alt', `${image}`)
            myImg.setAttribute('data-src', `${image}`)
            card.appendChild(myImg)     
            this.container.appendChild(card)
    })
    }
   
    showImage(src:string) {
       
        const div = document.createElement('div')
        div.classList.add('cardSlider')
        div.innerHTML = `<img src="images/${src}.jpeg" alt="">`
        this.container.appendChild(div)
        this.container.classList.add('slider')
}

showCloseBtn() {
    
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('closeBtn')
    closeBtn.innerHTML = `&#215;`
    this.container.setAttribute('position', 'relative')
    this.container.appendChild(closeBtn)
}
addBtnSlider() {
    const btnSlider = document.createElement('button')
    btnSlider.classList.add('btnLeftSlider')
    btnSlider.innerHTML = `&#10094;`
    const btnSlider2 = document.createElement('button')
    btnSlider2.classList.add('btnRightSlider')
    btnSlider2.innerHTML = `&#10095;`
    this.container.setAttribute('position', 'relative')
    this.container.append(btnSlider, btnSlider2)
}
addTitleImage(title: string) {
    const titleImage = document.createElement('h1')
    titleImage.classList.add('titleImage')
    titleImage.innerHTML = title
    this.container.appendChild(titleImage)
    this.container.setAttribute('position', 'relative')
}
}


