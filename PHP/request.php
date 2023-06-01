<?php

class request{
    function connexionClient($conn, $email, $password) {
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
}
?>
