<?php

require_once "models/Model.php";


class AnimauxManager extends Model
{

    public function getAnimaux()
    {
        $req = "SELECT * FROM animal";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();
        $animaux = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $animaux;
    }

    public function deleteDBAnimalContinent($idAnimal)
    {
        $req = "DELETE FROM  animal_continent  WHERE animal_id = :idAnimal";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idAnimal", $idAnimal, PDO::PARAM_INT);
        $stmt->execute();
        $stmt->closeCursor();
    }

    public function deleteDBAnimal($idAnimal)
    {
        $req = "DELETE FROM  animal  WHERE animal_id = :idAnimal";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idAnimal", $idAnimal, PDO::PARAM_INT);
        $stmt->execute();
        $stmt->closeCursor();
    }

    // public function compterAnimaux($idFamille)
    // {
    //     $req = "SELECT COUNT(*) AS 'nb'
    //     FROM famille f inner join animal a on a.famille_id = f.famille_id
    //     WHERE f.famille_id = :idFamille";
    //     $stmt = $this->getBdd()->prepare($req);
    //     $stmt->bindValue(":idFamille", $idFamille, PDO::PARAM_INT);
    //     $stmt->execute();
    //     $resultat = $stmt->fetch(PDO::FETCH_ASSOC);
    //     $stmt->closeCursor();
    //     return $resultat['nb'];
    // }

    public function updateAnimal($idAnimal, $nom, $description, $image, $famille)
    {
        $req = "UPDATE animal SET 
        animal_nom = :nom, animal_description = :description, animal_image = :image, famille_id = :famille  
        WHERE animal_id = :idAnimal";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idAnimal", $idAnimal, PDO::PARAM_INT);
        $stmt->bindValue(":famille", $famille, PDO::PARAM_INT);
        $stmt->bindValue(":nom", $nom, PDO::PARAM_STR);
        $stmt->bindValue(":description", $description, PDO::PARAM_STR);
        $stmt->bindValue(":image", $image, PDO::PARAM_STR);
        $stmt->execute();
        $stmt->closeCursor();
    }

    public function createAnimaux($libelle, $description, $image, $famille)
    {
        $req = "INSERT INTO animal (animal_nom, animal_description, animal_image, famille_id)
         VALUES (:libelle, :description, :image, :famille)";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":libelle", $libelle, PDO::PARAM_STR);
        $stmt->bindValue(":description", $description, PDO::PARAM_STR);
        $stmt->bindValue(":image", $image, PDO::PARAM_STR);
        $stmt->bindValue(":famille", $famille, PDO::PARAM_INT);
        $stmt->execute();
        $stmt->closeCursor();
        return $this->getBdd()->lastInsertId();
    }

    public function getAnimal($idAnimal)
    {
        $req = "SELECT a.animal_id, animal_nom, animal_description, animal_image, a.famille_id, continent_id FROM animal a
            INNER JOIN famille f ON a.famille_id = f.famille_id
            LEFT JOIN animal_continent ac ON ac.animal_id = a.animal_id
            WHERE a.animal_id = :idAnimal";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idAnimal", $idAnimal, PDO::PARAM_INT);
        $stmt->execute();
        $ligneAnimal = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $ligneAnimal;
    }

    public function getImageAnimal($idAnimal)
    {
        $req = "SELECT animal_image FROM animal WHERE animal_id = :idAnimal";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":idAnimal", $idAnimal, PDO::PARAM_INT);
        $stmt->execute();
        $image = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $image['animal_image'];
    }
}
