let indiceAtual = 0;
let intervaloSlides;
const imgs = document.querySelectorAll('.carousel-item');

function mostrarImgAtual() {
    indiceAtual++;

    if (indiceAtual >= imgs.length) {
        indiceAtual = 0;
    } 

    const deslocamento = -indiceAtual * 100;
    document.querySelector('.carousel').style.transform = `translateX(${deslocamento}%)`;
}

mostrarImgAtual();
intervaloSlides = setInterval(mostrarImgAtual, 7000);
