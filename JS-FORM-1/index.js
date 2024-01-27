// let nom = document.getElementById("nom").value;
// alert(nom);
// let prenom = document.getElementById("prenom").value;
// alert(prenom);

//exercice9 calculatrice

let premierNombre = document.getElementById("premier-nombre").value;
let deuxiemeNombre = document.getElementById("deuxieme-nombre").value;
function addition() {
  let somme = parseInt(premierNombre) + parseInt(deuxiemeNombre);

  return somme;
}

let boutton = document.getElementById("mon-boutton");

boutton.addEventListener("click", () => {
  document.getElementById("resultat").textContent =
    "le resulat est de " + addition();
});
