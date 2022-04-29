const tela = document.querySelector("canvas");
let pincel = tela.getContext("2d")

/*
function desenhaEsquadro(xa, ya, xc, yc, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, yc);
    pincel.lineTo(xc, yc);
    pincel.fill();
}

desenhaEsquadro(50, 50, 400, 400, "black");
desenhaEsquadro(100, 175, 275, 350, "white");*/

function desenhaEsquadro(xa, ya, xc, yc, cor) {
    pincel.fillStyle = cor
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, yc);
    pincel.lineTo(xc, yc);
    pincel.fill();

    pincel.fillStyle = 'white'
    pincel.beginPath();
    pincel.moveTo((6*xa + xc)/7, (9*ya + 5*yc)/14);
    pincel.lineTo((6*xa + xc)/7, (ya + 6*yc)/7);
    pincel.lineTo((5*xa + 9*xc)/14, (ya + 6*yc)/7);
    pincel.fill();

}

desenhaEsquadro(50, 50, 400, 400, 'black');
// desenhaEsquadro(100, 100, 800, 800, 'black');