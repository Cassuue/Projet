/*function updateRecherche() {
    let body = document.getElementById("body");

    let divContainer = document.createElement("div");
    divContainer.className = "container";

    let divRow = document.createElement("div");
    divRow.className = "row align-items-center";

    let divInputGroup = document.createElement("div");
    divInputGroup.className = "input-group col";

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

    let divDropdown = document.createElement("div");
    divDropdown.className = "dropdown col";

    let buttonDropdown = document.createElement("button");
    buttonDropdown.className = "btn btn-secondary dropdown-toggle";
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

    divDropdown.appendChild(buttonDropdown);
    divDropdown.appendChild(ul);

    divRow.appendChild(divInputGroup);
    divRow.appendChild(divDropdown);

    divContainer.appendChild(divRow);

    body.innerHTML = "";
    body.appendChild(divContainer);
}*/

/*function updateRecherche() {
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
    divColFilter.className = "col-auto";

    let divDropdown = document.createElement("div");
    divDropdown.className = "dropdown";

    let buttonDropdown = document.createElement("button");
    buttonDropdown.className = "btn btn-secondary dropdown-toggle";
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

    divDropdown.appendChild(buttonDropdown);
    divDropdown.appendChild(ul);

    divColFilter.appendChild(divDropdown);

    divRow.appendChild(divColSearch);
    divRow.appendChild(divColFilter);

    body.innerHTML = "";
    body.appendChild(divRow);
}*/

/*function updateRecherche() {
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
    divColFilter.className = "col-auto";

    let divBtnGroup = document.createElement("div");
    divBtnGroup.className = "btn-group";

    let buttonDropdown = document.createElement("button");
    buttonDropdown.className = "btn btn-secondary dropdown-toggle";
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

    divBtnGroup.appendChild(buttonDropdown);
    divBtnGroup.appendChild(ul);

    divColFilter.appendChild(divBtnGroup);

    divRow.appendChild(divColSearch);
    divRow.appendChild(divColFilter);

    body.innerHTML = "";
    body.appendChild(divRow);
}*/

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
}




function search(){
    updateRecherche();
}

const recherche = document.querySelector('#recherche');
recherche.addEventListener('click', search);




