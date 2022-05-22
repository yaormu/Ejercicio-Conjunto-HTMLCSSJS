const nombres = document.getElementById("name");
const correo = document.getElementById("email");
const asunto = document.getElementById("asunto");
const comentario = document.getElementById("comment");

const form = document.getElementById("survey-form");

const parrafo = document.getElementById("warnings1");
const parrafo2 = document.getElementById("warnings2");
const parrafo3 = document.getElementById("warnings3");
const parrafo4 = document.getElementById("warnings4");

form.addEventListener("submit", e => {
    e.preventDefault();
    envioDatos();
})

const envioDatos = () => {

    let bander = false;
    //let mensaje = "";
    let warnings = "";
    let warnings2 = "";
    let warnings3 = "";
    let warnings4 = "";

    if (nombres.value === null || nombres.value === "") {
        //mensaje += "Se esperaban al menos un nombre\n";
        warnings += `Campo nombre requerido<br>`
        bander = true;
    } else {
        console.log(nombres.value);
    }

    if (correo.value === null || correo.value === "") {
        //mensaje += "Se esperaba un correo electronico\n";
        warnings2 += `Campo correo requerido<br>`
        bander = true;
    } else {
        console.log(correo.value);
    }

    if (asunto.value === null || asunto.value === "") {
        //mensaje += "Se esperaba un asunto\n";
        warnings3 += `Campo asunto requerido<br>`
        bander = true;
    } else {
        console.log(asunto.value);
    }

    if (comentario.value === null || comentario.value === "") {
        //mensaje += "Se esperaban un mensaje escrito\n";
        warnings4 += `Campo comentarios requerido<br>`
        bander = true;
    } else {
        console.log(comentario.value);
    }

    if (bander == true) {
        //alert(mensaje);
        parrafo.innerHTML = warnings;
        parrafo2.innerHTML = warnings2;
        parrafo3.innerHTML = warnings3;
        parrafo4.innerHTML = warnings4;
    } else {
        parrafo.innerHTML  = "";
        parrafo2.innerHTML = "";
        parrafo3.innerHTML = "";
        parrafo4.innerHTML = "";
    }

    return false;
    
}
