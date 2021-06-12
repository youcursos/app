function loadJson() {
    fetch('main.json', {
        method: "get"
    }).then(function(resposta) {
        var recebe = document.querySelector("#recebe")

        resposta.json().then(function(data) {
            let dados = data.contente
            var campoBusca = document.querySelector("#campo").value

            campoBusca
            recebe.innerHTML = ""
            for (let i = 0; i < dados.length; i++) {
                /* Busca */
                if (dados[i].tags.includes(campoBusca.trim()) || dados[i].titulo.includes(campoBusca.trim())) {

                    recebe.innerHTML += `<div class="cardCursos pb-1">
                    <a href="${dados[i].link}">
                        <img src="${dados[i].linkImg}" class="card-img-top " alt="...">
                        <div class="card-body text-white d-flex justify-content-center align-itens-center ">
                            <h6 class="card-title">${dados[i].titulo}</h6>
                        </div>
                    </a>
                    <p class="tags">Tags: ${dados[i].tags}</p>
                    </div>`

                }
            }
        })


    })
}

var iconBusca = document.querySelector(".iconBusca")
var campo = document.querySelector(".campo")

iconBusca.onclick = function(e) {
    campo.style.display == "block" ? campo.style.display = "none" : campo.style.display = "block"
    campo.focus()
}


/* 
document.addEventListener('mouseup', function(e) {
    e.preventDefault()
    if (!campo.contains(e.target)) {
        campo.style.display = "none"
    }
}) */
