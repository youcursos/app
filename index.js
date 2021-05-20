let group = document.querySelector("#groupBtn");
let jsonFile = document.body

let nameFileJson = "/" + jsonFile.id + ".json"
console.log(jsonFile)

function requer() {
    fetch(nameFileJson, {
        method: "get"
    }).then(function(resposta) {
        resposta.json().then(function(dados) {
            var titulo = document.querySelector("#titulo");
            var titulo2 = document.querySelector("#titulo2");
            var canal = document.querySelector("#canal");
            var anoProf = document.querySelector("#ano-Prof");
            var sinopse = document.querySelector("#sinopse");


            /* Titulo da Pagina */
            document.title += " - " + dados.titulo
            titulo.innerHTML = dados.titulo
            titulo2.innerHTML = dados.titulo
            canal.innerHTML = `Canal: ${dados.canal}`
            anoProf.innerHTML = `Professor: ${dados.professor} - Ano: ${dados.ano}`
            sinopse.innerHTML = dados.sinopse

            video.src = `https://www.youtube.com/embed/${dados.videos[0].video}`


            for (let i = 0; i < dados.videos.length; i++) {
                group.innerHTML += `
            <div class="btnSrc" src="https://www.youtube.com/${dados.videos[i].video}">
            ${dados.videos[i].titulo.slice(0, 50)} 
            <i class="fas fa-play"> </i> </div>`
            }

        })
    }).catch(function() {
        console.log("Error de Servidor");
    })
}




group.onclick = function(e) {
    if (e.target.hasAttribute("src")) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        e.stopPropagation();

        var video = document.getElementById("video");
        var alvo = e.target.attributes[1].textContent

        console.log(e.target)
        console.log(alvo)

        var srcVideo = alvo
        video.src = srcVideo
    } else {
        return false
    }

};

function backPag() {

    window.location = "../index.html"
}

var voltar = document.getElementById("voltar")

voltar.onclick = backPag