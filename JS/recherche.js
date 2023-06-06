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
    checkbox2.value = "album";
    label2.appendChild(checkbox2);
    label2.appendChild(document.createTextNode("Album"));
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

    if (filtre == "titre" && recherche != ""){
        ajaxRequest('GET', '../PHP/requestRecherche.php?search=' + recherche + "&filtre=" + filtre, function(data){updateResultat(data)});
    }
    else if (filtre == "album" && recherche != ""){
        ajaxRequest('GET', '../PHP/requestRecherche.php?search=' + recherche + "&filtre=" + filtre, function(data){updateResultat2(data)});
    }
    else if (filtre == "artiste" && recherche != ""){
        ajaxRequest('GET', '../PHP/requestRecherche.php?search=' + recherche + "&filtre=" + filtre, function(data){updateResultat3(data)});
    }
    document.getElementById("search").value = "";
}

function updateResultat(data){
    let resultat = data;
    //console.log(resultat);
    let divRow = document.createElement("div");
    divRow.className = "row";

    const cartesParLigne = 4;

    for (let i = 0; i < resultat.length; i++) {
        if (i % cartesParLigne === 0) {
            divRow = document.createElement("div");
            divRow.className = "row";
        }

        let divCol = document.createElement("div");
        divCol.className = "col";
        divCol.style.marginBottom = "30px";

        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "10rem";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column align-items-center";

        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = resultat[i].artiste_nom;

        let cardImage = document.createElement("img");
        cardImage.className = "card-img-top";
        cardImage.src = "../Images/playlist.jpeg";

        let button = document.createElement("button");
        button.type = "submit";
        button.id = "lastTitre" + i;
        button.className = "btn card-title";
        button.value = resultat[i].idtitre; // Remplacez "id" par la valeur souhaitée
        let buttonTitle = document.createElement("h5");
        buttonTitle.innerText = resultat[i].titre_nom; // Remplacez "titre" par la valeur souhaitée

        cardBody.appendChild(cardImage);
        button.appendChild(buttonTitle);
        cardBody.appendChild(button);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        divCol.appendChild(card);
        divRow.appendChild(divCol);

        if ((i+1) % cartesParLigne === 0 || i === resultat.length - 1) {
            let body = document.getElementById("body");
            body.appendChild(divRow);
        }

        button.addEventListener('click', function() {
            getTitle(button.value);
        });
    }
}

function updateResultat2(data){
    let resultat = data;
    console.log(resultat);
    let divRow = document.createElement("div");
    divRow.className = "row";

    const cartesParLigne = 4;

    for (let i = 0; i < resultat.length; i++) {
        if (i % cartesParLigne === 0) {
            divRow = document.createElement("div");
            divRow.className = "row";
        }

        let divCol = document.createElement("div");
        divCol.className = "col";
        divCol.style.marginBottom = "30px";

        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "10rem";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column align-items-center";

        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = resultat[i].artiste_name;

        let cardImage = document.createElement("img");
        cardImage.className = "card-img-top";
        cardImage.src = "../Images/playlist.jpeg";

        let button = document.createElement("button");
        button.type = "submit";
        button.id = "album" + i;
        button.className = "btn card-title";
        button.value = resultat[i].idalbum; // Remplacez "id" par la valeur souhaitée
        let buttonTitle = document.createElement("h5");
        buttonTitle.innerText = resultat[i].album_name; // Remplacez "titre" par la valeur souhaitée

        cardBody.appendChild(cardImage);
        button.appendChild(buttonTitle);
        cardBody.appendChild(button);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        divCol.appendChild(card);
        divRow.appendChild(divCol);

        if ((i+1) % cartesParLigne === 0 || i === resultat.length - 1) {
            let body = document.getElementById("body");
            body.appendChild(divRow);
        }

        button.addEventListener('click', function() {
            getAlbum(button.value);
        });
    }
}

function updateResultat3(data){
    let resultat = data;
    console.log(resultat);
    let divRow = document.createElement("div");
    divRow.className = "row";

    const cartesParLigne = 4;

    for (let i = 0; i < resultat.length; i++) {
        if (i % cartesParLigne === 0) {
            divRow = document.createElement("div");
            divRow.className = "row";
        }

        let divCol = document.createElement("div");
        divCol.className = "col";
        divCol.style.marginBottom = "30px";

        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "10rem";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column align-items-center";

        let cardText = document.createElement("p");
        cardText.className = "card-text";
        //cardText.innerText = resultat[i].nom;

        let cardImage = document.createElement("img");
        cardImage.className = "card-img-top";
        cardImage.src = "../Images/playlist.jpeg";

        let button = document.createElement("button");
        button.type = "submit";
        button.id = "artiste" + i;
        button.className = "btn card-title";
        button.value = resultat[i].idartiste; // Remplacez "id" par la valeur souhaitée
        let buttonTitle = document.createElement("h5");
        buttonTitle.innerText = resultat[i].nom; // Remplacez "titre" par la valeur souhaitée

        cardBody.appendChild(cardImage);
        button.appendChild(buttonTitle);
        cardBody.appendChild(button);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        divCol.appendChild(card);
        divRow.appendChild(divCol);

        if ((i+1) % cartesParLigne === 0 || i === resultat.length - 1) {
            let body = document.getElementById("body");
            body.appendChild(divRow);
        }

        button.addEventListener('click', function() {
            getArtiste(button.value);
        });
    }
}

const recherche = document.querySelector('#recherche');
recherche.addEventListener('click', updateRecherche);