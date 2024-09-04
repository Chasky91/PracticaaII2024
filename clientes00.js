// Objeto JSON, estos siempre van entre llaves
const  cliente = {
    name: "Jose",
    appellido: "Zuñiga",
  
}


// Función (Function) V1
function  saludarV1() {
    //esta  variable unicamente va existir en eneste bloque
    let nombreCompleto = `${cliente.name} ${cliente.appellido}` //azucar sintactico
    let nombreCompleto2 = cliente.name + " " + cliente.appellido
    //el retunr devuelve  algun valor de una funcion, siempre devuelve solo una varaible 
    console.log( `Hola ${ nombreCompleto} Funcion tipo 1`)
    console.log("Hola ", nombreCompleto2, " funcion tipo 1")

   
} 

//imprime la funcion V1 en la terminal
//console.log(saludarACliente())

//function V2
const saludarV2 = () => {
    let nombreCompleto = `${cliente.name} ${cliente.appellido}`
    return `Hola ${ nombreCompleto} V2`
}

//imprime la funcion V2 en la terminal
console.log(saludarV2())


