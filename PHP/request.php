<?php

class request{

    // Fonctions SELECT
    function getInfoUser($conn){
        $stmt = 'SELECT * from utilisateur';
        $stmt = $conn->query($stmt);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    // Permet de vérifier les informations de connexion
    function connexionUser($conn, $email, $password) {
        $stmt = $conn->prepare("SELECT mdp FROM utilisateur WHERE mail = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result) {
            if (password_verify($password, $result['mdp'])) {
                return true;
            }
        }
        return false;
    }
    
    // Permet de récupérer les id des 10 derniers titres écoutés en fonction de l'utilisateur
    function getIDLatestListened($conn, $email) {
        $sql = 'SELECT * FROM ecouter WHERE mail=:email and play=true ORDER BY date DESC LIMIT 10';
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    // Permet de récupérer les informations sur un titre en fonction de son id
    function getInfoTitreID($conn, $id){
        try{
            $stmt = $conn->prepare("SELECT t.idtitre, t.duree, t.lien as lien, ar.nom as artiste, ar.idartiste as idartiste, al.nom as album, al.idalbum as idalbum, t.nom, al.image FROM titre t 
                LEFT JOIN album al ON al.idalbum = t.idalbum 
                JOIN artiste ar ON ar.idartiste = t.idartiste 
                WHERE t.idtitre = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $titles = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $titles;
    }
    
    // Permet de récupérer l'id des titres appartenant aux favoris
    function getIDFavoris($conn, $email){
        try {
            $sql = 'SELECT idTitre FROM ecouter WHERE mail=:email and favori=true';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $exception) {
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer les playlists d'un utilisateur
    function getUserPlaylists($conn, $email) {
        try{
            $sql = "SELECT * FROM Playlist WHERE mail = :email";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":email", $email);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer les informations d'une playlist
    function getInfoPlaylist($conn, $id){
        try {
            $stmt = $conn->prepare("SELECT * FROM playlist WHERE idPlaylist=:id");
            $stmt->bindParam(":id", $id );
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer les informations d'un artiste en fonction de son id 
    function getInfoArtiste($conn, $id){
        try {
            $stmt = $conn->prepare("SELECT * FROM artiste WHERE idartiste=:id");
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }


    // Permet de récupérer les albums d'un artiste
    function getArtistAlbums($conn, $idArtiste) {
        try {
            $sql = "SELECT * FROM album WHERE idartiste = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":id", $idArtiste);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer toutes les informations sur un album
    function getInfoAlbum($conn, $id){
        try {
            $stmt = $conn->prepare('SELECT * FROM album WHERE idAlbum = :id');
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer tous les titres d'un album
    function getTitresAlbum($conn, $id){
        try{
            $stmt = $conn->prepare('SELECT * FROM titre WHERE idAlbum = :id');
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer tous les titres d'une playlist
    function getTitresPlaylist($conn, $id){
        try {
            $stmt = $conn->prepare('SELECT t.idtitre, t.nom, t.duree, t.lien, a.date_ajout FROM appartenir a, titre t WHERE a.idtitre=t.idtitre and a.idPlaylist=:id');
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer tous les id des titres d'une playlist
    function IDTitresPlaylist($conn, $id){
        try {
            $stmt = $conn->prepare("SELECT idtitre, idplaylist FROM appartenir WHERE idplaylist = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    function getDureeAlbum($conn, $id){
        try{
            $stmt= $conn->prepare("SELECT SUM(duree) AS duree_total FROM titre WHERE idalbum=:id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    //Récupérer toutes les infos d'un titre avec son nom
    function getAllFromTitre($conn, $nom){
        $sql = "SELECT t.nom AS titre_nom, t.idtitre, t.duree, t.lien, t.idartiste, t.idalbum, a.nom AS artiste_nom, al.image 
                FROM titre t 
                JOIN artiste a ON t.idartiste = a.idartiste 
                LEFT JOIN album al ON t.idalbum = al.idalbum
                WHERE t.nom LIKE CONCAT ('%', :nom::text, '%')";
    
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":nom", $nom);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    

    //Récupérer toutes les infos d'un album avec nom nom
    function getAllFromAlbum($conn, $nom){
        $sql = "SELECT al.nom AS album_name, al.idalbum, al.image, al.style, al.idartiste AS album_artiste, ar.idartiste AS artiste_artiste, ar.nom AS artiste_name FROM album al, artiste ar WHERE al.nom LIKE CONCAT ('%', :nom::text, '%') AND al.idartiste = ar.idartiste";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":nom", $nom);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    //Récupérer toutes les infos d'une playlist avec nom nom
    function getAllFromArtiste($conn, $nom){
        $sql = "SELECT * FROM artiste WHERE nom LIKE CONCAT ('%', :nom::text, '%')";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":nom", $nom);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    // Fonctions INSERT

    // Permet d'insérer dans la base de données les informations d'un nouvel utilisateur
    function registerUser($conn, $email, $nom, $prenom, $date_naissance, $password) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO Utilisateur (mail, nom, prenom, date_naissance, mdp) VALUES (:mail, :nom, :prenom, :date, :mdp)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":mail", $email);
        $stmt->bindParam(":nom", $nom);
        $stmt->bindParam(":prenom", $prenom);
        $stmt->bindParam(":date", $date_naissance);
        $stmt->bindParam(":mdp", $hashed_password);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    function insertPlaylist($conn, $nom, $date, $mail){
        try{
            $stmt = $conn->prepare("INSERT INTO playlist (nom, date_creation, mail) VALUES (:nom, :date, :mail)");
            $stmt->bindParam(":nom", $nom);
            $stmt->bindParam(":date", $date);
            $stmt->bindParam(":mail", $mail);
            $stmt->execute();
        } catch (PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return true;
    }

    function insertTitrePlaylist($conn, $idTitre, $idPlaylist, $date){
        try{
            $stmt = $conn->prepare("INSERT INTO appartenir (idtitre, idplaylist, date_ajout) VALUES (:idtitre, :idplaylist, :date)");
            $stmt->bindParam(":idtitre", $idTitre);
            $stmt->bindParam(":date", $date);
            $stmt->bindParam(":idplaylist", $idPlaylist);
            $stmt->execute();
        } catch (PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return true;
    }

    // Fonctions UPDATE

    // Permet d'ajouter un titre aux favoris
    function modifFavori($conn, $id, $mail, $fav){
        try {
            $stmt = $conn->prepare('UPDATE ecouter SET favori=:fav where idtitre=:id and mail=:mail');
            $stmt->bindParam(":mail", $mail);
            $stmt->bindParam(":id", $id);
            $stmt->bindParam(":fav", $fav);
            $stmt->execute();
        } catch (PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return true;
    }

    function updateUser($conn, $nom, $prenom, $mail, $previous_mail, $date_naissance, $password){
        try {
            $stmt = $conn->prepare('UPDATE utilisateur SET nom=:nom, prenom=:prenom, date_naissance=:date_naissance, mdp=:mdp, mail=:mail where mail=:previous_mail');
            $stmt->bindParam(":nom", $nom);
            $stmt->bindParam(":prenom", $prenom);
            $stmt->bindParam(":mail", $mail);
            $stmt->bindParam(":date_naissance", $date_naissance);
            $stmt->bindParam(":mdp", $password);
            $stmt->bindParam(":previous_mail", $previous_mail);
            echo $previous_mail;
            $stmt->execute();
        } catch (PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return true;
    }

    public function getUserInfo($conn, $userEmail) {
        try {
            $sql = 'SELECT mail, nom, prenom, date_naissance FROM Utilisateur WHERE mail = :email';
            $stmt = $conn->prepare($sql);
            $stmt->execute([':email' => $userEmail]);
            $userInfo = $stmt->fetch(PDO::FETCH_ASSOC);

            return $userInfo;
        } catch (PDOException $e) {
            echo "Erreur lors de la récupération des informations de l'utilisateur : " . $e->getMessage();
        }
    }

    // Fonctions DELETE

    // Suppression d'une playlist
    function deletePlaylist($conn, $id){
        try{
            $stmt = $conn->prepare("DELETE FROM playlist WHERE idplaylist=:id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
        } catch (PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return true;

    }

    function deleteTitrePlaylist($conn, $idTitre, $idPlaylist){
        try{
            $stmt = $conn->prepare("DELETE FROM appartenir WHERE idplaylist=:idPlaylist AND idtitre=:idTitre");
            $stmt->bindParam(':idPlaylist', $idPlaylist);
            $stmt->bindParam(':idTitre', $idTitre);
            $stmt->execute();
        } catch (PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return true;
    }

}
?>
