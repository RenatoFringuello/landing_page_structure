function loadImages(){
       
    const rowGallery = document.querySelector('section#gallery .row')
    for (let i = 1; i < 15; i++) {

        const img = document.createElement('img')
        img.setAttribute('src', `https://picsum.photos/1920/1080?random=${i}`)
        img.setAttribute('alt', `gallery_image_${i}`)
        img.setAttribute('loading', 'lazy')
        
        img.addEventListener('click', openImg)

        const column = document.createElement('div')
        column.className = "img-wrapper col-12 col-md-6 col-lg-4 col-xl-3"
        column.setAttribute('id', `gallery-img-${i}`)
        column.append(img)

        rowGallery.append(column)
    }
}

function openImg(){
    // this = img
    const body                = document.querySelector('body')
    const imgCarousel         = document.getElementById('img-carousel')

    // creo l'immagine da mostrare nel carosello
    const img = document.createElement('img')
    img.setAttribute('src', `${this.getAttribute('src')}`)
    img.setAttribute('alt', `${this.getAttribute('alt')}`)
    img.setAttribute('loading', 'lazy')

    if(imgCarousel.hasChildNodes()){
        imgCarousel.removeChild(imgCarousel.firstChild)
    }
    imgCarousel.append(img)

    // attivo il carosello
    imgCarousel.classList.add('d-flex')
    imgCarousel.classList.remove('d-none')
    // blocco lo scroll del sito
    body.classList.add('overflow-hidden')

    // creo l'evento per chiudere il carosello
    imgCarousel.addEventListener('click', ()=>{
        // chiudo il carosello
        imgCarousel.classList.add('d-none')
        imgCarousel.classList.remove('d-flex')
        // riattivo lo scroll del sito
        body.classList.remove('overflow-hidden')
    }, { once: true })
    
}