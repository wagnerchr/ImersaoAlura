const listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
                        "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
                        "https://upload.wikimedia.org/wikipedia/pt/1/1b/Schoolrockposter.jpg"
                        ];



    DisplayLista();

// Carrega array com filmes
    function DisplayLista() {

        // Limpa div filmes
        document.getElementById("filmes").innerHTML = ''; 

        // Adiciona novamente filmes
        for(filme of listaFilmes) {
                
                let film = document.createElement('div');  
                

                film.classList.add("filme");
                film.innerHTML += `<img src="${filme}"/>`
                document.getElementById("filmes").appendChild(film); 

                console.log("aaaa" + listaFilmes)

       }}
        
// Adiciona Filme novo 
    function addFilme() {
        const input = document.getElementById('add-input').value;

        if(!listaFilmes.includes(input)) {
            if(input.endsWith(".png") | input.endsWith(".jpg")) {
                
                listaFilmes.push(input);
                DisplayLista();
            }
        }
    }

    const view = document.createElement('div');
    const mensagem = document.createElement('h1'); 

// Exibir filme Escolhido
    function displayFilme(link) {
        
        // Valor inserido no Input
        const Input = document.getElementById('add-input').value;
        
        // Checa formato do filme
        if(Input.endsWith(".png") | Input.endsWith(".jpg")) 
            mensagem.innerHTML = "Adicionar esta filme?"       
        else {
            if(Input.value != 0)
                mensagem.innerHTML = "Formato inválido para o filme!"
        }
        // Para filmes repetidos
        if(listaFilmes.includes(Input)) {
            mensagem.innerHTML = "Este filme já está na Lista!"
        }

         // Exibe filme
        view.innerHTML = `<img src="${Input}">` 
        document.getElementById("add-filme").appendChild(mensagem);
        document.getElementById("add-filme").appendChild(view);            
    }
