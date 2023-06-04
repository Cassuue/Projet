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

            lastTitle.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=lastTitre"+i+" class='btn card-title' value="+id+" ><h5>"+titre+"</h5></button>"+
            "</div> </div>";

            if(album){
                let idDoc = document.getElementById("lastTitre"+i);
                idDoc.insertAdjacentHTML("afterend", "<p class=card-text' id=lastArtist"+id+">"+ artiste +" / "+ album+"</p>");
            } else{
                let idDoc = document.getElementById("lastTitre"+i);
                idDoc.insertAdjacentHTML("afterend", "<p class=card-text' id=lastArtist"+id+">"+ artiste +"</p>");
            }

        } else{
            lastTitle2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=lastTitre"+i+" class='btn card-title' value="+id+" ><h5>"+titre+"</h5></button>"+
            "</div> </div>";
            if(album){
                let idDoc = document.getElementById("lastTitre"+i);
                idDoc.insertAdjacentHTML("afterend", "<p class=card-text' id=lastArtist"+id+">"+ artiste +" / "+ album+"</p>");
            } else{
                let idDoc = document.getElementById("lastTitre"+i);
                idDoc.insertAdjacentHTML("afterend", "<p class=card-text' id=lastArtist"+id+">"+ artiste +"</p>");
            }
        }
    }

    for(let i = 0; i<size; i++){
        const btn = document.querySelector("#lastTitre"+i);
        let id = document.getElementById("lastTitre"+i).value;
        btn.addEventListener("click", function(){
            getTitle(id);
        });
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

    for(let i = 0; i < size; i++){
        let nom = json[i]['nom'];
        let idPlaylist = json[i]['idPlaylist'];
        //let date_creation = json[i]['date_creation'];

        if(i < 5){
            playlist.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/playlist.jpeg >"+
            "<div class='card-body'>"+
            "<button type='submit' id=playlist"+i+" class='btn card-title' value="+idPlaylist+" ><h5>"+nom+"</h5></button><br>"+
             "</div></div>";
        } else{
            playlist2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/playlist.jpeg >"+
            "<div class='card-body'>"+
            "<button type='submit' id=playlist"+i+" class='btn card-title' value="+idPlaylist+" ><h5>"+nom+"</h5></button><br>"+
             "</div></div>"; 
        }
    }

    for(let i = 0; i<size; i++){
        const btn = document.querySelector("#playlist"+i);
        let id = document.getElementById("playlist"+i).value;
        btn.addEventListener("click", function(){
            getPlaylists(id);
        });
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
            favoris.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=favTitre"+i+" class='btn card-title' value="+id+" ><h5>"+titre+"</h5></button>"+
            "</div> </div>";

            if(album){
                let idDoc = document.getElementById("favTitre"+i);
                idDoc.insertAdjacentHTML("afterend", "<p class=card-text' id=lastArtist"+id+">"+ artiste +" / "+ album+"</p>");
            } else{
                let idDoc = document.getElementById("favTitre"+i);
                idDoc.insertAdjacentHTML("afterend", "<p class=card-text' id=lastArtist"+id+">"+ artiste +"</p>");
            }
        } else{
            favoris2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;; z-index: 1'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id=favTitre"+i+" class='btn card-title' value="+id+" ><h5>"+titre+"</h5></button>"+
            "</div> </div>";

            if(album){
                let idDoc = document.getElementById("favTitre"+i);
                idDoc.insertAdjacentHTML("afterend", "<p class=card-text' id=lastArtist"+id+">"+ artiste +" / "+ album+"</p>");
            } else{
                let idDoc = document.getElementById("favTitre"+i);
                idDoc.insertAdjacentHTML("afterend", "<p class=card-text' id=lastArtist"+id+">"+ artiste +"</p>");
            }
        }

    }

    for(let i = 0; i<json.length; i++){
        const btn = document.querySelector("#favTitre"+i);
        let id = document.getElementById("favTitre"+i).value;
        btn.addEventListener("click", function(){
            getTitle(id);
        });
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





