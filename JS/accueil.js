function updatePage(){
    let body = document.getElementById("body");
    body.innerHTML = "<div id='carouselExampleControls1' class='carousel carousel-dark slide' data-ride='carousel'>"+
            "<div class='carousel-inner'>"+
                "<div class='carousel-item active'>"+
                    "<div class='container'>"+
                        "<div class='row justify-content-center' id='lastTitles'>"+
                        "</div>"+
                    "</div>"+   
                "</div>"+
                "<div class='carousel-item'>"+
                    "<div class='container'>"+
                        "<div class='row justify-content-center' id='lastTitles2'>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"+

            "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls1' data-bs-slide='prev'>"+
                "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"+
                "<span class='visually-hidden'>Previous</span>"+
            "</button>"+
            "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls1' data-bs-slide='next'>"+
                "<span class='carousel-control-next-icon' aria-hidden='true'></span>"+
                "<span class='visually-hidden'>Next</span>"+
            "</button>"+
        "</div>"+

        "<div id='carouselExampleControls2' class='carousel carousel-dark slide' data-ride='carousel'>"+
            "<div class='carousel-inner'>"+
                "<div class='carousel-item active'>"+
                    "<div class='container'>"+
                        "<div class='row justify-content-center' id='playlists'>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "<div class='carousel-item'>"+
                    "<div class='container'>"+
                        "<div class='row justify-content-center' id='playlists2'>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"+

            "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls2' data-bs-slide='prev'>"+
                "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"+
                "<span class='visually-hidden'>Previous</span>"+
            "</button>"+
            "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls2' data-bs-slide='next'>"+
                "<span class='carousel-control-next-icon' aria-hidden='true'></span>"+
                "<span class='visually-hidden'>Next</span>"+
            "</button>"+
        "</div>"+


        "<div id='carouselExampleControls3' class='carousel carousel-dark slide' data-ride='carousel'>"+
            "<div class='carousel-inner'>"+
                "<div class='carousel-item active'>"+
                    "<div class='container'>"+
                        "<div class='row justify-content-center' id='favoris'>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "<div class='carousel-item'>"+
                    "<div class='container'>"+
                        "<div class='row justify-content-center' id='favoris2'>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"+

            "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls3' data-bs-slide='prev'>"+
                "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"+
                "<span class='visually-hidden'>Previous</span>"+
            "</button>"+
            "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls3' data-bs-slide='next'>"+
                "<span class='carousel-control-next-icon' aria-hidden='true'></span>"+
                "<span class='visually-hidden'>Next</span>"+
            "</button>"+
        "</div>";
}



function getLastTitle(){
    ajaxRequest('GET', '../PHP/requestAjax.php?type=lastTitle', displayLastTitle);
}


function displayLastTitle(json){

    let body = document.getElementById("body");
    body.insertAdjacentHTML("afterbegin", "<div class=row style='margin-top: 1%; margin-bottom: 1%;'><h3 id='list1' >Récemment écouté :</h3></div>")

    let lastTitle = document.getElementById("lastTitles");
    let lastTitle2 = document.getElementById("lastTitles2");

    let size = json.length;

    if (size < 5){
        lastTitle2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
        "<img class='card-img-top' src=../Images/white.jpeg >"+
        "<div class='card-body'>"+
        "<button type='submit' id=titre class='btn card-title'></button><br>"+
        "<button type='submit' id=lastArtist class='btn btn-link' style='color: black; margin-right: 6px;'></button> </div> </div>";
    }

    for(let i = 0; i < size; i++){

        let id = json[i][0]['id'];
        let titre = json[i][0]['titre'];
        let artiste = json[i][0]['artiste'];
        let album = json[i][0]['album'];
        let image = json[i][0]['image'];
        if(!image){
            image = "playlist.jpeg";
        }

        if(i < 5){
            let html = "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=lastTitre class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id=lastArtist class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button>";

            lastTitle.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=titre"+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id=lastArtist"+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button>";
            if(album){
                let idDoc = document.getElementById("lastArtist"+id);
                idDoc.insertAdjacentHTML("afterend", "<button type='submit' id="+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+album+"</button>")
            } 
        } else{
            lastTitle2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=titre"+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id=lastArtist"+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button> </div> </div>";
            if(album){
                let idDoc = document.getElementById("lastArtist"+id);
                idDoc.insertAdjacentHTML("afterend", "<button type='submit' id="+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+album+"</button>")
            } 
        }
    }
}

function getPlayists(){
    ajaxRequest('GET', '../PHP/requestAjax.php?type=playlists', displayPlaylists);
}

function displayPlaylists(json){

    let body = document.getElementById("carouselExampleControls1");
    body.insertAdjacentHTML("afterend", "<div class=row style='margin-top: 1%; margin-bottom: 1%;'> <h3>Playlists :</h3> </div>")

    let playlist = document.getElementById("playlists");
    let playlist2 = document.getElementById("playlists2");

    let size = json.length;

    if (size < 5){
        playlist2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
        "<img class='card-img-top' src=../Images/white.jpeg >"+
        "<div class='card-body'>"+
        "<button type='submit' id=titre class='btn card-title'></button><br>";
    }

    for(let i = 0; i < size; i++){
        let nom = json[i]['nom'];
        let date_creation = json[i]['date_creation'];

        if(i < 5){
            playlist.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/playlist.jpeg >"+
            "<div class='card-body'>"+
            "<button type='submit' id="+nom+" class='btn card-title' ><h5>"+nom+"</h5></button><br>"+
             "</div></div>";
        } else{
            playlist2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/playlist.jpeg >"+
            "<div class='card-body'>"+
            "<button type='submit' id="+nom+" class='btn card-title' ><h5>"+nom+"</h5></button><br>"+
             "</div></div>"; 
        }
    }
}

function getFavoris(){
    ajaxRequest('GET', '../PHP/requestAjax.php?type=favoris', displayFavoris);
}

function displayFavoris(json){

    let body = document.getElementById("carouselExampleControls2");
    body.insertAdjacentHTML("afterend", "<div class=row style='margin-top: 1%; margin-bottom: 1%;'> <h3>Favoris :</h3> </div>")

    let favoris = document.getElementById("favoris");
    let favoris2 = document.getElementById("favoris2");

    let size = json.length;

    if (size < 5){
        playlist2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
        "<img class='card-img-top' src=../Images/white.jpeg >"+
        "<div class='card-body'>"+
        "<button type='submit' id=titre class='btn card-title'></button><br>";
    }

    for(let i = 0; i < size; i++){

        let id = json[i][0]['id'];
        let titre = json[i][0]['titre'];
        let artiste = json[i][0]['artiste'];
        let album = json[i][0]['album'];
        let image = json[i][0]['image'];
        if(!image){
            image = "playlist.jpeg";
        }

        if(i < 5){
            favoris.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=titre"+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id=favArtist"+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button>";
            if(album){
                let idDoc = document.getElementById("favArtist"+id);
                idDoc.insertAdjacentHTML("afterend", "<button type='submit' id="+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+album+"</button>")
            } 
        } else{
            favoris2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=titre"+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id=favArtist"+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button> </div> </div>";
            if(album){
                let idDoc = document.getElementById("favArtist"+id);
                idDoc.insertAdjacentHTML("afterend", "<button type='submit' id="+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+album+"</button>")
            } 
        }
    }
}

// Affichage de toutes la page d'accueil
function pageAccueil(){
    updatePage();
    getLastTitle();
    getPlayists();
    getFavoris();
}


// Affichage de la page d'accueil sans l'appui sur le bouton
pageAccueil();

// Affichage de la page d'accueil après avoir cliqué dans le menu
const accueil = document.querySelector('#accueil');
accueil.addEventListener("click",pageAccueil);

/*function updatePage() {
    let body = document.getElementById("body");
    body.innerHTML = "";

    // Carousel 1
    let carousel1 = document.createElement("div");
    carousel1.id = "carouselExampleControls1";
    carousel1.className = "carousel carousel-dark slide";
    carousel1.setAttribute("data-ride", "carousel");
    body.appendChild(carousel1);

    let carouselInner1 = document.createElement("div");
    carouselInner1.className = "carousel-inner";
    carousel1.appendChild(carouselInner1);

    let carouselItem1 = document.createElement("div");
    carouselItem1.className = "carousel-item active";
    carouselInner1.appendChild(carouselItem1);

    let container1 = document.createElement("div");
    container1.className = "container";
    carouselItem1.appendChild(container1);

    let row1 = document.createElement("div");
    row1.className = "row justify-content-center";
    row1.id = "lastTitles";
    container1.appendChild(row1);

    let carouselItem2 = document.createElement("div");
    carouselItem2.className = "carousel-item";
    carouselInner1.appendChild(carouselItem2);

    let container2 = document.createElement("div");
    container2.className = "container";
    carouselItem2.appendChild(container2);

    let row2 = document.createElement("div");
    row2.className = "row justify-content-center";
    row2.id = "lastTitles2";
    container2.appendChild(row2);

    let carouselControlPrev1 = document.createElement("button");
    carouselControlPrev1.className = "carousel-control-prev";
    carouselControlPrev1.type = "button";
    carouselControlPrev1.setAttribute("data-bs-target", "#carouselExampleControls1");
    carouselControlPrev1.setAttribute("data-bs-slide", "prev");
    carousel1.appendChild(carouselControlPrev1);

    let carouselControlPrevIcon1 = document.createElement("span");
    carouselControlPrevIcon1.className = "carousel-control-prev-icon";
    carouselControlPrevIcon1.setAttribute("aria-hidden", "true");
    carouselControlPrev1.appendChild(carouselControlPrevIcon1);

    let carouselControlPrevSpan1 = document.createElement("span");
    carouselControlPrevSpan1.className = "visually-hidden";
    carouselControlPrevSpan1.textContent = "Previous";
    carouselControlPrev1.appendChild(carouselControlPrevSpan1);

    let carouselControlNext1 = document.createElement("button");
    carouselControlNext1.className = "carousel-control-next";
    carouselControlNext1.type = "button";
    carouselControlNext1.setAttribute("data-bs-target", "#carouselExampleControls1");
    carouselControlNext1.setAttribute("data-bs-slide", "next");
    carousel1.appendChild(carouselControlNext1);

    let carouselControlNextIcon1 = document.createElement("span");
    carouselControlNextIcon1.className = "carousel-control-next-icon";
    carouselControlNextIcon1.setAttribute("aria-hidden", "true");
    carouselControlNext1.appendChild(carouselControlNextIcon1);

    let carouselControlNextSpan1 = document.createElement("span");
    carouselControlNextSpan1.className = "visually-hidden";
    carouselControlNextSpan1.textContent = "Next";
    carouselControlNext1.appendChild(carouselControlNextSpan1);*/
