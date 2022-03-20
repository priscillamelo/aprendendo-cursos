let total = 0;
let count = 0;

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    adicionarNota();
  }
});

const adicionarNota = () => {
  let txtNota = document.querySelector("input#nota");
  if (txtNota.value === "") {
    alert("Informe uma nota!");
  } else {
    const nota = Number(txtNota.value);

    total += nota;
    count++;

    // LIMPAR INPUT
    txtNota.value = "";
  }
};

const calcularMedia = () => {
  let result = document.querySelector("div#card-result");
  let media;

  if (total === 0) {
    media = 0;
  } else {
    const resultado = total / count;
    media = resultado.toFixed(2).replace(".", ",");
  }

  result.innerHTML = `<p id='result'>Sua média é ${media}</p>`;

  total = 0;
  count = 0;
};
