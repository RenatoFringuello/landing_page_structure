const fadeTime = 20
const fadeStep = 0.1

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * fadeStep;
    }, fadeTime);
}

function fadeIn(element) {
    var op = 0;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * fadeStep;
    }, fadeTime);
}

/**
 * 
 * @param {*} state - true = on; false = off
*/
function toggleLoading(state) {
    const loadingElement = document.getElementById('loader')
    const body           = document.querySelector('body')

    if(state){
        // show
        fadeIn(loadingElement)
        body.classList.add('overflow-hidden')
    }
    else{
        fadeOut(loadingElement)
        body.classList.remove('overflow-hidden')
    }
}