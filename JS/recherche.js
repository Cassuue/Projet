function updateRecherche() {
    let body = document.getElementById("body");
    
    let divRow = document.createElement("div");
    divRow.className = "row";

    let form = document.createElement("form");

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

    form.appendChild(divInputGroup);

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

    divRow.appendChild(form);
    divRow.appendChild(divDropdown);

    body.innerHTML = "";
    body.appendChild(divRow);
}


/*function updateRecherche() {
    let body = document.getElementById("body");
    body.innerHTML = "<div class='row'>" +
        "<form>" +
        "<div class='input-group mb-3'>" +
        "<div class='input-group-prepend'>" +
        "<button class='btn btn-outline-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>" +
        "Options de recherche" +
        "</button>" +
        "<ul class='dropdown-menu'>" +
        "<li>" +
        "<label class='dropdown-item'>" +
        "<input type='checkbox' value='playlist'> Playlist" +
        "</label>" +
        "</li>" +
        "<li>" +
        "<label class='dropdown-item'>" +
        "<input type='checkbox' value='titre'> Titre" +
        "</label>" +
        "</li>" +
        "<li>" +
        "<label class='dropdown-item'>" +
        "<input type='checkbox' value='artiste'> Artiste" +
        "</label>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<input type='text' class='form-control' placeholder='Que souhaitez-vous écouter ?' aria-label='search' aria-describedby='button-addon2'>" +
        "<div class='input-group-append'>" +
        "<button class='btn btn-outline-secondary' type='button' id='button-addon2'>Rechercher</button>" +
        "</div>" +
        "</div>" +
        "</form>" +
        "</div>";
}*/

/*function updateRecherche() {
    let body = document.getElementById("body");
    body.innerHTML = "<div class='row'>" +
        "<form>" +
        "<div class='input-group input-group-lg mb-3'>" +
        "<div class='input-group-prepend'>" +
        "<button class='btn btn-outline-secondary dropdown-toggle btn-lg' type='button' data-bs-toggle='dropdown' aria-expanded='false'>" +
        "Options de recherche" +
        "</button>" +
        "<ul class='dropdown-menu'>" +
        "<li>" +
        "<label class='dropdown-item'>" +
        "<input type='checkbox' value='playlist'> Playlist" +
        "</label>" +
        "</li>" +
        "<li>" +
        "<label class='dropdown-item'>" +
        "<input type='checkbox' value='titre'> Titre" +
        "</label>" +
        "</li>" +
        "<li>" +
        "<label class='dropdown-item'>" +
        "<input type='checkbox' value='artiste'> Artiste" +
        "</label>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<input type='text' class='form-control' placeholder='Que souhaitez-vous écouter ?' aria-label='search' aria-describedby='button-addon2'>" +
        "<div class='input-group-append'>" +
        "<button class='btn btn-outline-secondary btn-lg' type='button' id='button-addon2'>Rechercher</button>" +
        "</div>" +
        "</div>" +
        "</form>" +
        "</div>";
}*/


function search(){
    updateRecherche();
}

const recherche = document.querySelector('#recherche');
recherche.addEventListener('click', search);




