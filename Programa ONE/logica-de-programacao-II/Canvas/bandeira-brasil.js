const canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");

// Retangulo verde
pincel.fillStyle = "green";
pincel.fillRect(0, 0, 600, 400);


//Triagulo superior
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 50);
pincel.lineTo(50, 200);
pincel.lineTo(550, 200);
pincel.fill();

//Triagulo inferior
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 350);
pincel.lineTo(50, 200);
pincel.lineTo(550, 200);
pincel.fill();

//Circulo azul central
pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2 * 3.14);
pincel.fill();

