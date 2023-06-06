<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <link rel="stylesheet" href="../CSS/inscription.css">
        <script src="../JS/snippets.js" defer></script>
        <title> index </title>
    </head>

    <body>
        <div class="container-fluid">
            <nav class="navbar sticky-top navbar-light justify-content-center" style="background-color: #6379AE;">
                <h1><i class="bi bi-music-note-beamed" style="color: white;"></i></h1>
            </nav>

            <div class="rectangle-container">
                <div class="custom-container">
                    <h2 class="text-center"> Formulaire d'inscription</h2>
                    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                        <div class="row" id="ligne1">
                            <div class="col-md-6">
                                <label for="nom">Nom</label>
                                <input name="nom" type="nom" class="form-control" placeholder="Nom" required>
                            </div>
                            <div class="col-md-6">
                                <label for="prenom">Prenom</label>
                                <input name="prenom" type="prenom" class="form-control" placeholder="Prénom" required>
                            </div>
                        </div>
                        <div class="row" id="ligne2">
                            <div class="col-md-6">
                                <label for="email">Email</label>
                                <input name="mail" type="email" class="form-control" placeholder="Email" required>
                            </div>
                            <div class="col-md-6">
                                <label for="Naissance">Date de naissance</label>
                                <input  type="naissance" class="form-control" name="naissance" placeholder="AAAA/MM/JJ" required>
                            </div>
                        </div>
                        <div class="row" id="ligne3">
                            <div class="col-md-6">
                                <label for="password">Mot de passe</label>
                                <input name="password" type="password" class="form-control" placeholder="Mot de passe" required>
                            </div>
                            <div class="col-md-6">
                                <label for="password">Confirmer le mot de passe</label>
                                <input name="passwordConf" type="password" class="form-control" placeholder="Confirmer le mot de passe" required>
                            </div>
                        </div>
                        <div class="row" id="inscription">
                            <div class="offset-md-4">
                                <a href="connexion.php" type="button" class="btn" id="retour" style="background-color: #BFD2FF">Retour</a>

                            </div>
                            <div class="offset-md-3">
                                <button type="submit" class="btn" id="inscription" style="background-color: #BFD2FF" >S'inscrire</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>

</html>


<?php

    include '../PHP/database.php';
    include '../PHP/request.php'; 

    // Enable all warnings and errors.
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    
    // Database connection.
    $conn = new Db;
    $conn = $conn->connexionBD();

    if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['mail']) && isset($_POST['naissance']) && isset($_POST['password']) && isset($_POST['passwordConf'])){
        $input = new request;
        $input = $input->registerUser($conn, $_POST['mail'], $_POST['nom'], $_POST['prenom'], $_POST['naissance'], $_POST['password']);

        $titres = new request;
        $titres = $titres->getTitres($conn);

        $date = date('Y-m-d H:i:s');

        for($i = 0; $i<count($titres); $i++){
            $ecouter = new request;
            $ecouter = $ecouter->insertTitreEcouter($conn, $_POST['mail'], $titres[$i]['idtitre'], $date);
        }

        header("Location: connexion.php");
   }

?>