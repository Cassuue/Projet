<?php
    session_start();
    $_SESSION['type'] = "deco";
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <link rel="stylesheet" href="../CSS/connexion.css">
        <title> Connexion </title>
    </head>

    <body>
        <div class="container-fluid">
            <nav class="navbar sticky-top navbar-light justify-content-center" style="background-color: #6379AE;">
                <h1><i class="bi bi-music-note-beamed" style="color: white;"></i></h1>
            </nav>

            <div class="rectangle-container" id="connexion">
                <div class="custom-container">
                    <h2 class="text-center"> Connexion </h2>
                    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" name="mail" placeholder="Email">
                        </div>
                        <div class="form-group" id="mdp">
                            <label for="password">Mot de passe</label>
                            <input type="password" class="form-control" name="password" placeholder="Mot de passe">
                        </div>
                        <div class="d-flex justify-content-between align-items-start" id="btn">
                            <button type="submit" class="btn" id="BtnConnexion" style="background-color: #BFD2FF">Se connecter</button>
                            <div class="text-center" style="padding-top: 2%;">ou</div>
                            <a href="../PHP/inscription.php" class="btn" style="background-color: #BFD2FF">S'inscrire</a>
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

    if(!empty($_POST['mail']) && !empty($_POST['password'])){
        $mail = $_POST['mail'];
        $mdp = $_POST['password'];

        $testConn = new request;
        $testConn = $testConn->connexionUser($conn, $mail, $mdp);

        if($testConn){
            $_SESSION['type']= "conn";
            $_SESSION['mail']= $mail;
            header("Location: accueil.php");
        } else{
            echo "<br> <div class='row col-md-5 offset-md-3 text-bg-danger p-1 text-center rounded-3'> <p> Erreur, le mot de passe ou l'adresse mail entrée est fausse !</p> </div>";
        }
    }

?>