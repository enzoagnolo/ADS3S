const cria = document.getElementById("mainImage");
const PASTEL = document.getElementById("btnImage");

const estados = {
    normal: "BOLSONARO.png",
    bravo: "ELE BRAVO.png",
    morto: "ELE MORTO.png",
    comendo: "ELE COMENDO.png",
    alimentado: "ELE FELIZ.png"
};

let contador = 0;
let intervalo = null;
let timeoutClique = null;
let timeoutVolta = null;

// =========================
// CONTROLE
// =========================
function controlador() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;
        console.log("tempo:", contador);

        if (contador == 10) {
            cria.src = estados.bravo;
        }

        if (contador == 20) {
            cria.src = estados.morto;
        }

    }, 1000);
}

controlador();

// =========================
// ALIMENTAR
// =========================
function alimentar() {

    console.log("comendo");

    // impede alimentar morto
    if (contador >= 30) {
        console.log("já morreu 💀");
        return;
    }

    contador = 0;
    cria.src = estados.comendo;

    if (timeoutClique) clearTimeout(timeoutClique);
    if (timeoutVolta) clearTimeout(timeoutVolta);

    timeoutClique = setTimeout(() => {
        cria.src = estados.alimentado;

        timeoutVolta = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}