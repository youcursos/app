let jsonFile = document.body

let nameFileJson = jsonFile.id + ".json"

function requer() {
    fetch(nameFileJson, {
        method: "get"
    }).then(function (resposta) {
        resposta.json().then(function (dados) {

            jsonFile.innerHTML = `
            <div class="container">
            <!-- Just an image -->
            <nav class="navbar navbar-light">
                <a class="navbar-brand" href="#">
                    <img src="../image/logo.png" width="30" height="30" alt="">
                </a>
    
            </nav>
        </div>
    
        <div class="controle">
            <i class="fas fa-arrow-left" id="voltar"></i>
            <!-- Voltar -->
            <h3 id="titulo">
                ${dados.titulo}
            </h3>
        </div>
        <div class="header">
            <div class="embed-responsive embed-responsive-21by9 w-100 h-100">
                <iframe class="embed-responsive-item" id="video" frameborder="0" allowfullscreen src="${dados.videos[0].video}"> </iframe>
                
            </div>
        </div>
        <h3 class="tituloCurso" id="titulo2">
        </h3>
        <div class="details">
            <p class="relevant" id="canal">
            Canal: ${dados.canal} - Videos: ${dados.videos.length}
    
                <p class="temp" id="ano-Prof">
                Professor: ${dados.professor} - Ano: ${dados.ano}
                </p>
        </div>
    
    
        <p class="sinopse" id="sinopse">
        ${dados.sinopse}
        </p>
    
    
    
        <div id="groupBtn" class="mb-2">
    
        </div>
        `

            var group = document.querySelector("#groupBtn");




            /* 
                        var titulo = document.querySelector("#titulo");
                        var titulo2 = document.querySelector("#titulo2");
                        var canal = document.querySelector("#canal");
                        var anoProf = document.querySelector("#ano-Prof");
                        var sinopse = document.querySelector("#sinopse");


                        /* Titulo da Pagina 
                        document.title += " - " + dados.titulo
                        titulo.innerHTML = dados.titulo
                        titulo2.innerHTML = dados.titulo
                        canal.innerHTML = `Canal: ${dados.canal}`
                        anoProf.innerHTML = `Professor: ${dados.professor} - Ano: ${dados.ano}`
                        sinopse.innerHTML = dados.sinopse
             */
            video.src = `https://www.youtube.com/embed/${dados.videos[0].video}`


            for (let i = 0; i < dados.videos.length; i++) {
                group.innerHTML += `
            <div class="btnSrc" src="https://www.youtube.com/${dados.videos[i].video}">
            ${dados.videos[i].titulo.slice(0, 50)} 
           <i  class="fas fa-play" src="https://www.youtube.com/${dados.videos[i].video}"></i>
           </div>`
            }

            group.onclick = function (e) {
                if (e.target.hasAttribute("src")) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    e.stopPropagation();

                    var video = document.getElementById("video");
                    var alvo = e.target.attributes[1].textContent

                    /* console.log(e.target)
                    console.log(alvo) */

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

        })
    }).catch(function () {
        console.log("Error de Servidor");
    })
}
