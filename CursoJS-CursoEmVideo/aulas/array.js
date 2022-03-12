let arrayNumbers = [];

// método para adicionar novo elemento no final do array
arrayNumbers.push(6);
arrayNumbers.push(3);
arrayNumbers.push(10);
arrayNumbers.push(11);
arrayNumbers.push(1);

// metodo para remover o ultimo elemento do array e retorna-lo
//arrayNumbers.pop();

let ultimoElemento = arrayNumbers.pop();
console.log(ultimoElemento); // 1

// metodo para remover o primeiro elemento do array e retorna-lo
//arrayNumbers.shift();

let firstElement = arrayNumbers.shift();
console.log(firstElement); // 6

// metodo para inserir elemento no inicio do array
arrayNumbers.unshift(2);







let array1 = ["a", "b", "c", "d"];
let array2 = ["e", "f", "g", "h"];
let array = [];

// metodo para concatenar arrays, atribuindo seus valores para uma nova array
array = array1.concat(array2);

console.log(array);

array.join("-"); // metodo para "modificar" o separados dos elementos do array

arrayNumbers.sort(); // o metodo 'sort' organiza os elementos do array de forma crescente, mas de acordo com a primeira unidade
arrayNumbers.sort((a, b) => a - b); // usando o metodo sort para organizar os elementos de forma descrescente
//console.log(arrayNumbers)

arrayNumbers.indexOf(1, 6); // metodo para localizar elementos no array a partir do início. O primeiro parametro é o valor a ser localizado, o segundo é a posição que começará a procurar
arrayNumbers.lastIndexOf(6, 8); // metodo para localizar elementos no array a partir do fim. O primeiro parametro é o valor a ser localizado, o segundo é a posição que começará a procurar
let array3 = array.reverse(); // metodo inverte a ordem dos elementos e os retorna invertido

console.log(array.reverse());
