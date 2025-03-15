window.onload = (e) => {
    
    /* HEADER */
    const hamburgerMenu = document.getElementById("hamburger-menu-btn")
    hamburgerMenu.addEventListener('click', function(){
        toggle_hmenu(this)
    })
    
    /* GALLERY */
    loadImages()
    
    /* FOOTER */
    const footerCredits = document.getElementById("credits")
    footerCredits.innerHTML = `&copy;${new Date().getFullYear().toString()} Renato Fringuello`
    
    /* LANG */
    load_language('it')
}