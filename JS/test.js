function updatePage() {
    let body = document.getElementById("body");
    body.innerHTML = "";

    // Carousel 1
    let carousel1 = document.createElement("div");
    carousel1.id = "carouselExampleControls1";
    carousel1.className = "carousel carousel-dark slide";
    carousel1.setAttribute("data-ride", "carousel");
    body.appendChild(carousel1);

    let carouselInner1 = document.createElement("div");
    carouselInner1.className = "carousel-inner";
    carousel1.appendChild(carouselInner1);

    let carouselItem1 = document.createElement("div");
    carouselItem1.className = "carousel-item active";
    carouselInner1.appendChild(carouselItem1);

    let container1 = document.createElement("div");
    container1.className = "container";
    carouselItem1.appendChild(container1);

    let row1 = document.createElement("div");
    row1.className = "row justify-content-center";
    row1.id = "lastTitles";
    container1.appendChild(row1);

    let carouselItem2 = document.createElement("div");
    carouselItem2.className = "carousel-item";
    carouselInner1.appendChild(carouselItem2);

    let container2 = document.createElement("div");
    container2.className = "container";
    carouselItem2.appendChild(container2);

    let row2 = document.createElement("div");
    row2.className = "row justify-content-center";
    row2.id = "lastTitles2";
    container2.appendChild(row2);

    let carouselControlPrev1 = document.createElement("button");
    carouselControlPrev1.className = "carousel-control-prev";
    carouselControlPrev1.type = "button";
    carouselControlPrev1.setAttribute("data-bs-target", "#carouselExampleControls1");
    carouselControlPrev1.setAttribute("data-bs-slide", "prev");
    carousel1.appendChild(carouselControlPrev1);

    let carouselControlPrevIcon1 = document.createElement("span");
    carouselControlPrevIcon1.className = "carousel-control-prev-icon";
    carouselControlPrevIcon1.setAttribute("aria-hidden", "true");
    carouselControlPrev1.appendChild(carouselControlPrevIcon1);

    let carouselControlPrevSpan1 = document.createElement("span");
    carouselControlPrevSpan1.className = "visually-hidden";
    carouselControlPrevSpan1.textContent = "Previous";
    carouselControlPrev1.appendChild(carouselControlPrevSpan1);

    let carouselControlNext1 = document.createElement("button");
    carouselControlNext1.className = "carousel-control-next";
    carouselControlNext1.type = "button";
    carouselControlNext1.setAttribute("data-bs-target", "#carouselExampleControls1");
    carouselControlNext1.setAttribute("data-bs-slide", "next");
    carousel1.appendChild(carouselControlNext1);

    let carouselControlNextIcon1 = document.createElement("span");
    carouselControlNextIcon1.className = "carousel-control-next-icon";
    carouselControlNextIcon1.setAttribute("aria-hidden", "true");
    carouselControlNext1.appendChild(carouselControlNextIcon1);

    let carouselControlNextSpan1 = document.createElement("span");
    carouselControlNextSpan1.className = "visually-hidden";
    carouselControlNextSpan1.textContent = "Next";
    carouselControlNext1.appendChild(carouselControlNextSpan1);
}

function displayLastTitle(json) {
    let body = document.getElementById("body");

    let row = document.createElement("div");
    row.className = "row";
    row.style.marginTop = "1%";
    row.style.marginBottom = "1%";
    body.appendChild(row);

    let heading = document.createElement("h3");
    heading.id = "list1";
    heading.textContent = "Récemment écouté :";
    row.appendChild(heading);

    let lastTitle = document.getElementById("lastTitles");
    let lastTitle2 = document.getElementById("lastTitles2");

    let size = json.length;

    if (size < 5) {
        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "10rem";
        card.style.marginRight = "2%";
        card.style.zIndex = "1";
        lastTitle2.appendChild(card);

        let cardImg = document.createElement("img");
        cardImg.className = "card-img-top";
        cardImg.src = "../Images/white.jpeg";
        card.appendChild(cardImg);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        let submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.id = "titre";
        submitBtn.className = "btn card-title";
        cardBody.appendChild(submitBtn);

        let submitBtn2 = document.createElement("button");
        submitBtn2.type = "submit";
        submitBtn2.id = "lastArtist";
        submitBtn2.className = "btn btn-link";
        submitBtn2.style.color = "black";
        submitBtn2.style.marginRight = "6px";
        cardBody.appendChild(submitBtn2);
    }

    for (let i = 0; i < size; i++) {
        let id = json[i][0]['id'];
        let titre = json[i][0]['titre'];
        let artiste = json[i][0]['artiste'];
        let album = json[i][0]['album'];
        let image = json[i][0]['image'];

        if (!image) {
            image = "playlist.jpeg";
        }

        if (i < 5) {
            let cardHtml = "<div class='card' style='width: 10rem; margin-right: 2%; z-index: 1'>" +
                "<img class='card-img-top' src=../Images/" + image + ">" +
                "<div class='card-body'>" +
                "<button type='submit' id=lastTitre"+id+" class='btn card-title' ><h5>" + titre + "</h5></button><br>" +
                "<button type='submit' id=lastArtist class='btn btn-link' style='color: black; margin-right: 6px;'>" + artiste + "</button>";

            let card = document.createElement("div");
            card.className = "card";
            card.style.width = "10rem";
            card.style.marginRight = "2%";
            card.style.zIndex = "1";
            card.innerHTML = cardHtml;
            lastTitle.appendChild(card);

            if (album) {
                let idDoc = document.getElementById("lastArtist" + id);
                let albumBtn = document.createElement("button");
                albumBtn.type = "submit";
                albumBtn.id = id;
                albumBtn.className = "btn btn-link";
                albumBtn.style.color = "black";
                albumBtn.style.marginRight = "6px";
                albumBtn.textContent = album;
                idDoc.insertAdjacentElement("afterend", albumBtn);
            }
        } else {
            let card = document.createElement("div");
            card.className = "card";
            card.style.width = "10rem";
            card.style.marginRight = "2%";
            card.style.zIndex = "1";
            lastTitle2.appendChild(card);

            let cardImg = document.createElement("img");
            cardImg.className = "card-img-top";
            cardImg.src = "../Images/" + image;
            card.appendChild(cardImg);

            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            card.appendChild(cardBody);

            let submitBtn = document.createElement("button");
            submitBtn.type = "submit";
            submitBtn.id = "titre" + id;
            submitBtn.className = "btn card-title";
            cardBody.appendChild(submitBtn);

            let submitBtn2 = document.createElement("button");
            submitBtn2.type = "submit";
            submitBtn2.id = "lastArtist" + id;
            submitBtn2.className = "btn btn-link";
            submitBtn2.style.color = "black";
            submitBtn2.style.marginRight = "6px";
            submitBtn2.textContent = artiste;
            cardBody.appendChild(submitBtn2);

            if (album) {
                let idDoc = document.getElementById("lastArtist" + id);
                let albumBtn = document.createElement("button");
                albumBtn.type = "submit";
                albumBtn.id = id;
                albumBtn.className = "btn btn-link";
                albumBtn.style.color = "black";
                albumBtn.style.marginRight = "6px";
                albumBtn.textContent = album;
                idDoc.insertAdjacentElement("afterend", albumBtn);
            }
            const btnTitre = document.getElementById("lastTitre"+id);
            btnTitre.addEventListener("click", afficherTitre);
        }
    }
}

function getLastTitle(){
    ajaxRequest('GET', '../PHP/requestAjax.php?type=lastTitle', displayLastTitle);
}

function afficherTitre(){
    let body = document.getElementById("body");
    body.innerHTML = "<div class=row style='margin-top: 1%; margin-bottom: 1%;'><h3 id='titre' >Infos sur le titre :</h3></div>";
}


updatePage();
getLastTitle();