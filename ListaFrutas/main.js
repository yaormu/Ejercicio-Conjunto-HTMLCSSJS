let color = document.getElementById("wrapper");
let buscaFrutas = document.getElementsByClassName("frutas");

const color1 = () => {
    color.style.backgroundColor = "rgb(122 51 77 / 46%)";

    for (var i = 0; i<buscaFrutas.length; i++) {
        buscaFrutas[i].classList.remove("frutasImpar");
        buscaFrutas[i].classList.add("frutasPar");
     }
}

const color2 = () => {
    color.style.backgroundColor = "rgb(55 122 51 / 53%)";

    for (var i = 0; i<buscaFrutas.length; i++) {
        buscaFrutas[i].classList.remove("frutasPar");
        buscaFrutas[i].classList.add("frutasImpar");
     }
}
