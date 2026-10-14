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

