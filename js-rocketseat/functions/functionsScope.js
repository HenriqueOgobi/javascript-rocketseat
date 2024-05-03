let subject = "Creat video";

//se eu tirar o parametro, ela deixa de ser um novo obejeto e acaba sobreescrevendo o antigo subject
function createThink(subject) {
  subject = "study";
  return subject;//toda função que nao tem retorno é undefined
}
console.log(createThink(subject));
console.log(subject);
