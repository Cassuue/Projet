<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="../CSS/connexion.css">
        <title> Connexion </title>
    </head>

    <body>
        <div class="container-fluid">
            <nav class="navbar sticky-top navbar-light justify-content-center" style="background-color: #6379AE;">
                <span class="material-icons white md-64">music_note</span>           
            </nav>

            <div class="rectangle-container" id="connexion">
                <div class="custom-container">
                    <h2 class="text-center"> Connexion </h2>
                    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                        <div class="form-group" id="mail">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email">
                        </div>
                        <div class="form-group" id="mdp">
                            <label for="password">Mot de passe</label>
                            <input type="password" class="form-control" id="password" placeholder="Mot de passe">
                        </div>
                        <div class="d-flex justify-content-between align-items-start" id="btn">
                            <button type="submit" class="btn" id="BtnConnexion" style="background-color: #BFD2FF">Se connecter</button>
                            <div class="text-center" style="padding-top: 2%;">ou</div>
                            <a href="inscription.php" class="btn" style="background-color: #BFD2FF">S'inscrire</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>

</html>


<?php
    require_once('../database.php');

    // Enable all warnings and errors.
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    
    // Database connection.
    $conn = connexionBD();

    if(!empty($_POST['email']) && !empty($_POST['password'])){
        $mail = $_POST['email'];
        $mdp = $_POST['password'];

        //$mdp_bdd = dbGetPassword($conn, $mail);   => A CODER

        $test = FALSE;

        foreach($mdp_bdd as $pers){
            if(password_verify($mdp, $pers['mdp']) && $pers['mail'] == $mail){
                $test = TRUE;
                header("Location: accueil.html");
            }
        }

        if (!$test){
        echo "<br> <div class='row col-md-5 offset-md-3 text-bg-danger p-1 text-center rounded-3'> <p> Erreur, le mot de passe ou l'adresse mail entrée est fausse !</p> </div>";
        }

    }

?>