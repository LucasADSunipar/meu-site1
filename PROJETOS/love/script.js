document.getElementById("botao-mensagem").addEventListener("click", function() {
    var textoMensagem = document.getElementById("texto-mensagem");
    textoMensagem.innerHTML = "Eu te amo mais do que palavras podem expressar!";
    textoMensagem.style.fontSize = "24px";
    textoMensagem.style.fontStyle = "normal";
});

const faixacentral = document.querySelector('.faixacentral');
const botaoFlecha = document.querySelector('#botao-flecha');

botaoFlecha.addEventListener('click', () => {
  faixacentral.classList.toggle('expandida');
});



const particulas = document.querySelector(".particulas");

for (let i = 0; i < 100; i++) {
  const particulaVermelha = document.createElement("div");
  particulaVermelha.classList.add("particula-vermelha");
  particulaVermelha.style.left = `${Math.random() * 100}%`;
  particulaVermelha.style.animationDelay = `${Math.random() * 10}s`;
  particulas.appendChild(particulaVermelha);

  const particulaRosa = document.createElement("div");
  particulaRosa.classList.add("particula-rosa");
  particulaRosa.style.left = `${Math.random() * 100}%`;
  particulaRosa.style.animationDelay = `${Math.random() * 10}s`;
  particulas.appendChild(particulaRosa);
}

const textoVejo = document.querySelector(".texto-vejo");

for (let i = 0; i < 5; i++) {
  const coracaoAnimado = document.createElement("div");
  coracaoAnimado.classList.add("coracao-animado");
  textoVejo.appendChild(coracaoAnimado);
}
