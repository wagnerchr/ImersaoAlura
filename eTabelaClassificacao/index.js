
const jogador01 = {
    nome: "Wagmer",
    vitorias: 1,
    empates:2,
    derrotas:3,
    pontos: 4
}

const jogador02 = {
    nome: "SDA",
    vitorias: 2,
    empates:3,
    derrotas:4,
    pontos: 1  
}

const calculaPontos = (jogador) => {
    const pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos;
}

jogador01.pontos =  calculaPontos(jogador01);
jogador02.pontos =  calculaPontos(jogador02);

const jogadores = [jogador01, jogador02]

function display(jogadores) {
    let elemento = ""
    for(let i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>"+jogadores[i].nome+"</td>"
        elemento += "<td>"+jogadores[i].vitorias+"</td>"
        elemento += "<td>"+jogadores[i].empates+"</td>"
        elemento += "<td>"+jogadores[i].derrotas+"</td>"
        elemento += "<td>"+jogadores[i].pontos+"</td>"

        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"

    }

    const tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;  
}

display(jogadores)

function adicionarVitoria(i) {
    let j = jogadores[i];
    j.vitorias++
    j.pontos = calculaPontos(j)
    display(jogadores)
}

function adicionarEmpate(i) {
    let j = jogadores[i];
    j.empates++
    j.pontos = calculaPontos(j)
    display(jogadores)
}

function adicionarDerrota(i) {
    let j = jogadores[i];
    j.derrotas++
    j.pontos = calculaPontos(j)
    display(jogadores)
}