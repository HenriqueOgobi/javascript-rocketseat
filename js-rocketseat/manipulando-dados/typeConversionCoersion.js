/*
Ambas vao alterar um tipo de dado para outro tipo de dado.

Type conversion vs type coersion

Type conversion: eu explicitamente altero um dado den um tipo pra outro
type coersion: implicitamente o javascript faz a alteração do tipo de dado, mas de vez em quando o js faz usando o Type conversion

*/

console.log("9" + 5);// aqui type coersion modificou implicitamente para o 5 virar string e concatenar.
console.log(Number("9") + 5);// aqui Type conversion modificou explicitamente, eu que coloquei para mudar o tipo do dado.