const tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);
desenhaBandeiraBrasil();

function desenhaBandeiraBrasil() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = "green";
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle = "yellow";
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(50, 200);
    pincel.lineTo(300, 350);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.fillStyle = "darkblue";
    pincel.beginPath();

    pincel.arc(300, 200, 100, 0, 2 * 3.14);
    pincel.fill();
}


function desenhaBandeiraAlemanha() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'black';
    pincel.fillRect(0, 0, 600, 133);

    pincel.fillStyle = 'red';
    pincel.fillRect(0, 133, 600, 133);

    pincel.fillStyle = 'yellow';
    pincel.fillRect(0, 266, 600, 133);
}

let bandeira = true;

function trocabandeira() {

    if (bandeira) {
        desenhaBandeiraBrasil();
    } else {
        desenhaBandeiraAlemanha();
    }

    bandeira = !bandeira
}

setInterval(trocabandeira, 1000);



/*
let x = 20;
let y = 20;

function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {

    limpaTela();
    desenhaCirculo(x, y, 10);
    console.log(x, y)
}

setInterval(atualizaTela, 20);

let cima = "w";
let baixo = "s";
let esquerda = "a";
let direita = "d";
let pixel = 10;

function leDoTeclado(evento) {
    if (evento.key == cima) {
        y -= pixel;
    } else if (evento.key == baixo) {
        y += pixel;
    } else if (evento.key == direita) {
        x += pixel;
    } else if (evento.key == esquerda) {
        x -= pixel;
    }
}

document.onkeydown = leDoTeclado;
*/




/*
function desenhaBolinha(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

let x = 10;
let raio = 10;
let sentido = 1
let pulso = 1;


function moveBolinha() {
    limpaTela();

    if (x > 588) {
        sentido = -1;
    } else if (x < 10) {
        sentido = 1;
    }
    if (raio > 20) {
        pulso = -1;
    } else if (raio < 10) {
        pulso = 1;
    }

    desenhaBolinha(x, 20, raio, "blue");
    x += sentido;
    raio += pulso;
    console.log(x);
}

setInterval(moveBolinha, 30)
*/









