const overlay  = document.querySelector('header #overlay')
const header   = document.querySelector('header#main-header')
const body     = document.querySelector('body')
const mainMenu = document.getElementById('main-menu')

function toggle_hmenu(obj){
    if(obj.classList.contains('open')){
        /* cosa faccio prima di chiudere */
        closeMenu(obj)
    }
    else{
        openMenu(obj)
    }
}

function closeMenu(obj){
    obj.classList.remove('open')
    header.classList.remove('header-open')
    body.classList.remove('overflow-hidden')
    /* quando chiudo il menu lo metto visibile solo per desktop */
    mainMenu.classList.add('d-lg-flex')
    mainMenu.classList.add('d-none')
}
function openMenu(obj){
    // prima di aprire metto in ascolto un resize in modo da chiudere al resize
    window.addEventListener('resize', function onres(){
        if(window.innerWidth >= 992){
            // chiudo il menu
            closeMenu(obj)
            this.removeEventListener('resize', onres)
        }
    })
    
    obj.classList.add('open')
    header.classList.add('header-open')
    body.classList.add('overflow-hidden')
    /* quando apro il menu lo metto visibile sempre */
    mainMenu.classList.remove('d-flex')
    mainMenu.classList.remove('d-none')
}