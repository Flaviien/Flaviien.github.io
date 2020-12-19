const containerMenu = document.querySelector('.container-menu');
const btnMenu = document.querySelector('.btn-menu');
const iconBars = document.querySelector('#icon-bars');
const iconSmiley = document.querySelector('#icon-smiley');


btnMenu.addEventListener('click', () => {
    containerMenu.classList.add('active');
    iconBars.style.opacity = "0";
    iconSmiley.style.opacity = "1";

})