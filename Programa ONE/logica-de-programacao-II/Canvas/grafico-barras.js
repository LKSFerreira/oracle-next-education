const canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");

let serie2015 = [50, 25, 20, 5]
let serie2016 = [65, 20, 13, 2]
let cores = ["blue", "green", "yellow", "red"]

function desenhaBarra(x, y, serie, cores, texto) {

    for (i = 0; i <= serie.length; i++) {
        pincel.fillStyle = cores[i];
        pincel.fillRect(x, y, 100, serie[i]);
        y = y + serie[i];



    }

    let somaY = serie.reduce(function (soma, i) {
        return soma + i;
    });

    pincel.fillStyle = "black";
    pincel.font = "20px arial"
    pincel.fillText(texto, x + 30, somaY + 50 + 20);
    console.log(somaY);

}





desenhaBarra(50, 50, serie2015, cores, "2015")
desenhaBarra(200, 50, serie2016, cores, "2016")