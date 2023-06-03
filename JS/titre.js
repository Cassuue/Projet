
function getTitle(id){
    let body = document.getElementById("body");
    body.innerHTML = "";

    ajaxRequest('POST', '../PHP/requestAjax.php', displayTitle, "id=" + id +"type=title");
}

function displayTitle(json) {
    
}