const objectDate = new Date();
const hourActual = objectDate.getHours();
const minutesActual = objectDate.getMinutes();

const dia = hourActual >= 5 && hourActual < 12;
const noite = hourActual >= 18 || hourActual < 5;

function carregarHora() {
  const hour = document.getElementById("hora");
  const img = document.getElementById("imgHora");

  hour.innerHTML = `<p>Agora são <strong>${hourActual}:${minutesActual}</strong></p>`;

  if (noite) {
    hour.innerHTML += "Boa noite!";
    document.body.style.backgroundColor = "rgb(3, 13, 22)";
    img.innerHTML = "<img src= 'img/imgNoite.jpg' >";
  } else if (dia) {
    hour.innerHTML += "Bom dia!";
    document.body.style.backgroundColor = "rgb(255,199,89)";
    img.innerHTML = "<img src= 'img/imgManha.jpg' >";
  } else {
    hour.innerHTML += "Boa tarde!";
    document.body.style.backgroundColor = "rgb(218, 119, 49)";
    img.innerHTML = "<img src= 'img/imgTarde.jpg' >";
  }
}
