// import label_IT from '../../public/lang/it/labels.json' assert { type: 'json' };
// import label_DU from '../../public/lang/du/labels.json' assert { type: 'json' };
// import label_FR from '../../public/lang/fr/labels.json' assert { type: 'json' };
// import label_EN from '../../public/lang/en/labels.json' assert { type: 'json' };

let labels = undefined

function fetchJSONData(path) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log(data)
            return response.json();  
        })
        .then(data => console.log(data))  
        .catch(error => console.error('Failed to fetch data:', error)); 
}

function load_language(lang=undefined){
    /* 
        per ogni label nel json popolo gli elementi caricati
        nel JSON la prima key rappresenta ogni id degli elementi figli del MAIN 
        le key interne rappresentano i tag o id degli elementi su cui scrivo
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

    switch (lang) {
        case "IT":
            // labels = label_IT
            fetchJSONData('https://github.com/RenatoFringuello/landing_page_structure/blob/main/public/lang/it/labels.json')
            break;
        // case "DU":
        //     labels = label_DU
        //     break;
        // case "FR":
        //     labels = label_FR
        //     break;
        default:
            // EN
            // labels = label_EN
            break;
    }

    // per ogni key recupero il dom e scrivo
    console.log(labels)
}