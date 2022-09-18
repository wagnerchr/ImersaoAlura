const carta01 = {
    nome: "Bulbas",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6 
    }
}

const carta02 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2 
    }
}

const carta03 = {
    nome: "Shiryu de Dragão",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}

const cartas = [carta01, carta02, carta03];
let cartaMaquina;
let cartaJogador;

function  sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * 3)
        cartaMaquina = cartas[numeroCartaMaquina];
    let numeroCartaJogador = parseInt(Math.random() * 3)

    if(numeroCartaJogador == numeroCartaMaquina) {
        while(numeroCartaJogador == numeroCartaMaquina) {
            console.log("repetiu")
            numeroCartaJogador = parseInt(Math.random() * 3)
       }    
    }

    cartaJogador = cartas[numeroCartaJogador];

    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
}

function exibirOpcoes() {
    const opcoes = document.getElementById("opcoes");
    let opcoesTexto = ""

    for(let atributo in cartaJogador.atributos) {
        opcoesTexto += 
            "<input type='radio' name='atributo' value='"+atributo+"'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");

    for(let i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let elementoResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado] 
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if(valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Venceu :)"
    } else if(valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "voce perdeu '-'"
    } else {
        elementoResultado.innerHTML = "empate :/"
    }

    console.log(valorCartaMaquina )

  }
  
