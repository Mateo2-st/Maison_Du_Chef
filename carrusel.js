const carrusel = document.querySelector(".carruselItems");
const slides = document.querySelectorAll(".carruselItems img");

let index = 0;

function moverCarrusel() {
  index++;
  if (index >= slides.length) {
    index = 0; 
  }
  carrusel.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(moverCarrusel, 3000);
