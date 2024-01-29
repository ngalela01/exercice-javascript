let div = document.querySelector("div");
let bouton = document.querySelectorAll("button");

for (let i = 0; i < bouton.length; i++) {
  bouton[i].addEventListener("click", () => {
    bouton[i].parentNode.style.background = "yellow";
  });
}
