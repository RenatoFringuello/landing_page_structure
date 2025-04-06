window.onload = (e) => {
    
    /* HEADER */
    const hamburgerMenu = document.getElementById("hamburger-menu-btn")
    hamburgerMenu.addEventListener('click', function(){
        toggle_hmenu(this)
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
    load_language('it')
}