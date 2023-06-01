SELECT ar.nom as artiste, al.nom as album, t.nom as titre FROM titre t LEFT JOIN album al ON al.idalbum = t.idalbum JOIN artiste ar ON ar.idartiste = t.idartiste WHERE t.idtitre = 5;
