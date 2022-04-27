const canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");


/*
function desenhaQuadrado(x, y, collor) {
    pincel.fillStyle = collor;
    pincel.fillRect(x, y, 50, 50);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x, y, 50, 50);
}

let x = 0;

while(x < 600) {
    desenhaQuadrado(x, 0, "green");
    desenhaQuadrado(x, 50, "red");
    desenhaQuadrado(x, 100, "red");
    x += 50;
}


for (x = 0; x < 600; x+=50) {
    desenhaQuadrado(x, 0, "green");
    desenhaQuadrado(x, 50, "red");
    desenhaQuadrado(x, 100, "blue");
}
*/

/*
let x;
let y;
let tamanho;
let cor;
*/



function desenhaCirculo(x, y, tamanho, cor) {
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x, y, tamanho, tamanho);

}

desenhaCirculo(0, 0, 50, "green");
desenhaCirculo(50, 0, 50, "green");
desenhaCirculo(100, 0, 50, "green");
desenhaCirculo(150, 0, 50, "white");

function escreveTexto(cor, tamanho, type, altura, posicao, texto) {
    pincel.font = `${tamanho}px ${type}`;
    pincel.fillStyle = cor;
    pincel.fillText(texto, altura, posicao);
}

escreveTexto("red", 20, "Helvetica", 0, 300, "ESTO ESCRITO AQUI, VAMO QUE VAMO");