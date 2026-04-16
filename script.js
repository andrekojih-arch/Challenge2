const careinhoBtn = document.getElementById("careinhoBtn");
const careinhoMessage = document.getElementById("careinhoMessage");

careinhoBtn.addEventListener("click", function () {
  if (careinhoMessage.style.display === "none") {
    careinhoMessage.style.display = "block";
  } else {
    careinhoMessage.style.display = "none";
  }
});

window.onload = function () {
  careinhoMessage.style.display = "block";
};

function ganharPontos() {
  const mensagem = document.getElementById("mensagemPontos");
  mensagem.textContent = "Parabéns! Você assistiu ao conteúdo e ganhou +20 pontos.";
}

function remarcarConsulta() {
  const mensagem = document.getElementById("mensagemConsulta");
  mensagem.textContent = "Consulta remarcada com sucesso!";
}