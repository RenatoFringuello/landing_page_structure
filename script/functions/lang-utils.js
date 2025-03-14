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

function write_data(key, val){
    if (typeof val === "object" && val !== null){
        Object.entries(val).forEach(([key, value]) => {
            write_data(key, value)
        });
    }
    else{
        // vuol dire che si tratta di un valore
        console.log(key, val)
        inject_data(key, val)
    }
}

function inject_data(key, value){
    // recupero eventuali attributi nel nome
    let [id, attribute] = key.split('.')
    const item = document.getElementById(id)
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

async function load_language(lang='en'){
    /* 
        per ogni label nel json popolo gli elementi caricati
        nel JSON la prima key rappresenta ogni id degli elementi figli del MAIN 
        le key interne rappresentano i tag o id degli elementi su cui scrivo

        posso anche mettere id.attributo per inserire un valore nell'attributo
        es 
        (JSON)"hero":{
            "main-blockquote":"ciao come va"
        }
        (HTML)
        <section id="hero" class="position-relative">
            <div class="img-wrapper">
                <img class="img" src="https://picsum.photos/1920/1080?random=0" alt="">
            </div>
            <div class="hero-description position-absolute p-2 p-lg-4">
                <div class="description fs-1 mb-3">
                    <figure>
                        <blockquote id="main-blockquote">
                            ciao come va
                        </blockquote>
                    </figure>
                </div>
                <div class="c2a-wrapper d-inline-flex justify-content-between gap-3">
                    <button class="btn primary">Prenota Ora</button>
                    <button class="btn primary">Prenota Ora</button>
                </div>
            </div>
        </section>
     */
    labels = await fetchJSONData(`https://renatofringuello.github.io/landing_page_structure/public/lang/${lang.toLowerCase()}/labels.json`)

    // per ogni key recupero il dom e scrivo
    Object.entries(labels).forEach(([key, value]) => {
        write_data(key, value)
    });
}