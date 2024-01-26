var annuaire = {
  patricia: "06 66 66 66 66",
  david: "07 77 77 77 77",
};

let fonctionnalite = prompt(
  "choisir une fonctionnalité: 'r':rechercher , 'l': afficher liste, 'a':ajouter, 's': supprimer "
);

while (fonctionnalite !== "q") {
  switch (fonctionnalite) {
    case "r":
      let prenom = prompt("Entrez un prénom");
      if (annuaire[prenom]) {
        alert(`le numero de ${prenom} est : ${annuaire[prenom]}`);
      } else {
        alert(` le numero de ${prenom} n'existe pas dans l'annuaire`);
      }
      break;

    case "l":
      for (let clef in annuaire) {
        alert(`la liste des contact est ${clef} : ${annuaire[clef]}`);
      }
      break;
    case "a":
      let nouveauxPrenom = prompt(
        "entrer le nom de la personne que vous souhaitez ajouter."
      );
      let nouveauNumero = prompt(
        `Renseignez les coordonnées de ${nouveauxPrenom}`
      );

      annuaire[nouveauxPrenom] = nouveauNumero;
      break;

    case "s":
      let nomAsuprimer = prompt(
        "veuillez entrer le vontact que vous voulez supprimer"
      );
      if (annuaire[nomAsuprimer]) {
        delete annuaire[nomAsuprimer];
      } else {
        alert("contact innexistant");
      }
      console.log(annuaire);
      break;

    case "q":
      alert("Aurevoir!");
      break;

    default:
      alert("Veuillez choisir une option valide.");
  }
}
