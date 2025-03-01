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
    footerCredits.innerHTML += new Date().getFullYear().toString()
}