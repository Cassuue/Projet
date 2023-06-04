function getAlbum(idAlbum){
    let body = document.getElementById("body");
    body.innerHTML = "<br>";

    ajaxRequest('GET', '../PHP/requestAjax.php?id='+ idAlbum +'&type=album', displayAlbum);
}

function displayAlbum(json){

    let nom = json[0]['nom'];
    let date = json[0]['date_ajout'];
    let style = json[0]['style'];
    let image = json[0]['image'];
    let artiste = json[1]['nom'];

    let duree_totale = 0; // A calculer en php

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row'>"+
            "<div class='col col-md-3'>"+
                "<img src=../Images/"+image+" class='img-thumbnail ' alt='...' style='width: 250px;'>"+
            "</div>"+
            "<div class='col' id='col2'>"+
                "<h2>"+nom+"</h2><button type='submit' class='btn' id='btnArtiste' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-person-fill' style='padding-right: 10px;'></i>"+artiste+" </button>"+
                "<p><i class='bi bi-info-circle' style='padding-right: 10px; padding-left: 5px;'></i>"+date+" / "+duree_totale+" / "+style+"</p>"+
            "</div>"+
        "</div><div class='row'>"+
            "<table class='table table-hover'>"+
                "<thead>"+
                    "<tr>"+
                        "<th scope='col'>#</th>"+
                        "<th scope='col' class='w-75'>Titre</th>"+
                        "<th scope='col' class='w-10'>Durée</th>"+
                        "<th scope='col' class='w-10'>Options</th>"+
                    "</tr>"+
                "</thead>"+
                "<tbody id='table'>"+
                "</tbody>"+
            "</table>"+
        "</div>";

        affichageTitres(json);    
}

function affichageTitres(json){
    let table = document.getElementById('table');

    for(let i = 0; i<json[2].length; i++){
        let idtitre = json[2][i]['idtitre'];
        let titre = json[2][i]['nom'];
        let duree = json[2][i]['duree'];
        let lien = json[2][i]['lien'];
        table.innerHTML += "<tr>"+
            "<th scope='row'>"+i+"</th>"+
            "<td>"+ titre +"</td>"+
            "<td>"+ duree +"</td>"+
            "<td><button class='btn' type='submit' id=favorite"+i+" value="+idtitre+" style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
            "</button>"+
            "<button class='btn' type='submit' id='add' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                "<h5 style='margin-bottom: 2px;'><i class='bi bi-plus'></i></h5>" +
            "</button>"+
            "<button class='btn' type='submit' id=play"+i+" style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                "<h5 style='margin-bottom: 2px;'><i class='bi bi-play-fill'></i></h5>"+
            "</button></td>"+
            "</tr>";

        let fav = false;
        for (let j=0; j<json[3].length; j++){
            if(idtitre == json[3][j]['idtitre']){
                fav = true;
            }
        }

        // Création de l'évent pour l'ajout à la liste des favoris
        let btnFavorite = document.getElementById("favorite"+i);

        if(fav){
            btnFavorite.innerHTML += "<h5 style='margin-bottom: 2px;'><i class='bi bi-star-fill'></i></h5>";
        } else{
            btnFavorite.innerHTML += "<h5 style='margin-bottom: 2px;'><i class='bi bi-star'></i></h5>";
        }

    }

    let idArtiste = json[1]['idartiste'];
    let btnArtiste = document.getElementById('btnArtiste');
    btnArtiste.addEventListener("click", function(){getArtiste(idArtiste)});

    for(let i = 0; i<json[2].length; i++){
        let fav = false;
        for (let j=0; j<json[3].length; j++){
            if(json[2][i]['idtitre'] == json[3][j]['idtitre']){
                fav = true;
            }
        }
        let btnFavorite = document.getElementById('favorite'+i);
        let id = json[2][i]['idtitre'];
        btnFavorite.addEventListener("click", function(){ajaxRequest('POST', "../PHP/requestAjax.php",function(){getAlbum(json[0]['idalbum'])}, "id="+id+"&type=title&fav="+!fav)})
    }

}