// // exercice pierre feuille ciseaux
let scoreOrdi = 0;
let scoreUtilisatateur = 0;

function comparer(choix1, choix2) {
  if (choix1 == choix2) {
    return "égalité";
  }
  switch (choix1) {
    case "pierre":
      if (choix2 == "feuille") {
        scoreUtilisatateur++;
        return choix2;
      }
      if (choix2 == "ciseaux") {
        scoreOrdi++;
        return choix1;
      }
      break;
    case "feuille":
      if (choix2 == "pierre") {
        scoreOrdi++;
        return choix1;
      }
      if (choix2 == "ciseaux") {
        scoreUtilisatateur++;
        return choix2;
      }
      break;
    case "ciseaux":
      if (choix2 == "pierre") {
        scoreUtilisatateur++;
        return choix2;
      }
      if (choix2 == "feuille") {
        scoreOrdi++;
        return choix1;
      }
      break;
    default:
      console.log("choix invalide");
  }
}

//fonction du jeu

function jeu() {
  for (let i = 0; i < 3; i++) {
    // choix aleatoire de l'ordi
    let valeurAleatoire = ["pierre", "feuille", "ciseaux"];
    let indiceAleatoire = Math.floor(Math.random() * valeurAleatoire.length);
    let ChoixOrdi = valeurAleatoire[indiceAleatoire];
    //choix de l'utilisateur
    let choixUtilisateur = prompt("choisir entre:pierre,feuille ou ciseaux");

    let resultat = comparer(ChoixOrdi, choixUtilisateur);
    console.log(
      `le choix de l'ordi etait ${ChoixOrdi} et celui de l'utilisateur ${choixUtilisateur}, et donc on à ${resultat} comme reponse `
    );
  }
  if (scoreOrdi === scoreUtilisatateur) {
    console.log("il y'a égalité");
  } else if (scoreOrdi > scoreUtilisatateur) {
    console.log(`l'ordinateur a gagné ${scoreOrdi} à ${scoreUtilisatateur}`);
  } else {
    console.log(`l'utilisateur à gagné ${scoreUtilisatateur} à ${scoreOrdi}`);
  }
}
//appel de la fonction jeu

jeu();
