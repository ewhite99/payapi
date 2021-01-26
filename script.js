const menuIcon = document.querySelector('#menu')
const menu = document.querySelector('.mobile-menu')
const closeIcon = document.querySelector('#close-menu')

menuIcon.addEventListener('click', () => {
    menu.style.transform = 'translate3d(0vw, 0, 0)';
})

closeIcon.addEventListener('click', () => {
    menu.style.transform = 'translate3d(100vw, 0, 0)';
})