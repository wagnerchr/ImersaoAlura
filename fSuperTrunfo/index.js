
// Cartas

const carta01 = {
    nome: "Bulbas",
    imagem: "https://img.elo7.com.br/product/zoom/31CCAE3/escultura-em-papel-pokemon-bulbassauro-com-base-em-pvc-actionfigure.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6 
    }
}

const carta02 = {
    nome: "Darth Vader",
    imagem: "https://ironstudios.vteximg.com.br/arquivos/ids/314491-1000-1000/257014_0.jpg?v=637955044723270000",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2 
    }
}

const carta03 = {
    nome: "Shiryu de Dragão",
    imagem: "https://s.aficionados.com.br/imagens/shiryu.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}

// --- 

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

    // exibirOpcoes();
    exibirCartaJogador();
}

// function exibirOpcoes() {
//     const opcoes = document.getElementById("opcoes");
//     let opcoesTexto = ""

//     for(let atributo in cartaJogador.atributos) {
//         opcoesTexto += 
//             "<input type='radio' name='atributo' value='"+atributo+"'>" + atributo;
//     }
//     opcoes.innerHTML = opcoesTexto;
// }

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
    let divResultado = document.getElementById("resultado")
    // let elementoResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado] 
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if(valorCartaJogador > valorCartaMaquina) {
        // elementoResultado.innerHTML = "Venceu :)"
        htmlResultado = "<p class='resultado-final'>Venceu! :)</p>"
    } else if(valorCartaMaquina > valorCartaJogador) {
        // elementoResultado.innerHTML = "voce perdeu '-'"
        htmlResultado = "<p class='resultado-final'>Perdeu :(</p>"
    } else {
        // elementoResultado.innerHTML = "empate :/"
        htmlResultado = "<p class='resultado-final'>Empatou! :/</p>"
    }

    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();

}
  
function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})` 
    const moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    const tagHtml = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = "";
    for(let atributo in cartaJogador.atributos) {
    opcoesTexto += 
            "<input type='radio' name='atributo' value='"+atributo+ "'>" + atributo + " " + cartaJogador.atributos[atributo] + "</br>";
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    
    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>" 
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})` 
    const moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    const tagHtml = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = "";
    for(let atributo in cartaMaquina.atributos) {
    opcoesTexto += 
            "<p type='text' name='atributo' value='"+ atributo+ "'>" + atributo + " " + cartaJogador.atributos[atributo] + "</p>";
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    
    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>" 

}