const feche = document.querySelector("#close");
const mensagem = document.querySelector("#mensagem");

feche.addEventListener("click", function () {
  mensagem.style.display = "none";
});
