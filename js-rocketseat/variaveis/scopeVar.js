/*
Scope: ele determina a visibilidade de alguma variavel no JS

let faz com que ela seja somente usada dentro de um escopo. Fora ela nao funciona.
{
    let x = 0;
    console.log(x)
}
  console.log(x) aqui nao funciona, da erro, pq ela nao é global e sim local.

var faz com que a variavel seja global e local. O var tbm faz a variavel elevar, isso faz com que dependendo 
da sequencia do codigo ele seja undefined, o let so daria erro msm.

Assim se inicia um bloco (Scope)
{
    var x = 0 
}
Assim finaliza um bloco (Scope)

evitamos usar var justamente pela flexibilidade dela, pode causar bugs

*/

