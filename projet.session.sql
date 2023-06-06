SELECT SUM(t.duree) AS duree_total FROM titre t, appartenir a WHERE t.idtitre=a.idtitre AND a.idplaylist=1
