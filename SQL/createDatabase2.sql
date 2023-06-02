------------------------------------------------------------
--        Script Postgre 
------------------------------------------------------------

DROP TABLE IF EXISTS Utilisateur CASCADE;
DROP TABLE IF EXISTS Titre CASCADE;
DROP TABLE IF EXISTS Album CASCADE;
DROP TABLE IF EXISTS Artiste CASCADE;
DROP TABLE IF EXISTS Playlist CASCADE;
DROP TABLE IF EXISTS appartenir CASCADE;
DROP TABLE IF EXISTS ecouter CASCADE;

------------------------------------------------------------
-- Table: Utilisateur
------------------------------------------------------------
CREATE TABLE Utilisateur(
	mail             VARCHAR (50) NOT NULL ,
	nom              VARCHAR (50) NOT NULL ,
	prenom           VARCHAR (50) NOT NULL ,
	date_naissance   DATE  NOT NULL ,
	mdp              VARCHAR (100) NOT NULL  ,
	CONSTRAINT Utilisateur_PK PRIMARY KEY (mail)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Artiste
------------------------------------------------------------
CREATE TABLE Artiste(
	idArtiste   SERIAL NOT NULL ,
	nom         VARCHAR (50) NOT NULL  ,
	CONSTRAINT Artiste_PK PRIMARY KEY (idArtiste)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Album
------------------------------------------------------------
CREATE TABLE Album(
	idAlbum      SERIAL NOT NULL ,
	nom          VARCHAR (50) NOT NULL ,
	date_ajout   DATE  NOT NULL ,
	image        VARCHAR (150) ,
	style        VARCHAR (50) NOT NULL ,
	idArtiste    INT  NOT NULL  ,
	CONSTRAINT Album_PK PRIMARY KEY (idAlbum)

	,CONSTRAINT Album_Artiste_FK FOREIGN KEY (idArtiste) REFERENCES public.Artiste(idArtiste) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Titre
------------------------------------------------------------
CREATE TABLE Titre(
	idTitre     SERIAL NOT NULL ,
	nom         VARCHAR (50) NOT NULL ,
	duree       TIME  NOT NULL ,
	lien        VARCHAR (150) NOT NULL ,
	idArtiste   INT  NOT NULL ,
	idAlbum     INT    ,
	CONSTRAINT Titre_PK PRIMARY KEY (idTitre)

	,CONSTRAINT Titre_Artiste_FK FOREIGN KEY (idArtiste) REFERENCES public.Artiste(idArtiste) ON DELETE CASCADE
	,CONSTRAINT Titre_Album0_FK FOREIGN KEY (idAlbum) REFERENCES public.Album(idAlbum) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Playlist
------------------------------------------------------------
CREATE TABLE Playlist(
	nom             VARCHAR (50) NOT NULL ,
	date_creation   DATE  NOT NULL ,
	mail            VARCHAR (50) NOT NULL  ,
	CONSTRAINT Playlist_PK PRIMARY KEY (nom)

	,CONSTRAINT Playlist_Utilisateur_FK FOREIGN KEY (mail) REFERENCES public.Utilisateur(mail) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: appartenir
------------------------------------------------------------
CREATE TABLE appartenir(
	idTitre      INT  NOT NULL ,
	nom          VARCHAR (50) NOT NULL ,
	date_ajout   DATE  NOT NULL  ,
	CONSTRAINT appartenir_PK PRIMARY KEY (idTitre,nom)

	,CONSTRAINT appartenir_Titre_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
	,CONSTRAINT appartenir_Playlist0_FK FOREIGN KEY (nom) REFERENCES public.Playlist(nom) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: ecouter
------------------------------------------------------------
CREATE TABLE ecouter(
	idTitre   INT  NOT NULL ,
	mail      VARCHAR (50) NOT NULL ,
	numero    INT  NOT NULL ,
	favori    BOOL  NOT NULL  ,
	CONSTRAINT ecouter_PK PRIMARY KEY (idTitre,mail)

	,CONSTRAINT ecouter_Titre_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
	,CONSTRAINT ecouter_Utilisateur0_FK FOREIGN KEY (mail) REFERENCES public.Utilisateur(mail) ON DELETE CASCADE
)WITHOUT OIDS;



