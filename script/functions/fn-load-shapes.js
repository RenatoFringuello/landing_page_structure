function initShapes(numShapes){
    const itemsContainer = document.getElementById('items-container')
    const appContainer = document.getElementById('app')
    if (itemsContainer){

        const pageHeight = appContainer.getBoundingClientRect().height
        itemsContainer.style.height = `${pageHeight}px` 
        
        const itemShapes = ['orange', 'lemon', 'circle', 'square']
        const stepAngle  = 33 // 33deg
        
        // creo gli items
        for(let i=1; i<=numShapes; i++){
            // create the item
            const item = document.createElement('div')
            item.setAttribute('id', `noise-item-${i}`)
            item.className = `noise-item ${itemShapes[getRandomInt(0, itemShapes.length-1)]}-shape`
            
            // angle = i*step - (i*step * 2x); x=0|1; radom negative the angle calc
            const angle = i*stepAngle - (i*stepAngle*2*getRandomInt(0, 2))
            item.style.setProperty('--angle', `${angle}deg`)
            item.style.setProperty('--grad-angle', `${angle}deg`)
            
            // set the start gradient for the middle color
            item.style.setProperty('--gradient-start', `${getRandomInt(10, 90)}%`)
            
            /*
            set the position but never in the middle
            set the item or at the left  (between first 10% width) or
            set the item or at the right (between last  10% width)
            */
            const limit = 5   // %
            const max   = 100 // %
            
            // left = recupero con un random se posizionare a destra o sinistra e poi calcolo un altro rand per la posizione
            let xPos = getRandomInt(0, max) // da 0 a max
            if(false){
                xPos     = (xPos >= max/2) 
                ?getRandomInt(max-(limit*2), max-limit)
                :getRandomInt(limit, limit*2) 
            }
            
            // top = i * full page height / n item in modo da non metterli in riga
            item.style.setProperty('top',  `${i * (pageHeight/numShapes-1)}px`)
            item.style.setProperty('left', `${xPos}%`)
            
            itemsContainer.append(item)
        }
    }
}

function updateShapes(e){
    // foreach item calc the angle based on mouse position
    const noiseItems = document.querySelectorAll('.noise-item')
    noiseItems.forEach((item)=>{
        const rect = item.getBoundingClientRect();
        // center coordinates of the item
        const x = rect.left + (rect.width  / 2);
        const y = rect.top  + (rect.height / 2);
        
        // angle calculated on the line of the distance between center item and mouse pos
        let newAngle = Math.atan2(e.clientY - y, e.clientX - x) * (180 / Math.PI);
        newAngle = (isNaN(newAngle)) ?0 :newAngle;
        
        item.style.setProperty('--grad-angle', `${newAngle}deg`)
    })
}