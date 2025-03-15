// import label_IT from '../../public/lang/it/labels.json' assert { type: 'json' };
// import label_DU from '../../public/lang/du/labels.json' assert { type: 'json' };
// import label_FR from '../../public/lang/fr/labels.json' assert { type: 'json' };
// import label_EN from '../../public/lang/en/labels.json' assert { type: 'json' };

let labels = undefined

async function fetchJSONData(path) {
    try {
        const response = await fetch(path); // URL del JSON remoto
        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }
        return await response.json(); // Converti la risposta in JSON
        // console.log(data); // Usa i dati
    } catch (error) {
        console.error('Errore nel recupero del JSON:', error);
    }
}

/**
 * If the item exists then write as inner html or attribute the value passed
 * @param {*} item - the item to write onto
 * @param {*} attribute - the attribute (optional)
 * @param {*} value - the value to write
 */
function write_DOM(item, value, attribute=undefined){
    if(item)
        if(attribute){
            // nel caso in cui l'attributo sia presente valorizzo quello
            item.setAttribute(attribute, value)
        }
        else{
            // altrimenti innerHTML
            item.innerHTML = value
        }
}

/**
 * viene passata una key del JSON con il suo value
 * seguire la sintassi dei selettori per indicare il valore nel JSON.
 * 
 * Arrivati a questo punto il valore sarà inserito nel elemento
 * 
 * es. 
 * 
 * key   = #id_img@src
 * 
 * value = https://picsum.photos/1920/1080?random=0
 * 
 * l'elemento con id id_img avrà l'attributo con valore = value
 * 
 * lista selettori
 * - \# => id
 * - . => classe
 * - @ => attributo
 * 
 * @param {String} key 
 * @param {String} value 
 */
function inject_data(key, value, isArray=false){
    // recupero eventuali attributi nel nome
    let [selector, attribute] = key.split('@')
    
    // recupero il dom
    let item = document.querySelector(selector)

    // nel caso si tratti di un array
    if(isArray){
        // recupero tutti gli elementi
        const item = document.querySelectorAll(key)
        item.forEach((el, i) => {
            write_DOM(el, value[i], attribute)
        })
    }
    else{
        write_DOM(item, value, attribute)
    }
}

function write_data(k, val){
    
    // console.log(k, val)
    // nel caso il value sia un oggetto rientro nel metodo fino a quando non scrivo
    if(Array.isArray(val)){
        // nel caso in cui value sia un array faccio un querySelectorAll
        inject_data(k, val, true)
    }
    else if (typeof val === "object" && val !== null){
        Object.entries(val).forEach(([key, value]) => {
            write_data(key, value)
        });
    }
    else{
        // vuol dire che si tratta di un valore
        // console.log(key, val)
        inject_data(k, val)
    }
}

/** 
    per ogni label nel json popolo gli elementi caricati
    nel JSON la prima key rappresenta ogni id degli elementi figli del MAIN 
    le key interne rappresentano i tag o id degli elementi su cui scrivo

    posso anche mettere id.attributo per inserire un valore nell'attributo
    es 

    (JSON) 
    "#hero":{
        "#main-blockquote":"ciao come va"
    }

    (HTML)
    "\<blockquote id="main-blockquote">ciao come va\</blockquote>"
*/
async function load_language(lang='en'){
    
    labels = await fetchJSONData(`https://renatofringuello.github.io/landing_page_structure/public/lang/${lang.toLowerCase()}/labels.json`)

    // per ogni key recupero il dom e scrivo
    Object.entries(labels).forEach(([key, value]) => {
        write_data(key, value)
    });
}