let jsonFile = document.body

let nameFileJson = jsonFile.id + ".json"

function requer() {
    fetch(nameFileJson, {
        method: "get"
    }).then(function(resposta) {
        if (resposta.ok) {
            resposta.json().then(function(dados) {
                var x = parseInt(dados.videos.length);

                if (x >= 0 && x <= 20) {
                    x = 50
                } else if (x > 20 && x <= 30) {
                    x = 80
                } else if (x > 30 && x <= 40) {
                    x = 85
                } else if (x > 50 && x <= 70) {
                    x = 90
                } else if (x > 70 && x <= 100) {
                    x = 90
                } else if (x > 100 && x <= 150) {
                    x = 92
                } else if (x > 150) {
                    x = 80
                }


                jsonFile.style = `background: rgb(33, 37, 41);background: linear-gradient(0deg, rgba(33, 37, 41, 1) 0%, rgba(33, 37, 41, 1) ${parseInt(x)}%, rgba(245, 0, 0, 1) 100%); background-attachment: fixed;`



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
                <iframe class="embed-responsive-item" id="video" frameborder="0" allowfullscreen src=""> </iframe>
                
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
    
    
    
        <div id="groupBtn" class="pb-5">
    
        </div>
        `

                var group = document.querySelector("#groupBtn");

                /* var titulo = document.querySelector("#titulo"); var titulo2 = document.querySelector("#titulo2"); var canal = document.querySelector("#canal"); var anoProf = document.querySelector("#ano-Prof"); var sinopse = document.querySelector("#sinopse"); /* Titulo da Pagina  document.title += " - " + dados.titulotitulo.innerHTML = dados.titulo titulo2.innerHTML = dados.titulo canal.innerHTML = `Canal: ${dados.canal}` anoProf.innerHTML = `Professor: ${dados.professor} - Ano: ${dados.ano}`
                sinopse.innerHTML = dados.sinopse*/

                video.src = `https://www.youtube.com/embed/${dados.videos[0].video}`


                for (let i = 0; i < dados.videos.length; i++) {
                    group.innerHTML += `
            <div class="btnSrc" src="https://www.youtube.com/${dados.videos[i].video}"> ${dados.videos[i].titulo.slice(0, 50)} 
                <i  class="fas fa-play" src="https://www.youtube.com/${dados.videos[i].video}"></i>
           </div>`
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

                        /* console.log(e.target)
                        console.log(alvo) */

                        var srcVideo = alvo
                        video.src = srcVideo
                    } else {
                        return false
                    }

                };

                document.getElementById("voltar").onclick = () => { window.location = "../index.html" }

            })
        } else {
            jsonFile.innerHTML = `<h1 class="text-danger d-flex justify-content-center pt-5 mt-5">404 (Not Found)</h1>`
        }
    }).catch(function(error) {
        console.log(error.message);
    });
}
