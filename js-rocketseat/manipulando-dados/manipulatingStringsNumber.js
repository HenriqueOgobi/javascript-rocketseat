// Contar quantos carecteres tem a palavra e quantos digitos tem um numero
let word = "Henrique";
console.log(word.length);

let number = 21;
console.log(String(number.length));

//Transformar um número quebrado com 2 casas decimais e trocar ponto por virgula
let numberBroken = 1011.292828989;
console.log(numberBroken.toFixed(2).replace(".", ","));

//Transformar letras maiusculas em minuscula e vice e versa
let words = "Programar é muito bacana!";
console.log(words.toUpperCase());
console.log(words.toLowerCase());

// separar e colocar.
let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore.toLowerCase());

//verificar se o texto tem uma palavra especifica
let phraseEspecific = "Eu gosto de hamburguer!";
console.log(phraseEspecific.includes("hamburguer"));

//Criar array com construtor
let myArrayConstructor = new Array("A", "B", "C");
let myArrayConstructorEspaces = new Array(10); // aqui criei um array com length 10
console.log(myArrayConstructor);
console.log(myArrayConstructorEspaces);

//Contar elementos de um array
let arrayCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayCount.length);

//Transformar uma cadeia de caracteres em elementos de um array
let wordArrays = "manipulação";
console.log(Array.from(wordArrays));

//exercicios
let techs = ["html", "css", "js"];
//colocar elemento no ultimo lugar no array
console.log(techs.push("react"));
//colocar no começo
techs.unshift("nodejs");
//remover no fim
techs.pop();
//remover no começo
techs.shift();
//cortar somente alguns elementos do array, cortar tantos e o elemento final do array.
console.log(techs.slice(2, 3));
//remover 1 ou mais itemns de qualquer posição do array, aqui vc fala o que voce quer cortar e dps quantos vc quer cortar
techs.splice(0, 2);
//encontrar a posição de um elemento no array.
let index = techs.indexOf("js")
techs.splice(index,2)
console.log(techs);
