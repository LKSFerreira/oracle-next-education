let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {

        let erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel")

            let pacientes = JSON.parse(xhr.responseText);
            console.log(pacientes);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });

        } else {
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("erro-ajax");
            console.log(`Erro: ${xhr.status}`);
        }
    });
    
    xhr.send();
});