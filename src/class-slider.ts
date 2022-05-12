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
        document.querySelectorAll('.card').forEach(card => {
            card.classList.add('none')
        })
        const div = document.createElement('div')
        div.classList.add('cardSlider')
        div.innerHTML = `<img id="${src}" src="images/${src}.jpeg" alt="">`
        this.container.appendChild(div)
        this.container.classList.add('slider')
        this.creatCloseBtn()
        this.addBtnSlider()
        this.addTitleImage(`${src}`)
}

creatCloseBtn() {  
    const closeBtn = document.createElement('button')
    closeBtn.classList.add('closeBtn')
    closeBtn.setAttribute( 'onclick','event.stopPropagation()')
    closeBtn.innerHTML = `&#215;`
    this.container.setAttribute('position', 'relative')
    this.container.appendChild(closeBtn)
    this.closeSlider()
}

removeNone() {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('none')
         })
}

closeSlider() {
    const closeBtn = document.querySelector('.closeBtn')
    closeBtn?.addEventListener('click', (e) => {  
        e.stopPropagation()    
        this.container.classList.remove('slider')
        this.removeElements()
        this.removeNone()
})
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
    this.sliderRun()
}

addTitleImage(title: string) {
    const titleImage = document.createElement('h1')
    titleImage.classList.add('titleImage')
    titleImage.innerHTML = title
    this.container.appendChild(titleImage)
    this.container.setAttribute('position', 'relative')
}

sliderRun() {
    const btnLeft = document.querySelector('.btnLeftSlider')as HTMLButtonElement
    const btnRight = document.querySelector('.btnRightSlider')as HTMLButtonElement
    const image = document.querySelector('.cardSlider img') as HTMLImageElement
    btnLeft.addEventListener('click', (e) => {
        let nr= Number(image.id.slice(-1))
        this.removeElements()
    if(nr===1){nr=9}
        this.showImage(this.imagesArr[(nr-2)]) 
    })
    btnRight.addEventListener('click', (e) => {
        let nr= Number(image.id.slice(-1))
        this.removeElements()
    if(nr===8){nr=0}
        this.showImage(this.imagesArr[(nr)])     
    })
}

removeElements() {
    document.querySelector('.cardSlider')?.remove() 
    document.querySelector('.titleImage')?.remove()
    document.querySelector('.btnLeftSlider')?.remove()
    document.querySelector('.btnRightSlider')?.remove()
    document.querySelector('.closeBtn')?.remove()

}

}