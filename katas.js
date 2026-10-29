// Kata 1 - Tarjeta de presentación
const nombre = "Dani"; // Son variables que no cambiarán de valor, solo se usaran en modo lectura
const edad = 36;
const ciudad = "Balsareny";

console.log(`Hola soy ${nombre}, tengo ${edad} y vivo en ${ciudad}`);


// Kata 2 - ¿Par o impar?
const numero = 13;
console.log(numero%2 === 0 ? "par" : "impar");


// Kata 3 - Conversión segura
const entradaUsuario = "42";
console.log(typeof entradaUsuario);
const numero_ = Number(entradaUsuario);
console.log(entradaUsuario + 10, numero_ + 10);

// Kata 4 - Detector de campos vacíos
const nombre_ = null;
const nombreMostrar = nombre_ || "Invitado";
console.log(nombreMostrar);
const nombre1 = "Marta";
const nombre2 = "";
const nombre3 = null;
const nombreMostrar1 = nombre1 || "Invitado";
const nombreMostrar2 = nombre2 || "Invitado";
const nombreMostrar3 = nombre3 || "Invitado";
console.log(nombreMostrar1);
console.log(nombreMostrar2);
console.log(nombreMostrar3);


// Kata 5 - Cazador de `==`
console.log(0 == false); // true vs. true (real)
console.log("" == false); // true vs. true (real)
console.log(null == undefined); // true vs. true (real)
console.log("5" == 5); // true vs. true (real)

console.log(0 === false); // false vs. false (real)
console.log("" === false); // false vs. false (real)
console.log(null === undefined); // false vs. false (real)
console.log("5" === 5); // false vs. false (real)

/*
*	TEMA 2 ------------------------------------------------------------------------------------------
*/
console.log("TEMA 2 ----------------------------------------------------------------------------------");

// Kata 1 - ¿Par o impar?
const numero2 = 7;
if(numero2 % 2 === 0)
	console.log("par");
else
	console.log("impar");

const resultado2 = (numero2 % 2 == 0) ? "par" : "impar";
console.log(resultado2);

// Kata 2 - FizzBuzz del 1 al 20

for(let i=1; i<=20; i++) {
	if(i % 3 == 0 && i % 5 == 0)
		console.log("FizzBuzz");
	else if(i%3 == 0)
		console.log("Fizz");
	else if(i%5 == 0)
		console.log("Buzz");
	else
		console.log(i);
}

// Kata 3 - Menú de entradas con `switch`
const tipoEntrada = "prensa";

switch(tipoEntrada) {
	case "general":
		console.log("Acceso a la pista");
		break;
	case "vip":
		console.log("Acceso a la zona VIP con barra libre");
		break;
	case "prensa":
	case "backstage":
		console.log("Acceso a zona restringida");
		break;
	default:
		console.log("Tipo de entrada no reconocido");
}

// Kata 4 - Cuenta atrás del aforo con `while`

let plazasLibres = 5;
while(plazasLibres>0) {
	console.log(`Quedan ${plazasLibres} plazas libres`);
	plazasLibres --;
}
console.log("Sala completa");

// Kata 5 - Recorrer la cola con  `for..of`

const cola = ["Ana", "menor", "Luis", "Marta"];

for(const persona of cola) {
	if(persona == 'menor')
		continue;
	console.log("Pasa: " + persona);
	if(persona == "Luis") {
		console.log("Aforo completo, cerramos");
		break;
	}
}

/*
*	TEMA 3 ------------------------------------------------------------------------------------------
*/
console.log("TEMA 3 ----------------------------------------------------------------------------------");

// Kata 1 - Función suma

function suma(a, b) {
	return a+b;
}
const total3 = suma(3, 4);
console.log(total3);
console.log(total3 + 10);
// La diferencia entre imprimir solamente o devolver el resultado es que podemos usar el resultado de la función y de la otra forma no hay manera de hacerlo.

// Kata 2 - Saludo con parámetro por defecto

function saludar(nombre = "invitado") {
	return `Hola, ${nombre}`;
}
console.log(saludar("Marta"));
console.log(saludar());
// En caso de no haber tenido valor por defecto, lo hubiera tratado como `undefined` el parámetro `nombre`.

// Kata 3 - Refactor a arrow function
function precioConIva(precio) {
	return precio * 1.21; // IVA general del 21%
}
const precioConIvaExpr = function (precio) { 
	return precio * 1.21;
}
const precioConIvaArrow = (precio) => precio * 1.21;
console.log(precioConIva(80));
console.log(precioConIvaExpr(80));
console.log(precioConIvaArrow(80));

// Kata 4 - Predecir el scope

// Antes de ejecutar, predijgo  que imprimirá "Tokio Store" (a), luego un 3 (b) y luego dará un error (c), (a) ocurre porque la constante es global y por tanto la función puede ver dicha constante.

const tienda = "Tokio Store"; // ámbito global
function revisarStock() {
	if (true) {
		let disponible = 10; // scope de bloque
		var reservado = 3; // scope de función
		console.log(tienda); // (a)
	}
	console.log(reservado); // (b)
	//console.log(disponible); // (c)
}
revisarStock();

// Kata 5 - Contador con closure

function crearContador(valorInicial) {
	//let conta = 0;
	return function() {
		return valorInicial++;
	}
}
const contador = crearContador(1);
console.log(contador());
console.log(contador());
console.log(contador());

const otro = crearContador();
console.log(otro());
/*
*	TEMA 4 ------------------------------------------------------------------------------------------
*/
console.log("TEMA 4 ----------------------------------------------------------------------------------");

// Kata 1 - Maneja la lista de reproducción

const playlist4 = ["Bajo un cielo protector", "Big my secret", "La mentira", "Algo que contar"];

console.log(playlist4[0]);
console.log(playlist4[playlist4.length - 1]);

playlist4[1] = "Secretos";

playlist4.push("My game, my love");

playlist4.unshift("Despierta");

const primera4 = playlist4.shift();

console.log(primera4);
console.log(playlist4);
console.log(playlist4[99]); // En js los índices que no existen se generan con este valor, un poco lógico por su parte ya que es algo que no existe

// Kata 2 - CRUD de una canción
const cancion4 = {
	titulo: "Las flores rojas",
	artista: "Benjamin Flores",
	duaracion: 120
}

console.log(cancion4.titulo);
console.log(cancion4['titulo']);
cancion4.duracion = 192;
cancion4.anio = 2020;
delete cancion4.artista;
console.log(cancion4);

// Kata 3 - Desempaqueta un objeto anidado

const cancion = {
	titulo: "Imagine",
	artista: { nombre: "John Lennon", pais: "Reino Unido" },
	duracion: 183,
}
const {titulo, duracion} = cancion;
const {nombre: autor} = cancion.artista;
const {genero="desconocido"} = cancion;
console.log(titulo, duracion, autor, genero);

// Kata 4 - Combina dos objectos con spread

const base = { titulo: "Imagine", duracion: 183 };
const extra = { artista: "John Lennon", duracion: 200 };

const completa = {...base, ...extra};
console.log(completa); // Duración vale 200 por lógica ya que es el objeto final el que sobreescribe las propiedades existentes anteriores, que es `duración` en este caso
const basecopia = {...base};
basecopia.titulo = "Twist the show";

console.log(basecopia, base);


// Kata 5 - Caza del bug de varlo vs refrencia

const original = { titulo: "Imagine", duracion: 183 };
// Se intenta copiar el objeto para no modificar el original
const remaster = original;
remaster.titulo = "Imagine (Remaster)";
console.log(original.titulo); // imprime "Imagine (Remaster)" — ¡bug!

// Como la copia de realiza por referencia, lo que estamos es duplicando la dirección de memoria a dos variables diferentes pero que apuntan al mismo sitio así que las dos comparten el mismo espacio y por tanto los mismo valores, para ahorrar espacio y velocidad ya que una copia de objecto es mucho más costosa que una refencia, e imagninar que el objecto tiene cientos de atributos y propiedades...
const remasterCorregido = {...original};
remasterCorregido.titulo = "Imagine (Remaster esta vez si)";
original.titulo = "Imagine (original)";
console.log(original, remasterCorregido);

/*
*	TEMA 5 ------------------------------------------------------------------------------------------
*/
console.log("TEMA 5 ----------------------------------------------------------------------------------");
// Catálogo compartido por todas las katas: nombre, precio y categoría
const productos = [
	{ nombre: "Teclado", precio: 25, categoria: "accesorios" },
	{ nombre: "Monitor", precio: 180, categoria: "pantallas" },
	{ nombre: "Ratón", precio: 15, categoria: "accesorios" },
	{ nombre: "Portátil", precio: 900, categoria: "ordenadores" },
	{ nombre: "Webcam", precio: 40, categoria: "accesorios" },
];

// Kata 1 - Etiquetas de precio con map
const tecladoTransformed5 = productos.map((prod) => `${prod.nombre}: ${prod.precio} €`);
console.log(tecladoTransformed5);

// Kata 2 - Solo los accesorios aseuibles con filter
const productosAccesoriosBaratos = productos.filter((prod) => prod.precio<50 && prod.categoria === "accesorios");
console.log(productosAccesoriosBaratos);
console.log(productosAccesoriosBaratos.length);
console.log(productosAccesoriosBaratos.map((prod) => prod.nombre));

// Kata 3 - Precio total con reduce
const precioTotal5 = productos.reduce((sum, prod) => sum + prod.precio, 0);
console.log(precioTotal5);
// En caso de omitir el valor inicial, aparece un valor raro y si el array de productos viene vacío, pues devolvería el valor incial (0).

// Kata 4 - Ranking de más car a más barato con sort
const ordenadoPrecios = [...productos].sort((a,b) => a.precio-b.precio);
console.log(ordenadoPrecios);
console.log(productos);

// Kata 5 - Gasto por categoría encadenando métodos
const sumPreciosAccesorios = productos.filter((prod) => prod.categoria == 'accesorios').map((accesorio) => accesorio.precio).reduce((sum, precio) => sum + precio, 0);
console.log(sumPreciosAccesorios);

