<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../CSS/inscription.css">
        <title> index </title>
    </head>

    <body>
        <div class="container-fluid">
            <nav class="navbar sticky-top navbar-light justify-content-center" style="background-color: #B8B9B1;">
                <a class="navbar-brand">Sticky top</a>
            </nav>

            <div class="rectangle-container">
                <div class="custom-container">
                    <h2 class="text-center"> Formulaire d'inscription</h2>
                    <form>
                        <div class="row" id="ligne1">
                            <div class="col-md-6">
                                <label for="nom">Nom</label>
                                <input type="nom" class="form-control" placeholder="Nom" required>
                            </div>
                            <div class="col-md-6">
                                <label for="prenom">Prenom</label>
                                <input type="prenom" class="form-control" placeholder="Prénom" required>
                            </div>
                        </div>
                        <div class="row" id="ligne2">
                            <div class="col-md-6">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" placeholder="Email" required>
                            </div>
                            <div class="col-md-6">
                                <label for="Naissance">Date de naissance</label>
                                <input type="naissance" class="form-control" placeholder="Date de naissance" required>
                            </div>
                        </div>
                        <div class="row" id="ligne3">
                            <div class="col-md-6">
                                <label for="password">Mot de passe</label>
                                <input type="password" class="form-control" placeholder="Mot de passe" required>
                            </div>
                            <div class="col-md-6">
                                <label for="password">Confirmer le mot de passe</label>
                                <input type="password" class="form-control" placeholder="Confirmer le mot de passe" required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center" id="inscription">
                            <button type="submit" class="btn btn-primary">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>

</html>