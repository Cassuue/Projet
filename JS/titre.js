
// Envoie de la requête permettant de récupérer toutes les informations concernant le titre
function getTitle(id){
    let body = document.getElementById("body");
    body.innerHTML = "<br>";

    ajaxRequest('GET', '../PHP/requestAjax.php?id=' + id +'&type=title', displayTitle);
}

// Affichage de la page titre
function displayTitle(json) {
    
    let id = json[0]['id'];
    let titre = json[0]['titre'];
    let duree = json[0]['duree'];
    let artiste = json[0]['artiste'];
    let lien = json[0]['lien'];
    let album = json[0]['album'];
    let image = json[0]['image'];

    if (!image){
        image = "playlist.jpeg";
    }

    if (!album){
        album = "";
    }

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row'>"+
            "<div class='col col-md-3'>"+
                "<img src=../Images/"+image+" class='img-thumbnail ' alt='...' style='width: 250px;'>"+
            "</div>"+
            "<div class='col' id='col2'>"+
                "<h2>"+titre+"</h2><button type='submit' class='btn' id='btnArtiste' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-person-fill' style='padding-right: 10px;'></i>"+artiste+" </button><button type='submit' class='btn' id='btnAlbum' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-collection-play-fill' style='padding-right: 10px;'></i>"+album+"</button>"+
            "</div>"+
        "</div>";

    // Ajout d'un album si il existe
    if (!album){
        let btnAlbum = document.getElementById("btnAlbum").disabled = true;
    }

    body.innerHTML += "<br><br>";

    body.innerHTML += "<div class='row'>"+
            "<table class='table table-hover'>"+
                "<tbody>"+
                    "<tr>"+
                        "<th scope='col' class='w-75'><h5>"+titre+"</h5></th>"+
                        "<th scope='col' class='w-10'>"+duree+"</th>"+
                        "<th scope='col' class='w-15'>"+
                            "<button class='btn' type='submit' id='favorite' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                            "</button>"+
                            "<button class='btn' type='submit' id='add' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                                "<h5 style='margin-bottom: 2px;'><i class='bi bi-plus'></i></h5>" +
                            "</button>"+
                            "<button class='btn' type='submit' id='play' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                                "<h5 style='margin-bottom: 2px;'><i class='bi bi-play-fill'></i></h5>"+
                            "</button>"+
                        "</th>"+
                    "</tr>"+
                "</tbody>"+
            "</table>"+
        "</div>";

    // Test si le titre est favori ou non 
    let fav = false;
    for (let i=0; i<json[1].length; i++){
        if(id == json[1][i]['idtitre']){
            fav = true;
        }
    }

    // Création de l'évent pour l'ajout à la liste des favoris
    let btnFavorite = document.getElementById("favorite");

    if(fav){
        btnFavorite.innerHTML += "<h5 style='margin-bottom: 2px;'><i class='bi bi-star-fill'></i></h5>";
    } else{
        btnFavorite.innerHTML += "<h5 style='margin-bottom: 2px;'><i class='bi bi-star'></i></h5>";
    }

    btnFavorite.addEventListener('click', function(){modifFavoris(id, !fav);});

    let idArtiste = json[0]['idartiste'];
    let btnArtiste = document.getElementById('btnArtiste');
    btnArtiste.addEventListener("click", function(){getArtiste(idArtiste)});

    let idAlbum = json[0]['idalbum'];
    let btnAlbum = document.getElementById("btnAlbum");
    btnAlbum.addEventListener("click", function(){getAlbum(idAlbum)});
}


// Ajout du titre dans les favoris
function modifFavoris(id, fav){
    ajaxRequest('POST', "../PHP/requestAjax.php",function(){getTitle(id)}, "id="+id+"&type=title&fav="+fav);
}

