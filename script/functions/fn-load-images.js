/**
 * get from the DOM all the images loaded in the bento-grid-wrapper's items
 * and based on their orientation make the gallery into the section passed by argument
 * 
 * TODO: cercare un modo per recuperare le immagini dallo scaffholding
 */
function loadBentoGallery(rowGallery, nImgs){
    const bentoWrapper = document.createElement('div')
    bentoWrapper.className = 'bento-grid-wrapper'
    
    // const items = document.querySelectorAll(".bento-grid-item img");
    for (let i = 1; i <= nImgs; i++) {
        // img width and height random
        const w = getRandomInt(1080, 1920)
        const h = getRandomInt(1080, 1920)

        // creo l'immagine
        const bentoImg = document.createElement('img')
        bentoImg.setAttribute('src', `https://picsum.photos/${w}/${h}?random=${i}`)
        bentoImg.setAttribute('alt', `gallery_image_${i}`)
        bentoImg.setAttribute('loading', 'lazy')
        bentoImg.addEventListener('click', openImg)
        
        // setto l'orientamento dell'immagine nella galleria
        bentoImg.addEventListener("load", function(){
            const { naturalWidth: w, naturalHeight: h } = this;
            const ratio  = w / h;
            const parent = this.parentElement;

            if (ratio > 1.2) {
            parent.classList.add("landscape");
            } else if (ratio < 0.8) {
            parent.classList.add("portrait");
            } else {
            parent.classList.add("square");
            }
        });
        
        // creo l'item
        const bentoItem = document.createElement('div')
        bentoItem.className = 'bento-grid-item'
        bentoItem.append(bentoImg)

        bentoWrapper.append(bentoItem)
    }
    rowGallery.append(bentoWrapper)
}

function loadImages(rowGallery, nImgs){
    
    for (let i = 1; i <= nImgs; i++) {
        
        const img = document.createElement('img')
        img.setAttribute('src', `https://picsum.photos/1920/1080?random=${i}`)
        img.setAttribute('alt', `gallery_image_${i}`)
        img.setAttribute('loading', 'lazy')
        
        img.addEventListener('click', openImg)
        
        const column = document.createElement('div')
        column.className = "img-wrapper col-12 col-md-6 col-lg-4"// col-xl-3
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