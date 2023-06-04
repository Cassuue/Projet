function updateRecherche() {
    let body = document.getElementById("body");

    let divRow = document.createElement("div");
    divRow.className = "row";

    let divColSearch = document.createElement("div");
    divColSearch.className = "col";

    let divInputGroup = document.createElement("div");
    divInputGroup.className = "input-group mb-3";

    let input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
    input.placeholder = "Que souhaitez-vous écouter ?";
    input.setAttribute("aria-label", "search");
    input.setAttribute("aria-describedby", "button-addon2");

    let button = document.createElement("button");
    button.className = "btn btn-outline-secondary";
    button.type = "button";
    button.id = "button-addon2";
    button.innerText = "Rechercher";

    divInputGroup.appendChild(input);
    divInputGroup.appendChild(button);

    divColSearch.appendChild(divInputGroup);

    let divColFilter = document.createElement("div");
    divColFilter.className = "col-auto d-flex align-items-center justify-content-end"; // Utilisation des classes Bootstrap pour aligner le contenu à droite

    let buttonDropdown = document.createElement("button");
    buttonDropdown.className = "btn btn-secondary";
    buttonDropdown.type = "button";
    buttonDropdown.setAttribute("data-bs-toggle", "dropdown");
    buttonDropdown.setAttribute("aria-expanded", "false");
    buttonDropdown.innerText = "Filtrer";

    let ul = document.createElement("ul");
    ul.className = "dropdown-menu";

    let li1 = document.createElement("li");
    let label1 = document.createElement("label");
    label1.className = "dropdown-item";
    let checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";
    checkbox1.value = "action";
    checkbox1.checked = true;
    label1.appendChild(checkbox1);
    label1.appendChild(document.createTextNode("Titre"));
    li1.appendChild(label1);
    ul.appendChild(li1);

    let li2 = document.createElement("li");
    let label2 = document.createElement("label");
    label2.className = "dropdown-item";
    let checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.value = "another-action";
    label2.appendChild(checkbox2);
    label2.appendChild(document.createTextNode("Playlist"));
    li2.appendChild(label2);
    ul.appendChild(li2);

    let li3 = document.createElement("li");
    let label3 = document.createElement("label");
    label3.className = "dropdown-item";
    let checkbox3 = document.createElement("input");
    checkbox3.type = "checkbox";
    checkbox3.value = "something-else";
    label3.appendChild(checkbox3);
    label3.appendChild(document.createTextNode("Artiste"));
    li3.appendChild(label3);
    ul.appendChild(li3);

    divColFilter.appendChild(buttonDropdown);
    divColFilter.appendChild(ul);

    divRow.appendChild(divColSearch);
    divRow.appendChild(divColFilter);

    body.innerHTML = "";
    body.appendChild(divRow);

    button.addEventListener('click', search);
}

function getResearch(event){
    event.preventDefault();
    let recherche = document.getElementById("search").value;
    let filtre = document.getElementById("filtre").value;

    if (filtre == "titre"){
        ajaxRequest('GET', 'request.php?type=titre&nom=' + recherche, updateResultat);
    }
    else if (filtre == "playlist"){
        ajaxRequest('GET', 'request.php?type=playlist&nom=' + recherche, updateResultat);
    }
    else if (filtre == "artiste"){
        ajaxRequest('GET', 'request.php?type=artiste&nom=' + recherche, updateResultat);
    }
}

/*function getTexteRecherche() {
    let input = document.querySelector('input[type="text"]');
    return input.value;
  }

function search(){
    let texteRecherche = getTexteRecherche();
    let body = document.getElementById("body");

    //Récupérer les filtres sélectionnés
    let filtres = document.querySelectorAll('.filtre-checkbox:checked');

    //Créer un tableau pour stocker les résultats
    let resultat = []

    //Compteur pour suivre le nombre de requêtes
    let requetesTerminees = 0;

    //Callback pour la gestion des résultats de chaque requête
    function gestionnaireResultat(data){
        resultat.push(...data);

        //Vérifier si toutes les requêtes sont terminées
        if(++requetesTerminees === filtres.length){
            //Toutes les requêtes sont disponibles, vous pouvez les traiter
            let divResultat = document.createElement("div");
            divResultat.innerText = "Texte de recherche : " + texteRecherche + "\n" + "Résultats : " + JSON.stringify(resultat);

            // Ajouter le nouvel élément à la page
            body.appendChild(divResultat);
        }
    }

    // Parcourir les filtres sélectionnés
    filtres.forEach(function(filtre) {
        let valeurFiltre = filtre.value;
        let url;

        // Créer l'URL de la requête appropriée en fonction du filtre sélectionné
        if (valeurFiltre === 'action') {
            url = "request.php?type=titre&nom=" + texteRecherche;
        } else if (valeurFiltre === 'another-action') {
            url = "request.php?type=playlist&nom=" + texteRecherche;
        } else if (valeurFiltre === 'something-else') {
            url = "request.php?type=artiste&nom=" + texteRecherche;
        }

        // Effectuer la requête appropriée en utilisant ajaxRequest
        ajaxRequest('GET', url, gestionnaireResultat);
    });
}*/

const recherche = document.querySelector('#recherche');
recherche.addEventListener('click', updateRecherche);




