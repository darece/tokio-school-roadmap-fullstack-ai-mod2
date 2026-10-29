/*
*	TEMA 6 ------------------------------------------------------------------------------------------
*/
console.log("TEMA 6 ----------------------------------------------------------------------------------");
// Kata 1 - Anota la ficha
const nombre: string = "Marta";
const edad: number = 30;
const esAdmin: boolean = false;

function presentar(nombre: string, edad: number, esAdmin: boolean): string {
	return `${nombre} (${edad}) - administradora: ${esAdmin}`;
}
console.log(presentar(nombre, edad, esAdmin));

// Kata 2 - Contrato de producto
interface Producto {
	nombre: string,
	precio: number
};

const productos6: Producto[] = [{nombre: "Portátil", precio: 595.95}, {nombre: "Perchero", precio: 15.43}];
productos6.forEach((prod) => console.log(prod));

// Kata 3 - Identificador flexible
function describirId(id: string|number): string {
	if(typeof id === "number") {
		return `Id numéric: ${id}`;
	}
	else {
	
		return `Id de texto: ${id}`;
	}
	
}
console.log(describirId(42));
console.log(describirId("a42b"));

// Kata 4 - Caza el error de tipo
let total: number = 0;
//total = "100"; // Punto 1: Se producirá un error, sobre "que no se puede asignar un 'string' a un tipo 'number'
total = 100; // Corrección, punto 2
console.log(total + 50); 
// Punto 3: Cambiar el tipo total a string no permitirá hacer la suma con 50 como tipo nativo numérico, y si interesa realmente que sea una operación de suma, es lógico que se sea consistente con el tipo puro, además, `any` descarta cualquier comprobarción de tipo e introduce un posible error en tiempo de ejecucino en producción

// Kata 5 - Campo opcional
interface Usuario {
	nombre: string,
	edad: number,
	telefono?: string
};

function mostrarContacto(usuario: Usuario): string {
	return "El usauario " + usuario.nombre + " tiene una edad de " + usuario.edad + " años. " + (usuario['telefono'] === undefined ? "Sin teléfono" : "Teléfono: " + usuario.telefono);
}
const usuarioTestTelefono: Usuario = {nombre: "Dani", edad: 26, telefono: "111222333"};
const usuarioTestNoTelefono: Usuario = {nombre: "Ana", edad: 40};
console.log(mostrarContacto(usuarioTestTelefono));
console.log(mostrarContacto(usuarioTestNoTelefono));

/*
*	TEMA 7 ------------------------------------------------------------------------------------------
*/
console.log("TEMA 7 ----------------------------------------------------------------------------------");
