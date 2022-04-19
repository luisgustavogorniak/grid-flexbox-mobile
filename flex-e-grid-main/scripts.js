const menuButton = document.querySelector('.header__menu')
const menu = document.querySelector('.side-menu')

menuButton.addEventListener('click', () =>{
    menu.classList.toggle('side-menu--active')
})