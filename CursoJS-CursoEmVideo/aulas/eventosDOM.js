let corpo = document.querySelector("body");
let blocoInteraja = document.querySelector("div#area");

corpo.style.backgroundColor = "antiquewhite";

blocoInteraja.addEventListener("click", clicar);
blocoInteraja.addEventListener("mouseenter", entrarMouse);
blocoInteraja.addEventListener("mouseout", sairMouse);

function clicar() {
  blocoInteraja.style.backgroundColor = "rgb(175, 174, 255)";
  blocoInteraja.innerText = "Interagiu!!";
}

function entrarMouse() {
  blocoInteraja.style.backgroundColor = "rgb(232, 124, 120)";
  blocoInteraja.style.width = "300px";
  blocoInteraja.style.height = "300px";
  blocoInteraja.style.textAlign = "center";
  blocoInteraja.style.lineHeight = "300px";
}

function sairMouse() {
  blocoInteraja.style.width = "200px";
  blocoInteraja.style.height = "200px";
  blocoInteraja.style.lineHeight = "200px";
  blocoInteraja.style.backgroundColor = "rgb(152, 124, 230)";
}

function somar() {
  let txt1 = document.querySelector("input#inputN1");
  let txt2 = document.querySelector("input#inputN2");

  // convertendo para numero
  let number1 = Number(txt1.value);
  let number2 = Number(txt2.value);

  let soma = number1 + number2;

  //let valueBTN = document.querySelector("input#btnSoma");
  //atribur o valor da soma para o valor do botao
  //valueBTN.value = soma;

  document.getElementById(
    "result"
  ).innerHTML = `O resultado de ${number1} + ${number2} é igual a <strong>${soma}</strong>`;

  //alert(soma);
}
