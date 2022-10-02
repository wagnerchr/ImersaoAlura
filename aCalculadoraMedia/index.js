var nome = "Guilherme"

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2 


function totalTests() {

        let btn = document.getElementById('qntTests-btn');
        btn.disabled = "disabled";

    // Pega quantidade provas inserida pelo usuário
        let qntTests = document.getElementById('qntTests'); 
        let qntTestsValue = qntTests.value;

        if(qntTestsValue == 0)
            console.log("sdadasdsadasdas");

    // Adiciona box-container para as provas
        let body = document.body;
        let box = document.createElement('div');
        let confirmButton = document.createElement('button');
        let resultadoMedia = document.createElement('h1');
        let veredito = document.createElement('h3');
        


        box.classList.add("test-box");
        resultadoMedia.classList.add("resultado-media")

        veredito.classList.add("resultado-media");
        
        confirmButton.classList.add("test-btn");
        confirmButton.type = "submit";
        confirmButton.innerHTML = "Confirmar Notas";

        confirmButton.onclick= function confirmTests() {

            let inputValuesArr = [];

            for(let i = 1; i <= qntTestsValue; i++) {

                let inputId = "eInput" + i
                let inputValue = document.getElementById(inputId);
                

                
                inputValuesArr.push(parseInt(inputValue.value));
            }

            let media = 0;

            for(let i = 0; i < qntTestsValue; i++) {
                media += inputValuesArr[i]
            }

            let resultado = Math.round(media/qntTestsValue);

            resultadoMedia.innerHTML = "Média: " + resultado;
            resultadoMedia.style.display = "block";
            confirmButton.disabled = "disabled";

            veredito.style.display = "block";

            if(resultado > 6)
                veredito.innerHTML = "Aprovado! :)"
            else
                veredito.innerHTML = "Não foi aprovado :("
        };

       

        body.classList.add("container");

        body.appendChild(box);
        body.appendChild(confirmButton)
        body.appendChild(resultadoMedia)
        body.appendChild(veredito)

    // Loop para cada Prova Inserida
        for(let i = 1; i <= qntTestsValue; i++) {

            let e = document.createElement('div');
            let eLabel = document.createElement('label');
            let eInput = document.createElement('input')
            
            eInput.type = 'text';
            eInput.maxLength='2';
        
                eLabel.classList.add("test-label");
                eInput.classList.add("test-input");
                eInput.setAttribute("id", "eInput" + i)


            eLabel.innerHTML = "prova " + i;
            eInput.innerHTML = ""
            


            e.classList.add("test-div");
            e.appendChild(eLabel)
            e.appendChild(eInput)
            box.appendChild(e)
        }

    function confirmTests() {
        console.log("oi :3")
      
    }

    

        /*

        let box = document.createElement('div'); // Cria div
        box.classList.add("test-box");
        box.innerHTML = "oi";
        let container = document.getElementsByClassName("container")

        document.body.appendChild(container)
        container.appendChild(box)
        

        for(let i = 1; i <= qntTestsValue; i++) {


            let e = document.createElement('div');
            e.classList.add("test-div");
            e.innerHTML = "prova " + i; 
            box.appendChild(e)
           
           
        

        }*/
        
}










var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log(notaFixada)

// isso é um comentário 

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação