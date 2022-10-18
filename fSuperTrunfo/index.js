
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

const carta04 = {
nome: "JPG ROBADO",
imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg",
atributos: {
ataque: 10,
defesa: 100000,
magia: 0
} 
}

const carta05 = {
nome: "JPG ROBADO",
imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg",
atributos: {
ataque: 10,
defesa: 100000,
magia: 0
} 
}

const carta06 = {
nome: "JPG ROBADO",
imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg",
atributos: {
ataque: 10,
defesa: 100000,
magia: 0

} 
}

// --- 

let cartas = [carta01, carta02, carta03, carta04, carta05, carta06];
let ncartas = cartas.length;

let cartaMaquina;
let cartaJogador;

const deckJogador = [];
const deckComputador = [];


// Sortear cartas
function  sortearCarta() {

    // Distribuir Cartas
    for(let i = 0; i < 3; i++) {

        let numeroCartaJogador = parseInt(Math.random() * ncartas)  // sorteia index
        deckJogador[i] = cartas[numeroCartaJogador];    // add carta ao deck
        cartas.splice(numeroCartaJogador, 1); // remove carta da pilha
        ncartas--;

        let numeroCartaComputador = parseInt(Math.random() * ncartas)
        deckComputador[i] = cartas[numeroCartaComputador];
        cartas.splice(numeroCartaComputador, 1); // remove carta da pilha
        ncartas--;  // index -1 da pilha
    }

    // Mostrando Cartas
        const cartaJ = [];
        let divJogador = document.getElementById('deck-jogador');

    for(let i = 0; i < deckJogador.length; i++) {

        cartaJ[i] = document.createElement('div');
        cartaJ[i].classList.add('carta-jogador')
        

        let imgi = document.createElement('img');

        imgi.src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png";
        let img = document.createElement('img');
        img.src= deckJogador[i].imagem;
        img.classList.add('card-photo')

        let divAtributos = document.createElement('div');
        divAtributos.classList.add('div-atributos');

        
        for(let atributo in deckJogador[i].atributos) {


            let atr = "";

            atr = "<input type='radio' name='atributo' value='"+atributo+ "'>" + atributo + " " + deckJogador[i].atributos[atributo] + "</br>";


            let strr = document.createElement('p');
            strr.innerHTML = atr

        /*
            let atr = document.createElement('p');
            let atrInput = document.createElement('input');

            atrInput.type='radio';

            atr.appendChild(atrInput)
        */
         
            divAtributos.appendChild(strr);
        }

       

        
        let h3 = document.createElement('h3')
        h3.innerText = deckJogador[i].nome;

        cartaJ[i].appendChild(imgi);
        cartaJ[i].appendChild(img);
        cartaJ[i].appendChild(h3);
        cartaJ[i].appendChild(divAtributos)

        divJogador.appendChild(cartaJ[i]);
    }

    // let opcoesTexto = "";
    // for(let atributo in cartaMaquina.atributos) {
    // opcoesTexto += 
    //         "<p type='text' name='atributo' value='"+ atributo+ "'>" + atributo + " " + cartaJogador.atributos[atributo] + "</p>";
    // }
    // let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    
    // divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>" 
    




   
    

//     <div class="carta-jogador" >
//     <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" />
//     <h3></h3>
// </div>
// <div class="carta-jogador" >
//     <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" />                 
//     <h3></h3>
// </div>
// <div class="carta-jogador" >
//     <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" />
        
//     <h3></h3>







    // console.log(cartaJogador)

/*
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
*/
    // exibirOpcoes();
    //exibirCartaJogador();
}

/* function displayCards(playerDeck, computerDeck) {

    const cartaJ = [];

    for(let i = 0; i < playerDeck.length; i++) {

        cartaJ[i] = document.createElement('div');
        cartaJ[i].classList.add('carta-jogador')

        let imgi = document.createElement('img');
        imgi.src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png";
        
        let h3 = document.createElement('h3')

        cartaJ[i].appendChild(imgi);
        cartaJ[i].appendChild(h3);

        divJogador.appendChild(cartaJ[i]);
    }
} */


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

const imagem = new Image();
imagem.onload = function() {
    alert(this.width + ' x ' + this.height);

}

// imagem.src = "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"