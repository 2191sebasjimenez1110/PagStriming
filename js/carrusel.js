let fila = document.querySelector('.contenedor-carrusel');
let fila2 = document.querySelector('.contenedor-carrusel2');
let fila3 = document.querySelector('.contenedor-carrusel3');

const btnLeft = document.getElementById('btn-left'),
btnRight = document.getElementById('btn-right'),
btnLeft2 = document.getElementById('btn-left2'),
btnRight2 = document.getElementById('btn-right2'),
btnLeft3 = document.getElementById('btn-left3'),
btnRight3 = document.getElementById('btn-right3');

btnLeft.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
});
btnRight.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
});

btnLeft2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;
});
btnRight2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;
});

btnLeft3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;
});
btnRight3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;
});
