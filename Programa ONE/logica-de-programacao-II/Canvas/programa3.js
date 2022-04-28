const tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}
function alvo() {
    desenhaCirculo(300, 200, raio + 20, 'red'); // maior círculo
    desenhaCirculo(300, 200, raio + 10, 'white');
    desenhaCirculo(300, 200, raio, 'red'); // menor circulo
}

alvo();

function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if ((x >= 300 - raio && x <= 300 + raio) && (y >= 200 - raio && y <= 200 + raio)) {
        alert("ACERTOU")
    }
}

tela.onclick = dispara;


/*
let x;
let y;

let collor = ["blue", "yellow", "purple", "black", "orange", "green", "red", "pink", "white"]

function sorteiaCor() {
    i = Math.floor(Math.random() * collor.length);
    return collor[i];
}

function xPositionRandom() {
    x = Math.floor(Math.random() * 1200);
    return x;
}

function yPositionRandom() {
    y = Math.floor(Math.random() * 800);
    return y;
}

function desenhaCirculo(evento) {

    sorteiaCor();
    xPositionRandom();
    yPositionRandom();



    pincel.fillStyle = collor[i];
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14)
    pincel.fill();

    console.log(`${x}, ${y}`);
}

setInterval(() => {
    desenhaCirculo();
}, 1);

tela.onclick = desenhaCirculo;


let collor = ["blue", "red", "green"];
let indiceCor = 0;
let raio = 10;
let desenha = false;

tela.oncontextmenu = mudaCor;

tela.onmousedown = function () {
    desenha = true;
}
tela.onmouseup = function (){
    desenha = false;
}  
let paleta = document.querySelector('input');

tela.onmousemove = function (evento) {
    
    if (true) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        
        pincel.fillStyle = paleta.value
        pincel.beginPath();

        if (evento.shiftKey && raio <= 40) {
            raio += 10;
        }

        if (evento.altKey && raio > 10) {
            raio -= 5;
        }

        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
    }
    //console.log(x + ',' + y);
}

function mudaCor() {

    indiceCor++;

    if (indiceCor >= collor.length) {
        indiceCor = 0;
    }

    console.log(indiceCor);
    return false;
}
*/



