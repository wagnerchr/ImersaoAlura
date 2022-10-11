
const listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
"https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
"https://upload.wikimedia.org/wikipedia/pt/1/1b/Schoolrockposter.jpg"
]

Atualiza();

function Atualiza() {

    
    for(filme of listaFilmes) {

   
       


     
        let film = document.createElement('div');   
        film.classList.add("filme");

        film.innerHTML = `<img src="${filme}"/>`
        document.getElementById("filmes").appendChild(film); 
  
    }
}
// Exibir Filmes
    

const view = document.createElement('div');
const mensagem = document.createElement('h1'); 

function displayFilme(link) {
    
    const Input = document.getElementById('add-input').value;
    
    if(Input.endsWith(".png") | Input.endsWith(".jpg")) {
       mensagem.innerHTML = "Adicionar esta filme?"
        view.innerHTML = `<img src="${Input}">` 

        document.getElementById("add-filme").appendChild(mensagem);
        document.getElementById("add-filme").appendChild(view);
            
    } // https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg
        
}

function addFilme() {
    const Input = document.getElementById('add-input').value;
    listaFilmes.push(Input);

    Atualiza();
}


