let modalContent = {
  graph1: {
    backgroundImg: "../img/Desenv. com menor ranking.png",
    charName: "Gráfico 1",
    subTitle: "",
    description: "",
  },
  graph2: {
    backgroundImg: "../img/lançamento com ranking positivo.png",
    charName: "Gráfico 2",
    subTitle: "",
    description: "",
  },
  
  graph3: {
    backgroundImg: "../img/lancamento vs tempo de jogo.png",
    charName: "Gráfico 3",
    subTitle: "",
    description: "",
  },
   graph4: {
    backgroundImg: "../img/top 15 jogos.png",
    charName: "Gráfico 4",
    subTitle: "",
    description: "",
  },
   graph5: {
    backgroundImg: "../img/Valor acima da media.png",
    charName: "Gráfico 5",
    subTitle: "",
    description: "",
  },
}

let modal = document.getElementById("charModal")
let graficoGB = document.getElementById("grafico");
let subtitulo = document.getElementById('tituloGrafico');
let historia = document.getElementById("descricaoGrafico");

function limpaModal() {
  graficoGB.replaceChildren([]);
  subtitulo.replaceChildren([]);
  historia.replaceChildren([]);
}

function selecionarGrafico(grafico) {
  let dadosGrafico = modalContent[grafico];

  // imagem e titulo
  let graficoImg = document.createElement("img");
  graficoImg.src = dadosGrafico.backgroundImg;
  graficoImg.classList.add("imgBG");

  let tituloGrafico = document.createElement("h1");
  tituloGrafico.innerText = dadosGrafico.charName;
  tituloGrafico.classList.add("tituloGrafico");

  graficoGB.appendChild(tituloGrafico);
  graficoGB.appendChild(graficoImg);

  // subtitulo
  let graficoSubtitulo = document.createElement("h2");
  graficoSubtitulo.innerText = dadosGrafico.subTitle;
  graficoSubtitulo.classList.add("subtitulo");

  subtitulo.appendChild(graficoSubtitulo);

  // Descrição
  let graficoHistoria = document.createElement("p");
  graficoHistoria.innerText = dadosGrafico.description;
  graficoHistoria.classList.add("descricaoGrafico");

  historia.appendChild(graficoHistoria);

  modal.style.display = "block";
}

window.onload = function() {
  let modal = document.getElementById("charModal")
    modal.style.display = "none";
    limpaModal();

  // Quando clica fora do modal, fecha
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

      limpaModal();
    }
  }
}
