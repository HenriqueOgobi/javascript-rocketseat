//Como se fosse um molde para criar objeto
function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + "está andando";
  };
}
const Henrique = new Person("Henrique");
const Ivan = new Person("Ivan");
console.log(Henrique);
console.log(Ivan);
console.log(Henrique.walk);
console.log(Ivan.walk);
