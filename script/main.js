// quando sono state caricati anche i contenuti
window.addEventListener('load', ()=>{
    let t = setTimeout(()=>{

        /* SHAPES */
        initShapes(7)
        
        // mouse movement event
        document.addEventListener('mousemove', (e)=>{
            // update shapes aim
            updateShapes(e)
        })

        // dopo che ho generato gli shapes levo il loader
        toggleLoading(false)

        clearTimeout(t)
    }, 1500)
})

/**
 * cambiare strategia:
 * 
 * invece di mettere l'element per gli shapes usa una canvas che sia alta quanto tutto l'HTML
 */

// quando il DOM è stato caricato
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
})