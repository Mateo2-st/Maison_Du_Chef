// Seleccionamos los elementos
const iconoMenu = document.querySelector('.iconoMenu');
const menuLateral = document.getElementById('menu-lateral');
const botonCerrar = document.getElementById('cerrar-menu');
const overlay = document.getElementById('overlay');

iconoMenu.addEventListener('click', () => {
    menuLateral.classList.add('activo');
    overlay.classList.add('activo');
});

botonCerrar.addEventListener('click', () => {
    menuLateral.classList.remove('activo');
    overlay.classList.remove('activo');
});


overlay.addEventListener('click', () => {
    menuLateral.classList.remove('activo');
    overlay.classList.remove('activo');
});
