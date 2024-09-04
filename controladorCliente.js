import listaClientes from "./listadoDeClientes.js";
//import express from 'express/promises.js'

function conexionDBClientes(param1) {
    //limpia los datos
    let clientes = param1.customers
    return clientes
}

function verClientes() {

    let arrayClientes = conexionDBClientes(listaClientes)
    //clear
    console.log(  arrayClientes)
    for(let i = 0; i <= arrayClientes.length; i++) {
        
        console.log(arrayClientes[i].nombre)
    }
}

console.log(
    verClientes()
)