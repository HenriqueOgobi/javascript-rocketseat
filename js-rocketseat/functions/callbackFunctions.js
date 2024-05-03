function sayMyNamee(name){
    name()
}
sayMyNamee(
    () =>{
        console.log("Estou em uma callback")
    }
)
//simplesmente chama essa arrow function para dentro da minha função, com aquele parametro name.