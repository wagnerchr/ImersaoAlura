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
let jogador;

function  sortearCarta() {
   let numeroCartaMaquina = parseInt(Math.random() * 3)
   let numeroJogador = parseInt(Math.random() * 3)

    if(numeroJogador == numeroCartaMaquina) {
        while(numeroJogador == numeroCartaMaquina) {
            console.log("repetiu")
            numeroJogador = parseInt(Math.random() * 3)
       }    
    }

    console.log(cartas[numeroCartaMaquina])
    console.log(cartas[numeroJogador])
}
