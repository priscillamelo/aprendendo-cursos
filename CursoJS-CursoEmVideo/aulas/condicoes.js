/* let velocidade = 58.5;

if (velocidade > 60) {
  console.log("Você ultrapassou a velocidade permitida. MULTADO!");
}

console.log("Dirija sempre usando cinto de segurança!"); */

/* let pais = "Brasil";

if (pais.toLowerCase() == "brasil") {
  console.log("Brasileiro");
} else {
  console.log("Estrangeiro");
} */

function calcularVelocidade() {
  let txtVel = document.querySelector("input#txtVel");
  let velocidade = Number(txtVel.value);
  let respostaVel = document.getElementById("respostaVel");

  respostaVel.innerHTML = `Sua velocidade atual é de ${velocidade}Km/h`;

  if (velocidade > 60) {
    respostaVel.innerHTML +=
      "<p>Você ultrapassou a velocidade permitida. <strong>MULTADO!</strong></p>";
  }
  respostaVel.innerHTML += `<p>Dirija sempre com cuidado!</p>`;
}

function pesquisarPais() {
  let txtPais = document.querySelector("input#txtPais");
  let respostaPais = document.querySelector("p#respostaPais");

  /*  if (txtPais.value.toLowerCase() == "brasil") {
    respostaPais.innerText = `Você é Brasileira!`;
  } else if (txtPais == "eua") {
    respostaPais.innerHTML = "Você é Estadunidense!";
  } */

  switch (txtPais.value.toLowerCase()) {
    case "brasil":
      respostaPais.innerHTML = "<strong>Você é Brasileira!</strong>";
      break;
    case "eua":
      respostaPais.innerHTML = "<strong>Você é Estadunidense!</strong>";
      break;
    default:
      respostaPais.innerHTML = "<strong>País não identificado!</strong>";
  }
}
