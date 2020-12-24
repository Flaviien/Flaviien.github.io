const containerMenuElt = document.querySelector('.container-menu');
const blobTitleElt = document.querySelector('.blob-title');
const blobHoverTitleElt = document.querySelector('.blob-hover-title');

const blobTitle = ["Contactez-moi", "Mon profil", "Festival de film", "Agence immobilière", "Agence immobilière;Version2", "Let's Eat Reviews", "Agence Chalet et Caviar", "Titre 8"];


const menuElt = document.querySelector('.menu');
const blobsElts = document.querySelectorAll('.blob');
const btnMenuElt = document.querySelector('.btn-menu');
const iconBarsElt = document.querySelector('#icon-bars');
const iconSmileyElt = document.querySelector('#icon-smiley');

const containerInfoElt = document.querySelector('.container-info');
const infosElts = document.querySelectorAll('.info');


btnMenuElt.addEventListener('click', () => {
    menuElt.classList.add('active');
    btnMenuElt.style.opacity = 0;
    setTimeout(() => {
        btnMenuElt.style.display = "none";
    }, 200)

})

let menuUp = false;

blobsElts.forEach(elt => {
     elt.addEventListener('mouseenter', (e) => {
        for (let i = 1; i <= 8; i++) {
           if (e.currentTarget.classList[1] === `blob-${i}`){
                blobHoverTitleElt.innerHTML = blobTitle[i - 1];
            }
        }
    })

    elt.addEventListener('mouseleave', (e) => {
        for (let i = 1; i <= 8; i++) {
            if (e.currentTarget.classList[1] === `blob-${i}`){
                blobHoverTitleElt.innerHTML = "";
            }
        }   
    }) 

    elt.addEventListener('click', (e) => {
        if (!menuUp) {
            // containerMenuElt.style.height = "50vh";
            containerMenuElt.classList.add("container-menu-position");
            setTimeout(() => {
                containerInfoElt.style.display = "block";
            }, 200)
            menuUp = true;
        }

        infosElts.forEach(element => {
            element.style.display = "none";
        });

        for (let i = 1; i <= 8; i++) {
            if (e.currentTarget.classList[1] === `blob-${i}`) {
                infosElts[i - 1].style.display = "block";
                blobTitleElt.innerHTML = blobTitle[i - 1]

                if (e.currentTarget.classList[1] === 'blob-1') {
                    blobsElts[0].children[0].setAttribute('src', "resources/envelope-open-regular.svg");
                } else {
                    blobsElts[0].children[0].setAttribute('src', "resources/envelope-regular.svg");
                }
            }
        }
    })
});