
<?php
    session_start();
    if($_SESSION['type'] == 'deco'){
        header('Location: connexion.php');
    }
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="../CSS/inscription.css">
        <title> index </title>
    </head>

    <body>
        <div class="container-fluid">
            <nav class="navbar sticky-top navbar-light justify-content-center" style="background-color: #6379AE;">
                <span class="material-icons white md-64">music_note</span>           
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
                        <div class="d-flex justify-content-center" id="inscription">
                            <button type="submit" class="btn" id="inscription" style="background-color: #BFD2FF">S'inscrire</button>
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

        header("Location: connexion.php");
   }

?>