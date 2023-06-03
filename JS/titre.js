
function getTitle(id){

    console.log(id);
    let body = document.getElementById("body");
    body.innerHTML = "<br>";

    ajaxRequest('POST', '../PHP/requestAjax.php', displayTitle, "id=" + id +"&type=title");
}

function displayTitle(json) {

    console.log(json);
    
    let titre = json[0]['titre'];
    let duree = json[0]['duree'];
    let artiste = json[0]['artiste'];
    let lien = json[0]['lien'];
    let album = json[0]['album'];
    let image = json[0]['image'];

    if (!image){
        image = "playlist.jpeg";
    }

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row'>"+
            "<div class='col col-md-3'>"+
                "<img src=../Images/"+image+" class='img-thumbnail ' alt='...' style='width: 250px;'>"+
            "</div>"+
            "<div class='col'>"+
                "<h2>"+titre+"</h2>"+
                "<button class='btn btn-link' id='artiste' type='submit' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-person-fill' style='padding-right: 10px;'></i>"+artiste+
                " </button>"+
            "</div>"+
        "</div>";

    if (album){
        let btnArtiste = document.getElementById("artiste");
        btnArtiste.innerHTML += "<button class='btn btn-link' id='album' type='submit' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-collection-play-fill' style='padding-right: 10px;'></i>"+album+"</button>";
    }

    body.innerHTML += "<br><br>";

    body.innerHTML += "<div class='row'>"+
            "<table class='table table-hover'>"+
                "<tbody>"+
                    "<tr>"+
                        "<th scope='col' class='w-75'><h5>"+titre+"</h5></th>"+
                        "<th scope='col' class='w-10'>"+duree+"</th>"+
                        "<th scope='col' class='w-10'>"+
                            "<button class='btn' type='submit' id='favorite' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                                "<h5 style='margin-bottom: 2px;'><i class='bi bi-star'></i></h5>"+                            
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




}