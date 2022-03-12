/////////////////// HORA ATUAL //////////////////////////
let objectDate = new Date();

let horaAtual = objectDate.getHours();
let minutosAtuais = objectDate.getMinutes();

if (horaAtual >= 18 || horaAtual < 5) {
  console.log("Boa noite!");
} else if (horaAtual >= 12 && horaAtual < 18) {
  console.log("Boa tarde!");
}

console.log(`Hora atual: ${horaAtual}h${minutosAtuais}`);

////////////////// DIA DA SEMANA ///////////////////////
let weekDay = objectDate.getDay();

console.log(`Dia da semana: ${weekDay}`);

switch (weekDay) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
}
