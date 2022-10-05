
let adicionarFilme = () => {
    const filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".JPG") || filmeFavorito.endsWith(".jpg")) 
        listarFilmes(filmeFavorito)
    else 
        console.log("Não pode :(") 
}
    
function listarFilmes(filmeFavorito) {
    const elementoFilmeFav = "<img src=" + filmeFavorito + ">";  
    const elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML += elementoFilmeFav;
    document.getElementById("filme").value = "";
}
