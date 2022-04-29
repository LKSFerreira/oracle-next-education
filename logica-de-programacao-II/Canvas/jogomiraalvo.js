const tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

let raio = 10;
let x;
let y;


function posicaoRandom() {
    x = 40 + Math.random() * 560;
    y = 40 + Math.random() * 360;
}

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function alvo() {
    posicaoRandom();
    limpaTela();
    desenhaCirculo(x, y, raio + 20, 'red'); // maior círculo
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red'); // menor circulo
}


let nivel = 2000;

function dispara(evento) {

    var xAlvo = evento.pageX - tela.offsetLeft;
    var yAlvo = evento.pageY - tela.offsetTop;

    if ((xAlvo >= x - raio && xAlvo <= x + raio) && (yAlvo >= y - raio && yAlvo <= y + raio)) {
        console.log("ACERTOU")

        console.log(nivel);
    }
}


    setInterval(alvo, nivel);


tela.onclick = dispara;
