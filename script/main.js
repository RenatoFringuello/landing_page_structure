window.addEventListener('DOMContentLoaded', ()=>{
    
    /* HEADER */
    const hamburgerMenu = document.getElementById("hamburger-menu-btn")
    hamburgerMenu.addEventListener('click', function(){
        toggleHmenu(this)
    })
    
    /* GALLERY */
    const rowGallery = document.querySelector('section#gallery .row')
    if (rowGallery){
        // loadImages(rowGallery, 10)// to remove
        loadBentoGallery(rowGallery, 10)
    }
    
    /* FOOTER */
    const footerCredits = document.getElementById("credits")
    footerCredits.innerHTML = `&copy;${new Date().getFullYear().toString()} Renato Fringuello`

    /* LANG, è alla fine perché tutti i tag devono essere caricati prima di lavorarci*/
    loadLanguage('it')

    /* SHAPES */
    initShapes(7)
    
    // mouse movement event
    document.addEventListener('mousemove', (e)=>{
        // update shapes aim
        updateShapes(e)
    })

})