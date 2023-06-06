<?php
    session_start();

    if($_SESSION['type'] == 'deco'){
        header('Location: connexion.php');
    }

    include_once('database.php');
    include_once('request.php');

    $userEmail = $_SESSION['mail'];


    $dbInstance = Db::connexionBD();
    $userInfo = [];
    if ($dbInstance) {
        $request = new request();
        $userInfo = $request->getUserInfo($dbInstance, $userEmail);
    }

    $dateOfBirth = new DateTime($userInfo['date_naissance']);
    $today = new DateTime('today');
    $age = $dateOfBirth->diff($today)->y;

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Profil utilisateur</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <!-- CSS -->
    <link rel="stylesheet" href="../CSS/accueil.css">
</head>
<body>
<div class="container-fluid">
            <nav class="navbar" style="background-color: #6379AE;">
                <div class="container-fluid">
                    <span class="navbar-item">
                        <button class="navbar-toggler border-0 order-1"  style="color: #FFFFFF" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <h4><i class="bi bi-list"></i></h4>
                        </button>
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header" style="background-color: #6379AE;">
                                <h4 class="offcanvas-title" id="offcanvasNavbarLabel" style="color: white;">Menu</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a href="accueil.php" class="btn btn-link" style="color: black; text-decoration: none;"> <h5><i class="bi bi-house" style="padding-right: 20px;"></i> Accueil</h5> </button>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        
                        <a href="userinfo.php" class="btn btn-link text-align-center" style='color: white; margin-right: 6px; margin-bottom: 10px; text-decoration: none;'> <i class="bi bi-person" style="color: white;"></i> Profil</a>
                    </span>

                    <h4><i class="bi bi-music-note-beamed" style="color: white;"></i></h4>

                    <span class="navbar-item">
                        <a href="connexion.php" class="btn" style="color: #FFFFFF; margin-right: 20px;">Déconnexion</a>
                    </span>  
                </div>
            </nav>
        </div>

<div class="container">
        <h1 style="text-align: center; padding-bottom: 20px; padding-top: 10px">Formulaire</h1>
        <form  action="updateProfile.php" method = "POST">
            <div class="row d-flex flex-column align-items-center">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="input1" class="form-label">Entrer le nouveau prénom</label>
                        <input type="text" name="prenom" class="form-control" id="input1" placeholder="<?php echo $userInfo["prenom"];?>">
                    </div>
                </div>
            </div>
            <div class="row d-flex flex-column align-items-center">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="input2" class="form-label">Entrer le nouveau nom</label>
                        <input type="text" name="nom" class="form-control" id="input2" placeholder="<?php echo $userInfo["nom"];?>">
                    </div>
                </div>
            </div>
            <div class="row d-flex flex-column align-items-center">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="input3" class="form-label">Entrer la nouvelle adresse email</label>
                        <input type="mail" name="mail" class="form-control" id="input3" placeholder="<?php echo $userInfo["mail"];?>">
                    </div>
                </div>
            </div>
            <div class="row d-flex flex-column align-items-center">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="input4" class="form-label">Entrer la nouvelle date de naissance</label>
                        <input type="text" name="date_naissance" class="form-control" id="input4" placeholder="<?php echo $userInfo["date_naissance"];?>">
                    </div>
                </div>
            </div>
            <div class="row d-flex flex-column align-items-center">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="input5" class="form-label">Entrer le nouveau mot de passe</label>
                        <input type="password" name="password" class="form-control" id="input5">
                    </div>
                </div>
            </div>
            <div class="row d-flex flex-column align-items-center">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="input6" class="form-label">Confirmation du nouveau mot de passe</label>
                        <input type="password" name="password2" class="form-control" id="input6">
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary" style = "margin-top: 10px" name="soumettre">Soumettre</button>
            </div>
        </form>
    </div>
<!--
    <?php
        if(isset($_POST['prenom']) && isset($_POST['nom']) && isset($_POST['mail']) && isset($_POST['date_naissance']) && isset($_POST['password']) && isset($_POST['password2'])){
            $prenom = $_POST['prenom'];
            $nom = $_POST['nom'];
            $mail = $_POST['mail'];
            $date_naissance = $_POST['date_naissance'];
            $password = $_POST['password'];
            $password2 = $_POST['password2'];

            if ($password != $password2){
                echo "Les mots de passe ne correspondent pas";
            }
            else{
                $password = password_hash($password, PASSWORD_DEFAULT);
            }

            $update = new request;
            $update = $update->updateUser($dbInstance, $nom, $prenom, $mail, $userEmail, $date_naissance, $password);

            $_SESSION['mail'] = $mail;
        }
    ?>
-->
</body>
</html>