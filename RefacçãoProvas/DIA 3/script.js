    function mostrarTabela() {
    if (document.getElementById("tabelaJogos")) {
        return;
    }

    let img = document.createElement("img");
    img.src = "Tabela_Jogos.png"; 
    img.id = "tabelaJogos";
    img.style.display = "block";
    img.style.margin = "20px auto";
    img.style.maxWidth = "80%";
    img.style.borderRadius = "10px";

    document.body.appendChild(img);
}

function revelar() {

    let img = document.querySelector(".card img");
    img.src = "_vinicius_junior.png";

    let nome = document.getElementById("Nome");
    let rank = document.getElementById("Rank");
    let data = document.getElementById("Data_Nas");
    let altura = document.getElementById("Alutra");
    let posicao = document.querySelector('[id="Posição "]');

    nome.innerHTML = "Vinícius José Paixão de Oliveira Júnior ";
    nome.appendChild(rank); 

    rank.innerText = "9,5";

    data.innerText = "📅 12/07/2000 (25 anos)";
    altura.innerText = "📏 1,76 m";
    posicao.innerText = "🏃 Ponta-esquerda / Atacante";

    let elementos = [nome, data, altura, posicao];

    elementos.forEach(el => {
        el.classList.remove("placeholder", "placeholder-glow");
        el.classList.add("card-text");
    });
}