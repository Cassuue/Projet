<?php

class request{
    
    function connexionUser($conn, $email, $password) {
        $stmt = $conn->prepare("SELECT password FROM Utilisateur WHERE mail = :email");
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
  
  
    function getPlaylistSongs($conn, $playlistName) {
        $sql = "SELECT Titre.nom 
            FROM Titre 
            INNER JOIN appartenir ON Titre.idTitre = appartenir.idTitre 
            WHERE appartenir.nom = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $playlistName);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $titles = [];
            while ($row = $result->fetch_assoc()) {
                $titles[] = $row['nom'];
                }
            return $titles;
        } else {
            return [];
        }
    }
    
    function registerUser($conn, $email, $nom, $prenom, $date_naissance, $password) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO Utilisateur (mail, nom, prenom, date_naissance, mdp) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss", $email, $nom, $prenom, $date_naissance, $hashed_password);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    function getLatestListened($conn, $email) {
        $sql = "SELECT idTitre FROM ecouter WHERE mail = ? ORDER BY numero DESC LIMIT 10";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $tracks = array();
            while ($row = $result->fetch_assoc()) {
                $tracks[] = $row['idTitre'];
            }
            return $tracks;
        } else {
            return false;
        }
    }
    
    
    
}
?>
