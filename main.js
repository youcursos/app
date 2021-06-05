function loadJson() {
    fetch('main.json', {
        method: "get"
    }).then(function(resposta) {
        var recebe = document.querySelector("#recebe")
        resposta.json().then(function(data) {
            let dados = data.contente
            for (let i = 0; i < dados.length; i++)
                recebe.innerHTML += `<div class="cardCursos pb-1">
                <a href="${dados[i].link}">
                    <img src="${dados[i].linkImg}" class="card-img-top " alt="... ">
                    <div class="card-body text-white d-flex justify-content-center align-itens-center ">
                        <h6 class="card-title">${dados[i].titulo}</h6>
                    </div>
                </a>
                <p class="tags">${dados[i].tags}</p>
            </div>`
        })


    })
}
