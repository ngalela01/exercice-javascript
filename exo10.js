//exo10 afficher cacher
//document.getElementById("deuxième_paragraphe").style.visibility = "visible";

// document.getElementById("premier_paragraphe").style.background = "yellow";

// let paragraphe2 = document.getElementById("deuxième_paragraphe");

// paragraphe2.addEventListener("click", () => {
//   paragraphe2.style.background = "yellow";
// });

let para = document.querySelectorAll("p");

for (let i = 0; i < para.length; i++) {
  para[i].addEventListener("click", () => {
    para[i].style.background = "yellow";
  });
}

//.............................. suite.......................................

//fonction qui cache les articles

function cacher() {
  let baliseArticle = document.querySelectorAll("article");
  baliseArticle.forEach((article) => (article.style.visibility = "hidden"));
}

let lis = document.querySelector(".lis");
let articles = document.querySelectorAll("article");

lis.addEventListener("click", () => {
  for (let j = 0; j < articles.length; j++) {
    articles[j].style.visibility = "visible";
  }
});

let exo = document.querySelector(".exo");
let exotique = document.querySelectorAll(".exotique");
exo.addEventListener("click", () => {
  cacher();
  for (let i = 0; i < exotique.length; i++) {
    exotique[i].style.visibility = "visible";
  }
});

let rou = document.querySelector(".rou");
let rouges = document.querySelectorAll(".rouges");
rou.addEventListener("click", () => {
  cacher();
  for (let i = 0; i < rouges.length; i++) {
    rouges[i].style.visibility = "visible";
  }
});

let noy = document.querySelector(".noy");
let noyaux = document.querySelectorAll(".noyaux");
noy.addEventListener("click", () => {
  cacher();
  for (let i = 0; i < noyaux.length; i++) {
    noyaux[i].style.visibility = "visible";
  }
});
