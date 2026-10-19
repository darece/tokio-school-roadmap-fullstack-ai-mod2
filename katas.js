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