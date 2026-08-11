function mostrarMas() {

    document
        .getElementById("informacion")
        .classList.remove("oculto");

    document
        .getElementById("informacion")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function volverInicio() {

    document
        .getElementById("inicio")
        .scrollIntoView({
            behavior: "smooth"
        });
}