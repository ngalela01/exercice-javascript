let input = document.createElement("input");
input.setAttribute("type", "text");
let bouton = document.createElement("button");
bouton.textContent = "clique";
document.body.appendChild(input);
document.body.appendChild(bouton);
bouton.addEventListener("click", () => {
  let valeurSaisie = document.querySelector("input");
  valeurSaisie.value = "";
});
