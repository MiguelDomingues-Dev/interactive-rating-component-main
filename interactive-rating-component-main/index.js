let displayNone = document.querySelector(".boxContentTwo"); 
let boxContentUn = document.querySelector(".boxContentUn"); 
let result = document.querySelector(".infoSelect")

let botaoSelecionado = null

function selecionarBotao(item) {
    
    // Limpa a seleção de todos os itens
    let itens = document.querySelectorAll(".selected-avaliation button");
    itens.forEach(function (i) {
        i.classList.remove("selecionado");
    });
    // Seleciona o item clicado
    item.classList.add("selecionado");

    //Armazena os dados que foi selecionado 
    botaoSelecionado = item

    //Retorna o texto do Botão Selecionado.
    return item.textContent
}

function submit() {
    if (displayNone.style.display == 'none' && boxContentUn.style.display == 'block' && botaoSelecionado > null) {
        alert("Selecione uma avalição válida!")
    } else {
        boxContentUn.style.display = 'none';
        displayNone.style.display = 'block';
        result.innerHTML = `${selecionarBotao(botaoSelecionado)}`
    }
}