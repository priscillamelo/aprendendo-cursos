const objectDate = new Date();
const year = objectDate.getFullYear();

/* function verificarIdade() {
  const txtAno = document.querySelector("input#txtAno");
  let valueSexo = document.getElementsByName("valueSexo");

  const yearUser = Number(txtAno.value);
  const respostaIdade = document.querySelector("div#respostaIdade");

  if (yearUser > year || yearUser == " ") {
    alert("Informe um ano de nascimento válido!");
  } else {
    const idade = year - yearUser;

    if (valueSexo[0].checked) {
      valueSexo = "Homem";
    } else if (valueSexo[1].checked) {
      valueSexo = "Mulher";
    } else {
      valueSexo = "- sexo não definido -";
    }
    respostaIdade.innerHTML = `<p>Detectamos ${valueSexo} com ${idade} anos</p>`;

    ////////////// VARIAVEIS DE CONDICOES //////////////
    const menina = idade < 15 && valueSexo == "Mulher";
    const menino = idade < 15 && valueSexo == "Homem";

    const jovemMulher = idade < 30 && valueSexo == "Mulher";
    const jovemHomem = idade < 30 && valueSexo == "Homem";

    const mulherAdulta = idade <= 50 && valueSexo == "Mulher";
    const homemAdulto = idade <= 50 && valueSexo == "Homem";

    const senhor = idade > 50 && valueSexo === "Homem";
    const senhora = idade > 50 && valueSexo == "Mulher";

    const sexoIndefinido = (valueSexo = " - sexo não definido - ");

    //////////////////////////////////////////////////////
    if (menina) {
      respostaIdade.innerHTML += "<br> <img src = 'img/imgMenina.jpg' >";
    } else if (menino) {
      respostaIdade.innerHTML += "<br> <img src= 'img/imgMenino.jpg' >";
    } else if (jovemMulher) {
      respostaIdade.innerHTML += "<br> <img src= 'img/imgJovemMulher.jpg' >";
    } else if (jovemHomem) {
      respostaIdade.innerHTML += "<br> <img src= 'img/imgJovemHomem.jpg' >";
    } else if (mulherAdulta) {
      respostaIdade.innerHTML += "<br> <img src= 'img/imgMulherAdulta.jpg' >";
    } else if (homemAdulto) {
      respostaIdade.innerHTML += "<br> <img src='img/imgHomemAdulto.jpg' >";
    } else if (senhora) {
      respostaIdade.innerHTML += "<br> <img src= 'img/imgSenhora.jpg' >";
    } else if (senhor) {
      respostaIdade.innerHTML += "<br> <img src= 'img/imgSenhor.jpg' >";
    } else if (sexoIndefinido) {
      respostaIdade.innerHTML +=
        "<br> <img src= 'img/imgNaoIdentificado.png' >";
    }
  }
} */

function verificarIdade() {
  const txtAno = document.querySelector("input#txtAno");
  let valueSexo = document.getElementsByName("valueSexo");

  const yearUser = Number(txtAno.value);
  const respostaIdade = document.querySelector("div#respostaIdade");

  if (yearUser > year || yearUser == " ") {
    alert("Informe um ano de nascimento válido!");
  } else {
    const img = document.createElement("img");
    img.setAttribute("id", "imgIdade");

    const idade = year - yearUser;

    if (valueSexo[0].checked) {
      valueSexo = "Homem";

      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "img/imgMenino.jpg");
      } else if (idade < 30) {
        img.setAttribute("src", "img/imgJovemHomem.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "img/imgHomemAdulto.jpg");
      } else {
        img.setAttribute("src", "img/imgSenhor.jpg");
      }
    } else if (valueSexo[1].checked) {
      valueSexo = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "img/imgMenina.jpg");
      } else if (idade < 30) {
        img.setAttribute("src", "img/imgJovemMulher.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "img/imgMulherAdulta.jpg");
      } else {
        img.setAttribute("src", "img/imgSenhora.jpg");
      }
    } else {
      valueSexo = "- sexo não definido -";
      img.setAttribute("src", "img/imgNaoIdentificado.png");
    }

    respostaIdade.innerHTML = `<p>Detectamos ${valueSexo} com ${idade} anos</p>`;
    respostaIdade.appendChild(img);
  }
}
