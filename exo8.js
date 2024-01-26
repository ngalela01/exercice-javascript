var annuaire = {
  patricia: "06 66 66 66 66",
  david: "07 77 77 77 77",
};

let fonctionnalite = prompt(
  "choisir une fonctionnalité: 'r':rechercher , 'l': afficher liste, 'a':ajouter, 's': supprimer "
);

function recherche() {
  while (fonctionnalite !== "q") {
    switch (fonctionnalite) {
      case "r":
        let nom = prompt("saisir un nom");

        for (let index in annuaire) {
          if (index == nom) {
            console.log(`numéro de ${nom} :${annuaire[index]}`);
            return true;
          }
        }
        return false;
    }
  }
}

if (recherche() == true) {
  recherche();
} else {
  console.log("aucun resultat");
}



