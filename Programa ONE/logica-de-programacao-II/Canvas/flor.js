const tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
}

desenhaCirculo(300, 200, 50, "red");
desenhaCirculo(300, 300, 50, "blue");
desenhaCirculo(300, 100, 50, "yellow");
desenhaCirculo(400, 200, 50, "black");
desenhaCirculo(200, 200, 50, "orange");

