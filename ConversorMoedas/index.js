function Converter() {

    // Selecionar campo
    let valorElemento = document.getElementById("valor");
    // Pegar valor digitado
    let valor = valorElemento.value;
    // Converter para float
    const valorDolar = parseFloat(valor);
  
// Moeda escolhida 
    const btnSelected = document.getElementById("checkCoin");
    const escolhaConversao = btnSelected.innerText.substr(13)
    console.log(escolhaConversao);
    

    const valorReal = valorDolar * EscolherMoeda(escolhaConversao);


    let valorConversao = document.getElementById("valorConvertido");
    const valorConvertido = "A conversão em real é R$ " + valorReal;
    valorConversao.innerHTML = valorConvertido;    
}


function EscolherMoeda(evt) {

    const btnSelected = document.getElementById("checkCoin")
    btnSelected.innerHTML = "Selecionado: " // Limpando
    btnSelected.innerHTML += evt;

    let cotacao;

    if(evt == "dolar")
        cotacao = 5.19
    else if(evt == "libra") 
        cotacao = 5.97
    else if(evt == "yen")
        cotacao = 0.036
    else {
        console.log("deu erro aqui :/")
        cotacao = 0;
    }

    return cotacao;
}

