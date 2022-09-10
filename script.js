const showNavBtn = document.getElementById('show-menu-button'); 
const nav = document.querySelector('nav');


showNavBtn.addEventListener('click', () => {
    if(nav.classList.contains('visible')) {
        nav.classList.remove('visible');
        showNavBtn.innerHTML = `<img src="images/icon-hamburger.svg" alt="">`;
    }else { 
        nav.classList.add('visible');
        showNavBtn.innerHTML = `<img src="images/icon-close.svg" alt="">`;
    }
})