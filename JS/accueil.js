
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
        lastTitle2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
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
            let html = "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=titre"+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id=lastArtist"+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button>";

            lastTitle.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=titre"+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id=lastArtist"+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button>";
            if(album){
                let idDoc = document.getElementById("lastArtist"+id);
                idDoc.insertAdjacentHTML("afterend", "<button type='submit' id="+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+album+"</button>")
            } 
        } else{
            lastTitle2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
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
        playlist2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
        "<img class='card-img-top' src=../Images/white.jpeg >"+
        "<div class='card-body'>"+
        "<button type='submit' id=titre class='btn card-title'></button><br>";
    }

    for(let i = 0; i < size; i++){
        let nom = json[i]['nom'];
        let date_creation = json[i]['date_creation'];

        if(i < 5){
            playlist.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
            "<img class='card-img-top' src=../Images/playlist.jpeg >"+
            "<div class='card-body'>"+
            "<button type='submit' id="+nom+" class='btn card-title' ><h5>"+nom+"</h5></button><br>"+
             "</div></div>";
        } else{
            playlist2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
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
        playlist2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
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
            favoris.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=titre"+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id=favArtist"+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button>";
            if(album){
                let idDoc = document.getElementById("favArtist"+id);
                idDoc.insertAdjacentHTML("afterend", "<button type='submit' id="+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+album+"</button>")
            } 
        } else{
            favoris2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
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

function pageAccueil(){
    updatePage();
    getLastTitle();
    getPlayists();
    getFavoris();
}

const accueil = document.querySelector('#accueil');
accueil.addEventListener("click",pageAccueil)

