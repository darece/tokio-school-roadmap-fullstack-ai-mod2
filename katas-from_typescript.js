"use strict";
/*
*	TEMA 6 ------------------------------------------------------------------------------------------
*/
console.log("TEMA 6 ----------------------------------------------------------------------------------");
// Kata 1 - Anota la ficha
const nombre = "Marta";
const edad = 30;
const esAdmin = false;
function presentar(nombre, edad, esAdmin) {
    return `${nombre} (${edad}) - administradora: ${esAdmin}`;
}
console.log(presentar(nombre, edad, esAdmin));
;
const productos6 = [{ nombre: "Portátil", precio: 595.95 }, { nombre: "Perchero", precio: 15.43 }];
productos6.forEach((prod) => console.log(prod));
// Kata 3 - Identificador flexible
function describirId(id) {
    if (typeof id === "number") {
        return `Id numéric: ${id}`;
    }
    else {
        return `Id de texto: ${id}`;
    }
}
console.log(describirId(42));
console.log(describirId("a42b"));
// Kata 4 - Caza el error de tipo
let total = 0;
//total = "100"; // Punto 1: Se producirá un error, sobre "que no se puede asignar un 'string' a un tipo 'number'
total = 100; // Corrección, punto 2
console.log(total + 50);
;
function mostrarContacto(usuario) {
    return "El usauario " + usuario.nombre + " tiene una edad de " + usuario.edad + " años. " + (usuario['telefono'] === undefined ? "Sin teléfono" : "Teléfono: " + usuario.telefono);
}
const usuarioTestTelefono = { nombre: "Dani", edad: 26, telefono: "111222333" };
const usuarioTestNoTelefono = { nombre: "Ana", edad: 40 };
console.log(mostrarContacto(usuarioTestTelefono));
console.log(mostrarContacto(usuarioTestNoTelefono));
/*
*	TEMA 7 ------------------------------------------------------------------------------------------
*/
console.log("TEMA 7 ----------------------------------------------------------------------------------");
