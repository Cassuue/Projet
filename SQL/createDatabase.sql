------------------------------------------------------------
--        Script Postgre 
------------------------------------------------------------

DROP TABLE IF EXISTS Utilisateur CASCADE;
DROP TABLE IF EXISTS Titre CASCADE;
DROP TABLE IF EXISTS Album CASCADE;
DROP TABLE IF EXISTS Artiste CASCADE;
DROP TABLE IF EXISTS Playlist CASCADE;
DROP TABLE IF EXISTS ecrire CASCADE;
DROP TABLE IF EXISTS ecouter CASCADE;
DROP TABLE IF EXISTS composer CASCADE;
DROP TABLE IF EXISTS appartenir CASCADE;
DROP TABLE IF EXISTS avoir CASCADE;
DROP TABLE IF EXISTS preferer CASCADE;


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
-- Table: Titre
------------------------------------------------------------
CREATE TABLE Titre(
	idTitre   SERIAL NOT NULL ,
	nom       VARCHAR (50) NOT NULL ,
	duree     DATE  NOT NULL  ,
	CONSTRAINT Titre_PK PRIMARY KEY (idTitre)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Album
------------------------------------------------------------
CREATE TABLE Album(
	idAlbum      SERIAL NOT NULL ,
	nom          VARCHAR (50) NOT NULL ,
	date_ajout   DATE  NOT NULL ,
	image        VARCHAR (50) NOT NULL ,
	style        VARCHAR (50) NOT NULL  ,
	CONSTRAINT Album_PK PRIMARY KEY (idAlbum)
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
-- Table: ecrire
------------------------------------------------------------
CREATE TABLE ecrire(
	idTitre     INT  NOT NULL ,
	idArtiste   INT  NOT NULL  ,
	CONSTRAINT ecrire_PK PRIMARY KEY (idTitre,idArtiste)

	,CONSTRAINT ecrire_Titre_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
	,CONSTRAINT ecrire_Artiste0_FK FOREIGN KEY (idArtiste) REFERENCES public.Artiste(idArtiste) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: composer
------------------------------------------------------------
CREATE TABLE composer(
	idAlbum     INT  NOT NULL ,
	idArtiste   INT  NOT NULL  ,
	CONSTRAINT composer_PK PRIMARY KEY (idAlbum,idArtiste)

	,CONSTRAINT composer_Album_FK FOREIGN KEY (idAlbum) REFERENCES public.Album(idAlbum) ON DELETE CASCADE
	,CONSTRAINT composer_Artiste0_FK FOREIGN KEY (idArtiste) REFERENCES public.Artiste(idArtiste) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: preferer
------------------------------------------------------------
CREATE TABLE preferer(
	mail      VARCHAR (50) NOT NULL ,
	idTitre   INT  NOT NULL ,
	favoris   BOOL  NOT NULL  ,
	CONSTRAINT preferer_PK PRIMARY KEY (mail,idTitre)

	,CONSTRAINT preferer_Utilisateur_FK FOREIGN KEY (mail) REFERENCES public.Utilisateur(mail) ON DELETE CASCADE
	,CONSTRAINT preferer_Titre0_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
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
-- Table: avoir
------------------------------------------------------------
CREATE TABLE avoir(
	idAlbum   INT  NOT NULL ,
	idTitre   INT  NOT NULL  ,
	CONSTRAINT avoir_PK PRIMARY KEY (idAlbum,idTitre)

	,CONSTRAINT avoir_Album_FK FOREIGN KEY (idAlbum) REFERENCES public.Album(idAlbum) ON DELETE CASCADE
	,CONSTRAINT avoir_Titre0_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: ecouter
------------------------------------------------------------
CREATE TABLE ecouter(
	idTitre   INT  NOT NULL ,
	mail      VARCHAR (50) NOT NULL ,
	numero    INT  NOT NULL  ,
	CONSTRAINT ecouter_PK PRIMARY KEY (idTitre,mail)

	,CONSTRAINT ecouter_Titre_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
	,CONSTRAINT ecouter_Utilisateur0_FK FOREIGN KEY (mail) REFERENCES public.Utilisateur(mail) ON DELETE CASCADE
)WITHOUT OIDS;