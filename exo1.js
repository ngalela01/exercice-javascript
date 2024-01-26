// exercice1

// let saisiePhrase = prompt("Saisir une phrase !");
// if (saisiePhrase === "bonjour") {
//   alert("Bonjour à toi!");
// } else if (saisiePhrase === "tu vas bien?") {
//   alert("Bien et toi?");
// } else {
//   alert("Désolé, je n'ai pas bien compris...");
// }

// exercice4 suite

// let saisiePhrase = prompt("Saisir une phrase !");
// if (saisiePhrase === "bonjour") {
//   alert("Bonjour! ça va?");
// }
// let saisie2 = prompt("Veuiller saisir une réponse");
// if (saisie2 === "oui") {
//   alert("je suis content pour toi!");
// } else {
//   alert("Désolé, il faut que je file");
// }

// exercice 5

function diviserParDeux(nombre) {
  return nombre / 2;
}

function somme(m, n) {
  return m + n;
}

function signe(valeur) {
  if (valeur > 0) {
    return "positif";
  } else if (valeur < 0) {
    return "négatif";
  } else {
    return "nul";
  }
}

function factoriel(n) {
  let produit = 1;
  for (let i = 1; i <= n; i++) {
    produit = produit * i;
  }
  if (n === 0) {
    return 1;
  } else {
    return produit;
  }
}

console.log(factoriel(3));
