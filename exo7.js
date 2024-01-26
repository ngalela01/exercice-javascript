// //exercice7 pratique calendrier

// let jours = ["lun", "007", "mer", "jeu", "ven", "sam", "BUG"];
// //1
// jours.pop();
// //2
// for (let i = 0; i < jours.length; i++) {
//   console.log(jours[i]);
// }
// //3

// jours.push('dimanche')
// console.log(jours);

// //4 et 5

// jours[1]='mar'
// console.log(jours.length);

// //6

// console.log(jours[2]);

//exercice epicerie

// let fruits = ["mangue", "raisin", "figue", "kiwi"];

// let choix = prompt("Quels fruits desirez-vous? ", fruits);

// let index = fruits.indexOf(choix);

// if (index !== -1) {
//   fruits.splice(index, 1);
//   console.log("ok!");
// } else {
//   console.log("Ce fruit n'est pas disponible");
// }
// console.log(fruits);

//exercice pendu

var mauvaisesLettres = []; // sera complété pendant le jeu
var lettresAttendues = ["s", "u", "p", "e", "r"];
var lettresTrouvees = "";

while (mauvaisesLettres.length < 10 && lettresAttendues.length > 0) {
  alert(
    "Lettres à trouver pour le pendu : " +
      lettresAttendues.length +
      "\nLettres déjà trouvées : " +
      lettresTrouvees +
      "\nTentatives restantes : " +
      (10 - mauvaisesLettres.length)
  );
  let propLettre = prompt("Veuillez entrer une lettre.");

  if (lettresAttendues.indexOf(propLettre) !== -1) {
    // La réponse du joueur est correcte.
    while (lettresAttendues.indexOf(propLettre) !== -1) {
      let index = lettresAttendues.indexOf(propLettre);
      lettresAttendues.splice(index, 1);
    }
    lettresTrouvees += propLettre;
    if (lettresAttendues.length === 0) {
      // Le joueur a deviné toutes les lettres.
      alert("Bien joué!");
    }
  } else {
    // La réponse du joueur est incorrecte.
    mauvaisesLettres.push(propLettre);
    if (mauvaisesLettres.length === 10) {
      // Le joueur a fait 10 mauvaises réponses.
      alert("Perdu !");
    }
  }
}
