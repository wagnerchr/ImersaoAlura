// Inicio Game
    let numeroSecreto = Math.floor(Math.random() * 11);
    let tentativas = 3;
    let acabou = false;
    
    let tentativasElemento = document.getElementById("tentativas");
    let resultado = document.getElementById("resultado");
    let btnChute = document.getElementById("btn-chute");  

// Limite de 0 a 10
    const Input = document.getElementById("valor");
    const ultrapassou = document.getElementById("ultrapassa");
    const jogarNovamente = document.getElementById("jogar-novamente");

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

    // Pegando Elementos
        let chute = document.getElementById("valor");
        let chuta = parseInt(chute.value);

        let limiteTentativas = 0; 
        let maiorMenor = numeroSecreto > chuta ? "maior" : "menor";

        if(acabou != true ) {
            if(numeroSecreto == chuta) {
                resultado.innerText = "Parabens! O número secreto era " + numeroSecreto + "! :)"
                acabou = true;
                jogarNovamente.style["visibility"] = "visible";
            } else if(numeroSecreto != chuta && tentativas != limiteTentativas + 1) {
                
                resultado.innerText = "Não, não é esse. O número secreto é: " + maiorMenor + " que esse...";
                tentativas = tentativas - 1;

                tentativas != limiteTentativas + 1 ?  
                    tentativasElemento.innerText = "Você tem mais " + tentativas + " tentativas!" 
                    : tentativasElemento.innerText = "Você tem mais UMA tentativa!"
            } else {
                resultado.innerText = "Acabaram as tentarivas :("
                acabou = true;
                jogarNovamente.style["visibility"] = "visible";
            }
        }
    }

    function JogarNovamente() {
    // Novo número secreto, novas tentativas
        numeroSecreto = Math.floor(Math.random() * 11); 
        tentativas = 3; // 
        acabou = false;
    
        tentativasElemento.innerText = "Okay, vamos jogar de novo :)";
        resultado.innerText = "";
        jogarNovamente.style["visibility"] = "hidden";
    }