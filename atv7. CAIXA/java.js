const produtos = {
	"123": {"nome": "arroz", "preco": 9.90},
	"456": {"nome": "feijão", "preco": 19.90},
	"789": {"nome": "óleo", "preco": 29.90},
	"147": {"nome": "macarrão", "preco": 39.90}
};

let carrinho = [];

const audio = new Audio("front_ai-ai-aiii-jake.mp3");

window.onload = () => {
	document.getElementById("cod").focus();	
}

function addProduto(){
	const codElement = document.getElementById("cod");
	const qtdElement = document.getElementById("qtd");

	const codValue = codElement.value;
	const qtdValue = qtdElement.value;

	if(!produtos[codValue]){
		alert("Produto não Cadastrado");
		return;
	}
	
	const produtoBase = produtos[codValue];

	const item = {
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		quantidade: qtdValue,
		subTot: produtoBase.preco * qtdValue
	};

	carrinho.push(item);
	audio.currentTime = 0;
	audio.play();

	codElement.value = "";
	qtdElement.value = 1;
	
	atualizarTela();
}

function atualizarTela(){
	
	const list = document.getElementById("lista");
    list.innerHTML = "";	
	let total = 0;
	
	carrinho.forEach((item, index) => {
		total += item.subTot;
		
		const li = document.createElement("li");
		li.className = "list-group-item";
		
		li.innerHTML = `<div class="d-flex"> <strong> ${item.nome}
		</strong> <small>${item.quantidade} X ${item.preco} = 
		<strong> ${item.subTot}</strong></small></div>`;
		
		list.appendChild(li);
	});
	
}