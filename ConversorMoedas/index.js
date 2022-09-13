function Converter() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    const valorDolar =
         parseFloat(valor)
    const cotacao = 
        5

    const valorReal = valorDolar * 
        cotacao

    console.log("Valor digitado em U$: " +
         valorDolar)
    console.log("Valor convertido em R$: " + valorReal);

    let valorConversao = document.getElementById("valorConvertido");
    const valorConvertido = "A conversão em real é R$ " + valorReal;
    valorConversao.innerHTML = valorConvertido;    
}
