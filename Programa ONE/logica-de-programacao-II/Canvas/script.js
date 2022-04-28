const tela = document.querySelector("canvas");
let pincel = tela.getContext("2d")

// Fundo cinza
pincel.fillStyle = "lightgray"
pincel.fillRect(0, 0, 600, 400);

//Retangulo verde
pincel.fillStyle = "green"
pincel.fillRect(0, 0, 200, 400);

//Retangulo vermelho
pincel.fillStyle = "red"
pincel.fillRect(400, 0, 200, 400);

// Triangulo amarelo
pincel.fillStyle = "yellow"
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

//Circulo azul
pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300,200,50,0,2*3.14);
pincel.fill();


