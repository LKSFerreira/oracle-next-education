const tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

// cabeça
pincel.fillStyle = "darkgreen";
pincel.fillRect(125, 50, 350, 300);

//boca
pincel.fillStyle = "black";
pincel.fillRect(235, 240, 40, 110)
pincel.fillRect(345, 240, 40, 110)

//nariz
pincel.fillRect(275, 190, 70, 100)

//olhos
pincel.fillRect(185, 100, 90, 90)
pincel.fillRect(345, 100, 90, 90)
