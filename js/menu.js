document.querySelector('#mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('#bottom').classList.toggle('mobile-menu-height');
});

document.querySelector('#mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('#mobile-menu-icon').classList.toggle('spin');
});

document.querySelectorAll('.icon-wrapper').forEach(elem => elem.addEventListener("click", function(event) {
    event.target.nextElementSibling.classList.toggle('show-info');
}));

document.querySelector('.fa-envelope').addEventListener('click', () => {
    document.querySelector('.tlf').classList.remove('show-info');
});

document.querySelector('.fa-phone').addEventListener('click', () => {
    document.querySelector('.top-mail').classList.remove('show-info');
});