<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../CSS/connexion.css">
        
        <title> index </title>
    </head>

    <body>
        <div class="container-fluid">
            <nav class="navbar sticky-top navbar-light justify-content-center" style="background-color: #B8B9B1;">
                <a class="navbar-brand">Sticky top</a>
            </nav>

            <div class="rectangle-container" id="connexion">
                <div class="custom-container">
                    <h2 class="text-center"> Connexion </h2>
                    <form>
                        <div class="form-group" id="mail">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email" required>
                        </div>
                        <div class="form-group" id="mdp">
                            <label for="password">Mot de passe</label>
                            <input type="password" class="form-control" id="password" placeholder="Mot de passe" required>
                        </div>
                        <div class="d-flex justify-content-between align-items-start">
                            <button type="submit" class="btn btn-primary" id="BtnConnexion">Se connecter</button>
                            <div class="text-center" style="padding-top: 2%;">ou</div>
                            <button type="submit" class="btn btn-primary" id="BtnInscription">S'inscrire</button>
                            <!--<a href="#" class="btn btn-secondary">S'inscrire</a>-->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>

</html>