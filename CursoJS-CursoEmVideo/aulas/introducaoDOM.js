// criar variávei e atribuir tags a elas para ter acesso e modificar pelo JS
let p1 = document.getElementsByTagName("p")[0];
let p2 = document.getElementsByTagName("p")[1];
let corpo = document.body;
// let message = document.getElementById("msg");
let message = document.querySelector("div#msg"); // forma mais adequada de ter acesso às tags

document.writeln("Olá, sou um componente adicionado pelo JS!");
document.writeln(document.characterSet);

// mostrando na tela o conteudo do paragrafo que foi passado para a variável
document.writeln(
  "<br><br> Primeiro parágrafo sem formatação, apenas o texto: " + p1.innerText
); // paragrafo sem a formatação do HTML (tag strong nao veio junto, apenas o texto da tag 'p')
document.writeln("<br><br> Primeiro parágrafo com formatação: " + p1.innerHTML); // paragrafo com a formatação do HTML (tag strong veio junto)
document.write(
  "<br><br> Segundo parágrafo está escrito assim: " + p2.innerText
);

// modificando valores das tags
p1.style.color = "RED";
p2.style.color = "YELLOW";
corpo.style.backgroundColor = "INDIGO";
message.innerText = "TEXTO MODIFICADO!";
message.style.color = "BLACK";
