
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


let cartaMaquina;
let cartaJogador;

// Decks com os objs
const deckJogador = [];
const deckComputador = [];

// Deck com divs
const cartaJ = [];
const cartaC = [];

// INICIO GAME
function inicioJogo() {

    // Distribuindo cartas
    let numbercards = Math.floor(cartas.length / 2)       // DANGER, IRÁ MUDAR 
    let ncartas = cartas.length;      

    for(let i = 0; i < numbercards; i++) {

        // Sortear index, adicionar carta ao deck, tirar do monte

        let numeroCartaJogador = parseInt(Math.random() * ncartas)  
        deckJogador[i] = cartas[numeroCartaJogador];   
        cartas.splice(numeroCartaJogador, 1); 
        ncartas--;

        let numeroCartaComputador = parseInt(Math.random() * ncartas)
        deckComputador[i] = cartas[numeroCartaComputador];
        cartas.splice(numeroCartaComputador, 1); 
        ncartas--;   
    }

    // Mostrar Cartas 
      
        let divJogador = document.getElementById('deck-jogador');
        let divComputador = document.getElementById('deck-computador');

    // Carregando Cartas Jogador

        JogadorCartas(divJogador,  cartaJ);
        ComputadorCartas(divComputador, cartaC);       

}

// DISPLAY CARDS
    function JogadorCartas(divJogador, cartaJ) {

    // Cria divs para cada carta do deck
    for(let i = 0; i < deckJogador.length; i++) {

        cartaJ[i] = document.createElement('div');
        cartaJ[i].classList.add('carta-jogador')
        
        // modelo carta
            let imgi = document.createElement('img');
            imgi.src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png";

        // foto carta
            let img = document.createElement('img');
            img.src = deckJogador[i].imagem;
            img.classList.add('card-photo')

        // atributos da carta
            let divAtributos = document.createElement('div');
            divAtributos.classList.add('div-atributos');
            
            for(let atributo in deckJogador[i].atributos) {

                let atr = "";
                atr = "<input type='radio' name='atributo' value='"+atributo+ "'>" + atributo + " " + deckJogador[i].atributos[atributo] + "</br>";

                let strr = document.createElement('p');
                strr.innerHTML = atr

                divAtributos.appendChild(strr);
            }

        // nome da carta
            let h3 = document.createElement('h3')
            h3.innerText = deckJogador[i].nome;

        // funcão onclick
            cartaJ[i].onclick= function() {
                for(let carta in deckJogador) {
                    cartaJ[carta].style.background="";
                }
                this.style.background="red"
            };
        
        // Adicionando elementos à div
        cartaJ[i].appendChild(imgi);
        cartaJ[i].appendChild(img);
        cartaJ[i].appendChild(h3);
        cartaJ[i].appendChild(divAtributos)

        // Carta adcionada ao container deckJogador
        divJogador.appendChild(cartaJ[i]);
    }
    }

    function ComputadorCartas(divComputador, cartaC) {
        for(let i = 0; i < deckComputador.length; i++) {

            cartaC[i] = document.createElement('div');
            cartaC[i].classList.add('carta-computador')
            
            let imgi = document.createElement('img');

            imgi.src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png";
            let img = document.createElement('img');
            img.src= deckComputador[i].imagem;
            img.classList.add('card-photo')

            

            let divAtributos = document.createElement('div');
            divAtributos.classList.add('div-atributos');

            // for(let atributo in deckComputador[i].atributos) {

            //     let atr = "";

            //     atr = "<input type='radio' name='atributo' value='"+atributo+ "'>" + atributo + " " + deckJogador[i].atributos[atributo] + "</br>";

            //     let strr = document.createElement('p');
            //     strr.innerHTML = atr

            
            //     divAtributos.appendChild(strr);
            // }

            let h3 = document.createElement('h3')
            h3.innerText = deckComputador[i].nome;

            // Escondendo detalhes
                img.src="https://cdn.vox-cdn.com/thumbor/-famZFxgMFo2h1HQ5UjIIcBszrI=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/53254027/who_pokemon.0.jpg"
                h3.innerHTML = "???";
            
            cartaC[i].appendChild(imgi);
            cartaC[i].appendChild(img);
            cartaC[i].appendChild(h3);
            cartaC[i].appendChild(divAtributos)

            // cartaC[i].onclick= function() {
            //     for(let carta in deckComputador) {
            //         cartaC[carta].style.background="";
            //     }
            //     this.style.background="red"
            // };

            divComputador.appendChild(cartaC[i]);
        }
        
    }

function jogar() {

    let cartaEscolhida = AchaCarta(cartaJ);         // 
    let atributoEscolhido = obterAtributoCarta();   // Seleciona atributo escolhido no radio buttom
    let valorAtributo;

    for(key in cartaEscolhida.atributos) {
        if(key == atributoEscolhido) {
            valorAtributo = cartaEscolhida.atributos[key]
        }
        
    }

// MOSTRA CARTA, ATRIBUTO E VALOR ATRIBUTO
    console.log("Carta escolhida: " + cartaEscolhida.nome
    + "\n Atributo escolhido: " + atributoEscolhido +
    "\n Valor atributo: " + valorAtributo);
        

    // for(let i = 0; i < deckComputador.length; i++) {
    //     for(let j = 0; j < deckComputador[i].atributos.length; j++) {
    //         console.log(deckComputador[i].atributos)
    //     }
    // }

    let atributoRodada = atributoEscolhido
    let valoresRodada = [];

    for(carta in deckComputador) {
        let atributoCarta = deckComputador[carta].atributos[atributoRodada];
        valoresRodada.push(atributoCarta)
    }
    
    console.log("Maior valor encontrado: " + Math.max(...valoresRodada)) // Spread operator works!

   
    
   
    

    
    let valoresCartas = [];
  
}

// ACHA CARTA 
    function AchaCarta(arrayDivs) {
        for(carta of arrayDivs) {
            if(carta.style.background == 'red') {
                let cartinhauwu = carta.getElementsByTagName('h3')
            
                for(cards of deckJogador) {
                    if(cards.nome == cartinhauwu[0].innerText) {
                        return(cards);
                    }
                }       
            }     
        } 
    }

// OBTÉM ATRIBUTO SELECIONADO DA CARTA
    function obterAtributoCarta() {

        let radioAtributos = document.getElementsByName("atributo");
      
        for(let i = 0; i < radioAtributos.length; i++) {
            if(radioAtributos[i].checked == true) {
                return radioAtributos[i].value;
            }
        }
    }



    // let atributoSelecionado = obtemAtributoSelecionado();


    // let divResultado = document.getElementById("resultado")
    // // let elementoResultado = document.getElementById("resultado");
    // let valorCartaJogador = cartaJogador.atributos[atributoSelecionado] 
    // let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    // if(valorCartaJogador > valorCartaMaquina) {
    //     // elementoResultado.innerHTML = "Venceu :)"
    //     htmlResultado = "<p class='resultado-final'>Venceu! :)</p>"
    // } else if(valorCartaMaquina > valorCartaJogador) {
    //     // elementoResultado.innerHTML = "voce perdeu '-'"
    //     htmlResultado = "<p class='resultado-final'>Perdeu :(</p>"
    // } else {
    //     // elementoResultado.innerHTML = "empate :/"
    //     htmlResultado = "<p class='resultado-final'>Empatou! :/</p>"
    // }

    // divResultado.innerHTML = htmlResultado;
    // document.getElementById("btnJogar").disabled = true;
    // exibirCartaMaquina();


// function TurnoComputador() {

//     let indexEscolhido =  parseInt(Math.random() * deckComputador.length);
//     let cartaEscolhida = deckComputador[indexEscolhido];

//     console.log("Escolhido:" + cartaEscolhida.nome);
// }



  
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