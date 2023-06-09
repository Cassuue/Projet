DELETE FROM Utilisateur;
DELETE FROM Titre;
DELETE FROM Album;
DELETE FROM Artiste;
DELETE FROM Playlist;
DELETE FROM ecrire;
DELETE FROM ecouter;
DELETE FROM composer;
DELETE FROM appartenir;
DELETE FROM avoir;


INSERT INTO Utilisateur VALUES
('cassie.peridy@mail.com', 'peridy', 'cassie', '2003-06-20', '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe'),
('antoine.pajdak@mail.com', 'pajdak', 'antoine', '2002-05-05', '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe'),
('nathan.simon@mail.com', 'simon', 'nathan', '2003-04-03', '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe');

-- Mot de passe décrypté : mdp


ALTER SEQUENCE Titre_idTitre_seq RESTART;
INSERT INTO Titre (nom, duree, lien) VALUES
('Titre 1', 3.20, 'audio.mp3'),
('Titre 2', 3.50, 'audio.mp3'),
('Titre 3', 3.10, 'audio.mp3'),
('Titre 4', 3.03, 'audio.mp3'),
('Titre 5', 3.20, 'audio.mp3'),
('Titre 6', 2.50, 'audio.mp3');


ALTER SEQUENCE Album_idAlbum_seq RESTART;
INSERT INTO Album (nom, date_ajout, image, style)VALUES
('album1', '2023-05-05', '/Image/th.jpeg', 'rock'),
('album2', '2023-02-05', '/Image/th.jpeg', 'pop');

ALTER SEQUENCE Artiste_idArtiste_seq RESTART;
INSERT INTO artiste (nom) VALUES
('Artiste1'),
('Artiste2');

INSERT INTO playlist VALUES
('playlist1', '2023-08-05', 'cassie.peridy@mail.com'),
('playlist2', '2023-03-05', 'antoine.pajdak@mail.com');

INSERT INTO ecrire VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(6, 1);

INSERT INTO ecouter VALUES
(1, 'cassie.peridy@mail.com', 1, true),
(2, 'cassie.peridy@mail.com', 2, false),
(3, 'cassie.peridy@mail.com', 3, true),
(4, 'cassie.peridy@mail.com', 4, false),
(5, 'cassie.peridy@mail.com', 5, false),
(6, 'cassie.peridy@mail.com', 6, true);

INSERT INTO composer VALUES
(1, 1),
(2, 1),
(2, 2);

INSERT INTO appartenir VALUES
(1, 'playlist1', '2023-06-21'),
(2, 'playlist1', '2023-06-21'),
(3, 'playlist1', '2023-06-21'),
(4, 'playlist2', '2023-06-21');

INSERT INTO avoir VALUES
(1, 2),
(1, 1),
(1, 3),
(1, 4),
(2, 5), 
(2, 6);















