SELECT t.idtitre, t.nom as titre, t.duree, t.lien, a.date_ajout FROM appartenir a, titre t WHERE a.idtitre=t.idtitre and a.idPlaylist=1