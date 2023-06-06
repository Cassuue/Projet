function getPlaylists(id){
    let body = document.getElementById("body");
    body.innerHTML = "<br>";
    ajaxRequest('GET', '../PHP/requestAjax.php?id='+ id +'&type=playlist', displayInfoPlaylist);

}

function displayInfoPlaylist(json){

    let idPlaylist = json[0]['idplaylist'];
    let nom = json[0]['nom'];
    let date = json[0]['date_creation'];
    let image = "playlist.jpeg";
    

    let duree_totale = 0; // A calculer en php

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row'>"+
            "<div class='col col-md-3'>"+
                "<img src=../Images/"+image+" class='img-thumbnail ' alt='...' style='width: 250px;'>"+
            "</div>"+
            "<div class='col' id='col2'>"+
                "<h2>"+nom+"</h2>"+
                "<p><i class='bi bi-info-circle' style='padding-right: 10px; padding-left: 5px;'></i>"+date+" / "+duree_totale+"</p>"+
            "</div>"+
            "<div class='col-md-1 offset-md-1'>"+
                "<button id='deletePlaylist' class='btn' type='submit' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'><h2><i class='bi bi-trash'></i></h2></button>"+
            "</div>"+
        "</div><br><br><div class='row'>"+
            "<table class='table table-hover'>"+
                "<thead>"+
                    "<tr>"+
                        "<th scope='col'>#</th>"+
                        "<th scope='col' class='w-50'>Titre</th>"+
                        "<th scope='col' class='w-15'>Date d'ajout</th>"+
                        "<th scope='col' class='w-15'>Durée</th>"+
                        "<th scope='col' class='w-10'>Options</th>"+
                        "<th scope='col' >Détails</th>"+
                    "</tr>"+
                "</thead>"+
                "<tbody id='table'>"+
                "</tbody>"+
            "</table>"+
        "</div>";

    const deletePlaylist = document.getElementById('deletePlaylist');
    deletePlaylist.addEventListener('click', function(){ajaxRequest("DELETE","../PHP/requestAjax.php/"+idPlaylist+"?type=deletePlaylist&id="+idPlaylist, pageAccueil)})

    affichageTitres(json, "playlist", 1);
}