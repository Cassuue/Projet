// Fonction ajaxRequest

// \param type Type de la requête (GET, DELETE, POST, PUT)
// \param url L'URL avec les données
// \param callback La fonction appelée quand la requête est un succès
// \param data Les données associées à la requête

function ajaxRequest(type, url, callback, data = null) {
    let xhr;

    // Créationd de la requête XML HTTP
    xhr = new XMLHttpRequest();

    if (type == 'GET' && data != null)
        url += '?' + data;
        
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Ajout de la fonction en cours
    xhr.onload = () => { switch (xhr.status) {
            case 200:
            case 201:
                console.log(xhr.responseText);
                //callback(JSON.parse(xhr.responseText));
                callback();
                break;
            default:
                httpErrors(xhr.status);
        }
    };

    // Envoi de la requête XML HTTP
    xhr.send(data);
}


// Fonction httpErrors 

// Affichage du message d'erreur en lien avec l'erreur
// \param errorCode Le code de l'erreur

function httpErrors(errorCode) {
    let messages = {
        400: 'Requête incorrecte',
        401: 'Authentifiez vous',
        403: 'Accès refusé',
        404: 'Page non trouvée',
        500: 'Erreur interne du serveur',
        503: 'Service indisponible'
    };

    // Affichage des erreurs
    if (errorCode in messages) {
        $('#errors').html('<strong>' + messages[errorCode] + '</strong>');
        $('#errors').show();
        setTimeout(() => {
            $('#errors').hide();
        }, 5000);
    }
}