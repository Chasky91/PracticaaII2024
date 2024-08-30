// Objeto JSON, estos siempre van entre llaves
 const  cliente = {
    name: "Jose",
    appellido: "Zuñiga",
  
}

let dniAlumno = 41582123

const materias = ["Matematicas","Practicas II", 'Legislacion']

const alumno = {
    nombre: "Jose",
    apellido:`${dniAlumno} Ruiz`,
    "dni":dniAlumno,
    "domicilio":{
        direccion:"Av San Martin",
        altura: 45
    }
}

/*
Esto es un comentario
otra linea
*/
//console.log(alumno.dni)


// Arreglo (Array)
let colores = ["rojo", "verde", "azul"]

// Función (Function) V1
function  saludarV1() {

    //esta  variable unicamente va existir en eneste bloque
    let nombreCompleto = `${cliente.name} ${cliente.appellido}`
    let nombreCompleto2 = cliente.name + " " + cliente.appellido

    //el retunr devuelve  algun valor de una funcion, siempre devuelve solo una varaible 
    console.log( `Hola ${ nombreCompleto} Funcion tipo 1`)
    console.log("Hola ", nombreCompleto2, " funcion tipo 1")
} 

console.log(saludarACliente())

//function V2
const saludarV2 = () => {
    let nombreCompleto = `${cliente.name} ${cliente.appellido}`
    return `Hola ${ nombreCompleto} V2`
}

console.log(conexionDBMysql("localhost", 3306,"eventosDB"), "funcion v2")

//function V3
const saludarV3 = param1 => `Hola ${ param1.name} ${param1.appellido} V3`  //el return está implícito

console.log(saludarV3(nombre))


// Objeto Fecha (Date)
let hoy = new Date()

//console.log(hoy)


