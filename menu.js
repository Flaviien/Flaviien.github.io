const containerMenuElt = document.querySelector('.container-menu');
const menuElt = document.querySelector('.menu');
const blobsElts = document.querySelectorAll('.blob');
const btnMenuElt = document.querySelector('.btn-menu');
const iconBarsElt = document.querySelector('#icon-bars');
const iconSmileyElt = document.querySelector('#icon-smiley');

const containerInfoElt = document.querySelector('.container-info');
const infosElts = document.querySelectorAll('.info');



btnMenuElt.addEventListener('click', () => {
    menuElt.classList.add('active');
    iconBarsElt.style.opacity = "0";
    iconSmileyElt.style.opacity = "1";

})

let menuUp = false;
blobsElts.forEach(elt => {
    elt.addEventListener('click', (e) => {
        if(!menuUp) {
            console.log(e.currentTarget);
            containerMenuElt.style.height = "50vh";
            containerInfoElt.style.display = "block";
            menuUp = true;
        }

        infosElts.forEach(element => {
            element.style.display = "none";
        });
        
        /* switch (e.currentTarget.classList[1]) {
            case "blob-1":
                
                infosElts[0].style.display = "block";
                break;
            case "blob-2":
                infosElts[1].style.display = "block";
                break;
            case "blob-3":
                break;
        } */

        for (let i = 1; i <= 8; i++) {
            if(e.currentTarget.classList[1] === `blob-${i}`) {
                infosElts[i - 1].style.display = "block";
            }
        }

    })
});



