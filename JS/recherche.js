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
    input.id = "search";    
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
    buttonDropdown.className = "btn btn-link justify-content-center";
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
    checkbox1.type = "radio";
    checkbox1.name = "filter";
    checkbox1.value = "titre";
    checkbox1.checked = true;
    label1.appendChild(checkbox1);
    label1.appendChild(document.createTextNode("Titre"));
    li1.appendChild(label1);
    ul.appendChild(li1);

    let li2 = document.createElement("li");
    let label2 = document.createElement("label");
    label2.className = "dropdown-item";
    let checkbox2 = document.createElement("input");
    checkbox2.type = "radio";
    checkbox2.name = "filter";
    checkbox2.value = "playlist";
    label2.appendChild(checkbox2);
    label2.appendChild(document.createTextNode("Playlist"));
    li2.appendChild(label2);
    ul.appendChild(li2);

    let li3 = document.createElement("li");
    let label3 = document.createElement("label");
    label3.className = "dropdown-item";
    let checkbox3 = document.createElement("input");
    checkbox3.type = "radio";
    checkbox3.name = "filter";
    checkbox3.value = "artiste";
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

    button.addEventListener('click', getResearch);
}

function getResearch(){
    //event.preventDefault();
    let recherche = document.querySelector('#search').value;
    let filtre = document.querySelector('input[name="filter"]:checked').value;

    console.log(recherche);
    console.log(filtre);

    if (filtre == "titre"){
        ajaxRequest('GET', 'accueil.php?search=' + recherche + "&filtre=" + filtre, updateResultat);
    }
    else if (filtre == "playlist"){
        ajaxRequest('GET', 'accueil.php?search=' + recherche + "&filtre=" + filtre, updateResultat2);
    }
    else if (filtre == "artiste"){
        ajaxRequest('GET', 'accueil.php?search=' + recherche + "&filtre=" + filtre, updateResultat3);
    }
    document.getElementById("search").value = "";
    let radioButtons = document.querySelectorAll('input[name="filter"]');
    radioButtons.forEach(function(radio){
        radio.checked = false;
    });
}

function updateResultat(response){
    let body = document.getElementById("body");
    body.insertAdjacentElement("afterend", "<div class=row style='margin-top: 1%; margin-bottom: 1%;'><h3 id='list1' >Résultat de la recherche :</h3></div>");
    let divRow = document.createElement("div");
    divRow.className = "row";
    divRow.id = "list1";
    let divCol = document.createElement("div");
    divCol.className = "col";
    let ul = document.createElement("ul");
    ul.className = "list-group";
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = response;
    ul.appendChild(li);
    divCol.appendChild(ul);
    divRow.appendChild(divCol);
    body.appendChild(divRow);
}

function updateResultat2(response){
    let body = document.getElementById("body");
    body.insertAdjacentElement("afterend", "<div class=row style='margin-top: 1%; margin-bottom: 1%;'><h3 id='list2' >Résultat de la recherche :</h3></div>");
    let divRow = document.createElement("div");
    divRow.className = "row";
    divRow.id = "list2";
    let divCol = document.createElement("div");
    divCol.className = "col";
    let ul = document.createElement("ul");
    ul.className = "list-group";
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = response;
    ul.appendChild(li);
    divCol.appendChild(ul);
    divRow.appendChild(divCol);
    body.appendChild(divRow);
}

function updateResultat3(response){
    let body = document.getElementById("body");
    body.insertAdjacentElement("afterend", "<div class=row style='margin-top: 1%; margin-bottom: 1%;'><h3 id='list3' >Résultat de la recherche :</h3></div>");
    let divRow = document.createElement("div");
    divRow.className = "row";
    divRow.id = "list3";
    let divCol = document.createElement("div");
    divCol.className = "col";
    let ul = document.createElement("ul");
    ul.className = "list-group";
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = response;
    ul.appendChild(li);
    divCol.appendChild(ul);
    divRow.appendChild(divCol);
    body.appendChild(divRow);
}

const recherche = document.querySelector('#recherche');
recherche.addEventListener('click', updateRecherche);




