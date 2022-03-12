//comando de input
var nome = prompt("Qual é o seu nome?");
alert("Bem-Vindo(a), " + nome);
///////////////////////////////////////////////
var num1 = Number(prompt("Digite um número: "));
var num2 = Number(prompt("Digite outro número: "));
var soma = num1 + num2;
alert("Soma dos valores: " + (num1 + num2));
alert("Soma dos valores: " + soma);
///////////////////////////////////////////////
var nota = 5.5;
// uma forma alternativa, simplificada da concatenação
alert(`${nome} tirou ${nota} em Matemática`);
//esse comando faz aparecer no corpo do site, e nao como alerta
document.write(`${nome} tem ${nome.length} letras! <br>`);
document.writeln(`${nome.toUpperCase()} <br>`);
document.writeln(`${nome.toLowerCase()} <br>`);
//toFixed() define quantidade de casas apos a virgula
alert(`${nome} tirou ${nota.toFixed(2)} em Matemática`);
//toFixed().replace() modifica uma coisa para outra
alert(`${nome} tirou ${nota.toFixed(2).replace(".", ",")} em Matemática`);
///////////////////////////////////////////////
var valor = 150;
//comando para mostrar o valor em Real
document.write(
  `${nome} recebe ${valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);

//5+2 = 7 - soma
//5-2 = 3 - subtração
//5*2 = 10 - multiplicação
//5/2 = 2.5 - divisão
//5%2 = 1 - resto
//5**2 = 25 - potência
