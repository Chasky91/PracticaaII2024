import listaClientes from "./listadoDeClientes.js"; //importa  la variable listaClientes del archivo listadoDeClientes.js

function conexionDBClientes(param1) {
    //limpia los datos tomandolos aparti de la clave customes
    let clientes = param1.customers
    return clientes
}

//funcion que imprimira los nombres de los clientes  atraves de un for
function verClientes() {

    let arrayClientes = conexionDBClientes(listaClientes)
    //clear
    console.log(  arrayClientes)
    for(let i = 0; i <= arrayClientes.length; i++) {
        
        console.log(arrayClientes[i].nombre)
    }
}


//llamamos a la funcion para que sea impresa en la terminal
console.log(
    verClientes()
)