const cria = document.getElementById("mainImage");

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
// CONTROLE (tempo)
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

    if (contador >= 20) {
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

// =========================
// MODO CLARO / ESCURO
// =========================
function toggleModo() {
    const body = document.body;
    const btn = document.getElementById("modoBtn");

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        btn.innerText = "Modo Claro";
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        btn.innerText = "Modo Escuro";
    }
}

// =========================
// FERLINI 🔥
// =========================
function mostrarFerlini() {
    const img = document.getElementById("ferliniImg");

    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}
