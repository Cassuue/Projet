<?php

    class CardMusique{

        // Constructeur

        function __construct($title, $id, $lien_img){
            echo "<div class='card' style='width: 10rem;'>
            <img class='card-img-top' src=".$lien_img.">
            <div class='card-body'>
              <button type='submit' id=".$id." class='btn card-title' ><h5>".$title."</h5></button>";
        }

        // Fonction 

        function ajouterBoutton($id, $text){
            echo "<button type='submit' id=".$id." class='btn btn-link' style='color: black; margin-right: 6px;'>".$text."</button>";
        }

        // Destructeur

        function __destruct(){
            echo "</div></div>";
        }

    }