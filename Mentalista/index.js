    
    const Input = document.getElementById("valor");
    const ultrapassou = document.getElementById("ultrapassa");

// Limite de 0 a 10
    Input.addEventListener("keyup", () => {
        
        numero = parseInt(Input.value);

        console.log(typeof(numero))

        if(numero < 0) {
            ultrapassou.innerText = "0 é o valor mínimo!"
            Input.value = 0;
        }
        if(numero > 10) {
            ultrapassou.innerText = "10 é o valor máximo!"
            Input.value  = 10;
        } 
    // Por algum motivo, dá para digitar "e" e colocar um full número
        if(numero == NaN) {
            ultrapassou.innerText = "Apenas números!"
            Input.value  = "";
        }
    })

// Chutar um número
    function Chutar() {
        // Gera Número secreto :o
        let numeroSecreto = Math.floor(Math.random() * 11);

        let chute = document.getElementById("valor");
        let chuta = parseInt(chute.value);
        
        let resultado = document.getElementById("resultado");

        if(numeroSecreto == chuta) {
            resultado.innerText = "Número chutado: " + chuta + " Número Secreto: " + numeroSecreto + " Parabéns!"
        } else {
            resultado.innerText = resultado.innerText = "Número chutado: " + chuta + " Número Secreto: " + numeroSecreto + " Erraste! :/ "
        }
    }