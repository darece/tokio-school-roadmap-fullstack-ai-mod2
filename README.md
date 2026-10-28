# 1 Katas - Variables, tipos primitivos y operadores

## Brief
Cinco mini-katas (pequeños ejercicios cerrados) que cubren las ideas centrales del submódulo: declaración con `const` / `let`, los cinco tipos primitivos comunes, conversión de tipos y los operadores básicos. Forman parte del entregable global del módulo (20 katas resueltas).

## Objetivos de aprendizaje
- Declarar variables con `const` y `let` eligiendo la palabra clave correcta en cada caso.
- Manipular strings con template literals (`...${variable}...`).
- Distinguir conversión implícita y explícita y aplicar la conversión explícita cuando hace falta.
- Usar `===` y `!==` por defecto, evitando `==` / `!=`.
- Combinar valores con operadores aritméticos, lógicos y de cadena.

## Enunciado
Crea un archivo `katas.js` (o `katas.ts` si prefieres) con las soluciones a las 5 katas siguientes. Cada kata debe ejecutarse en orden con `node katas.js` e imprimir su resultado por consola.

### Kata 1 - Tarjeta de presentación
Declara tres variables: `nombre` (tu nombre, string), `edad` (un número) y `ciudad` (un string).
- Decide para cada una si debería ser `const` o `let` y justifica tu decisión con un comentario al lado.
- Usando una template literal, imprime una frase del tipo:
  > *Hola, soy Marta, tengo 30 años y vivo en Madrid.*

### Kata 2 - ¿Par o impar?
Declara una variable `numero` con cualquier número entero. Usando el operador resto (`%`) y el operador de igualdad estricta (`===`), imprime por consola `"par"` o `"impar"` según corresponda.

> **Pista:** una expresión booleana de una sola línea puede determinar el resultado.

### Kata 3 - Conversión segura
Tienes un input "del usuario" simulado con la siguiente línea:

```javascript
const entradaUsuario = "42";
```

1. Imprime el tipo de `entradaUsuario` con `typeof`. Debería ser `"string"`.
2. Conviértelo explícitamente a `number` y guárdalo en una nueva variable `numero`.
3. Imprime `entradaUsuario + 10` y `numero + 10`. Comprueba que **NO** dan lo mismo y explica con un comentario por qué.

### Kata 4 - Detector de campos vacíos
Declara una variable `nombre` con un valor cualquiera (`string`, `null` o `undefined`). Escribe una expresión usando el operador `||` que asigne a una nueva variable `nombreMostrar` el valor `nombre` si es *truthy*, o el string `"Invitado"` si es *falsy*.

Repite el ejercicio probando con al menos estos tres valores y comprueba que el resultado tiene sentido:

```javascript
const nombre1 = "Marta";   // → "Marta"
const nombre2 = "";        // → "Invitado"
const nombre3 = null;      // → "Invitado"
```

### Kata 5 - Cazador de `==`
Las siguientes comparaciones usan `==` (igualdad débil) y dan resultados que sorprenden:

```javascript
console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
console.log("5" == 5);
```

Para cada una:
1. Escribe en un comentario qué crees que devolverá.
2. Imprime el resultado real.
3. Reescribe la comparación con `===` y comprueba si cambia el resultado.
4. Escribe en un segundo comentario por qué `===` es más predecible.

## Resultado final
- Un archivo `katas.js` (o `katas.ts`) con las 5 katas resueltas.
- Cada kata claramente separada con un comentario `// Kata N`.
- Output simulado o real comentado bajo cada kata (lo que imprime al ejecutarse).

## Starter (para Classroom)
Cuando este ejercicio se sincronice con GitHub Classroom, el repo template incluirá:

```text
starter/
├── katas.js        # plantilla con las 5 secciones vacías y TODO
├── package.json    # node, sin dependencias adicionales
├── .nvmrc          # versión de Node sugerida
└── README.md       # enunciado completo + instrucciones de entrega (flujo PR)
```

---

# Katas - Control de flujo: if/else, switch y bucles

## Brief

Cinco mini-katas (pequeños ejercicios cerrados) de dificultad creciente que recorren las dos familias del control de flujo: decisiones (`if` / `else`, ternario, `switch`) y repeticiones (`while`, `for...of`). Forman parte del entregable global del módulo (20 katas resueltas).

## Objetivos de aprendizaje

* Decidir con `if` / `else` usando comparaciones y el operador resto `%`.
* Repetir una acción un número conocido de veces con un bucle `for`.
* Elegir entre varios valores exactos con `switch`, cerrando cada `case` con `break` y previendo lo inesperado con `default`.
* Repetir mientras se cumpla una condición con `while`, garantizando que el bucle avanza hacia su fin (sin bucles infinitos).
* Recorrer los elementos de una lista con `for...of`, sin gestionar índices a mano.

## Enunciado

Crea un archivo `katas.js` (o `katas.ts` si prefieres) con las soluciones a las 5 katas siguientes. Cada kata debe ejecutarse en orden con `node katas.js` e imprimir su resultado por consola. Usa siempre `const` / `let` (nunca `var`), `===` / `!==` en las comparaciones y comentarios en español que expliquen las decisiones.

### Kata 1 - ¿Par o impar?

Declara una variable `numero` con cualquier número entero. Usando un `if` / `else`, el operador resto (`%`) y la igualdad estricta (`===`), imprime por consola `"par"` o `"impar"` según corresponda.

Después, resuelve exactamente lo mismo en una sola línea con el operador ternario y guarda el texto en una variable `resultado` antes de imprimirla.

> **Pista:** un número es par cuando el resto de dividirlo entre 2 vale 0.

### Kata 2 - FizzBuzz del 1 al 20

Recorre con un bucle `for` los números del 1 al 20 (ambos incluidos) e imprime, para cada uno:

* `"FizzBuzz"` si es múltiplo de 3 y de 5 a la vez.
* `"Fizz"` si es múltiplo solo de 3.
* `"Buzz"` si es múltiplo solo de 5.
* El propio número en cualquier otro caso.

> **Nota:** Presta atención al orden de las ramas: la condición más exigente (múltiplo de 3 y de 5) debe comprobarse antes que las otras dos, o nunca se alcanzará.

### Kata 3 - Menú de entradas con switch

Declara una variable `tipoEntrada` con uno de estos valores: `"general"`, `"vip"`, `"prensa"` o `"backstage"`. Escribe un `switch` que imprima el mensaje de acceso correspondiente a cada tipo:

* `"general"` $\rightarrow$ `"Acceso a la pista"`
* `"vip"` $\rightarrow$ `"Acceso a la zona VIP con barra libre"`
* `"prensa"` y `"backstage"` $\rightarrow$ `"Acceso a zona restringida"` (comparten la misma salida mediante *fall-through* intencionado)
* Cualquier otro valor: un `default` con `"Tipo de entrada no reconocido"`

Cierra cada bloque con `break` donde corresponda y comprueba el resultado cambiando el valor de `tipoEntrada`.

### Kata 4 - Cuenta atrás del aforo con while

Simula el aforo de una sala. Declara `let plazasLibres = 5;` y, con un bucle `while`, ve "sentando personas" de una en una: en cada vuelta imprime cuántas plazas quedan y reduce el contador. El bucle termina cuando no quedan plazas libres.

Asegúrate de que el contador cambia en cada vuelta para no provocar un bucle infinito. Al salir del bucle, imprime `"Sala completa"`.

### Kata 5 - Recorrer la cola con for...of

Declara un array `cola` con al menos cuatro nombres, incluyendo el valor especial `"menor"` en alguna posición intermedia, por ejemplo:

```javascript
const cola = ["Ana", "menor", "Luis", "Marta"];
```

Recórrelo con un bucle `for...of` y, para cada persona:

1. Si el valor es `"menor"`, sáltala con `continue` sin imprimir nada.
2. En cualquier otro caso, imprime `"Pasa: <nombre>"`.

**Amplía la kata:** añade una condición que, al llegar a `"Luis"`, imprima `"Aforo completo, cerramos"` y corte el recorrido con `break` (de modo que `"Marta"` no llegue a evaluarse).

## Resultado final

* Un archivo `katas.js` (o `katas.ts`) con las 5 katas resueltas.
* Cada kata claramente separada con un comentario `// Kata N`.
* Output simulado o real comentado bajo cada kata (lo que imprime al ejecutarse).

## Starter (para Classroom)

Cuando este ejercicio se sincronice con GitHub Classroom, el repo template incluirá:

```text
starter/
├── katas.js        # plantilla con las 5 secciones vacías y TODO
├── package.json    # node, sin dependencias adicionales
├── .nvmrc          # versión de Node sugerida
└── README.md       # enunciado completo + instrucciones de entrega (flujo PR)
```

---

# 2 Katas - Control de flujo: if/else, switch y bucles

## Brief

Cinco mini-katas (pequeños ejercicios cerrados) de dificultad creciente que recorren las dos familias del control de flujo: decisiones (`if` / `else`, ternario, `switch`) y repeticiones (`while`, `for...of`). Forman parte del entregable global del módulo (20 katas resueltas).

## Objetivos de aprendizaje

* Decidir con `if` / `else` usando comparaciones y el operador resto `%`.
* Repetir una acción un número conocido de veces con un bucle `for`.
* Elegir entre varios valores exactos con `switch`, cerrando cada `case` con `break` y previendo lo inesperado con `default`.
* Repetir mientras se cumpla una condición con `while`, garantizando que el bucle avanza hacia su fin (sin bucles infinitos).
* Recorrer los elementos de una lista con `for...of`, sin gestionar índices a mano.

## Enunciado

Crea un archivo `katas.js` (o `katas.ts` si prefieres) con las soluciones a las 5 katas siguientes. Cada kata debe ejecutarse en orden con `node katas.js` e imprimir su resultado por consola. Usa siempre `const` / `let` (nunca `var`), `===` / `!==` en las comparaciones y comentarios en español que expliquen las decisiones.

### Kata 1 - ¿Par o impar?

Declara una variable `numero` con cualquier número entero. Usando un `if` / `else`, el operador resto (`%`) y la igualdad estricta (`===`), imprime por consola `"par"` o `"impar"` según corresponda.

Después, resuelve exactamente lo mismo en una sola línea con el operador ternario y guarda el texto en una variable `resultado` antes de imprimirla.

> **Pista:** un número es par cuando el resto de dividirlo entre 2 vale 0.

### Kata 2 - FizzBuzz del 1 al 20

Recorre con un bucle `for` los números del 1 al 20 (ambos incluidos) e imprime, para cada uno:

* `"FizzBuzz"` si es múltiplo de 3 y de 5 a la vez.
* `"Fizz"` si es múltiplo solo de 3.
* `"Buzz"` si es múltiplo solo de 5.
* El propio número en cualquier otro caso.

> **Nota:** Presta atención al orden de las ramas: la condición más exigente (múltiplo de 3 y de 5) debe comprobarse antes que las otras dos, o nunca se alcanzará.

### Kata 3 - Menú de entradas con switch

Declara una variable `tipoEntrada` con uno de estos valores: `"general"`, `"vip"`, `"prensa"` o `"backstage"`. Escribe un `switch` que imprima el mensaje de acceso correspondiente a cada tipo:

* `"general"` $\rightarrow$ `"Acceso a la pista"`
* `"vip"` $\rightarrow$ `"Acceso a la zona VIP con barra libre"`
* `"prensa"` y `"backstage"` $\rightarrow$ `"Acceso a zona restringida"` (comparten la misma salida mediante *fall-through* intencionado)
* Cualquier otro valor: un `default` con `"Tipo de entrada no reconocido"`

Cierra cada bloque con `break` donde corresponda y comprueba el resultado cambiando el valor de `tipoEntrada`.

### Kata 4 - Cuenta atrás del aforo con while

Simula el aforo de una sala. Declara `let plazasLibres = 5;` y, con un bucle `while`, ve "sentando personas" de una en una: en cada vuelta imprime cuántas plazas quedan y reduce el contador. El bucle termina cuando no quedan plazas libres.

Asegúrate de que el contador cambia en cada vuelta para no provocar un bucle infinito. Al salir del bucle, imprime `"Sala completa"`.

### Kata 5 - Recorrer la cola con for...of

Declara un array `cola` con al menos cuatro nombres, incluyendo el valor especial `"menor"` en alguna posición intermedia, por ejemplo:

```javascript
const cola = ["Ana", "menor", "Luis", "Marta"];
```

Recórrelo con un bucle `for...of` y, para cada persona:

1. Si el valor es `"menor"`, sáltala con `continue` sin imprimir nada.
2. En cualquier otro caso, imprime `"Pasa: <nombre>"`.

**Amplía la kata:** añade una condición que, al llegar a `"Luis"`, imprima `"Aforo completo, cerramos"` y corte el recorrido con `break` (de modo que `"Marta"` no llegue a evaluarse).

## Resultado final

* Un archivo `katas.js` (o `katas.ts`) con las 5 katas resueltas.
* Cada kata claramente separada con un comentario `// Kata N`.
* Output simulado o real comentado bajo cada kata (lo que imprime al ejecutarse).

## Starter (para Classroom)

Cuando este ejercicio se sincronice con GitHub Classroom, el repo template incluirá:

```text
starter/
├── katas.js        # plantilla con las 5 secciones vacías y TODO
├── package.json    # node, sin dependencias adicionales
├── .nvmrc          # versión de Node sugerida
└── README.md       # enunciado completo + instrucciones de entrega (flujo PR)
```

---

# 3 Katas - Funciones, parámetros, retorno y scope

## Brief

Cinco mini-katas (pequeños ejercicios cerrados) de dificultad creciente que recorren las ideas centrales del submódulo: declarar una función y devolver un valor con `return`, usar parámetros por defecto, reescribir una función como *arrow function*, razonar sobre el scope de las variables y fabricar un contador con un *closure*. Forman parte del entregable global del módulo (20 katas resueltas).

## Objetivos de aprendizaje

* Escribir una función que reciba parámetros y devuelva un resultado con `return`, distinguiéndolo de imprimir con `console.log`.
* Definir parámetros por defecto para cubrir el caso en que quien llama no pasa un argumento.
* Convertir una declaración de función en una *arrow function*, usando el retorno implícito cuando el cuerpo es un solo return.
* Predecir qué variables son visibles en cada ámbito (global, de función y de bloque) y por qué `let` / `const` se comportan distinto que `var`.
* Reconocer un *closure* como una función que recuerda las variables del sitio donde nació.

## Enunciado

Crea un archivo `katas.js` (o `katas.ts` si prefieres) con las soluciones a las 5 katas siguientes. Cada kata debe ejecutarse en orden con `node katas.js` e imprimir su resultado por consola. Separa cada kata con un comentario `// Kata N ...` y usa `const` / `let` (nunca `var`) salvo cuando una kata pida lo contrario para observar su efecto.

### Kata 1 - Función suma

Declara una función `sumar` que reciba dos números como parámetros y devuelva su suma con `return` (no la imprimas dentro de la función).

1. Llama a `sumar(3, 4)` y guarda el resultado en una constante `total`.
2. Imprime `total` por consola.
3. Añade un comentario que explique la diferencia entre devolver el resultado con `return` y limitarse a imprimirlo con `console.log`.

Comprueba que puedes reutilizar el valor devuelto, por ejemplo en `sumar(3, 4) + 10`.

### Kata 2 - Saludo con parámetro por defecto

Declara una función `saludar(nombre)` que devuelva la frase `"Hola, <nombre>"` usando una *template literal*. Dale a `nombre` el valor por defecto `"invitado"`.

Imprime por consola el resultado de estas dos llamadas y comprueba que la segunda usa el valor por defecto:

```javascript
console.log(saludar("Marta")); // "Hola, Marta"
console.log(saludar());        // "Hola, invitado"
```

Añade un comentario explicando qué habría devuelto la segunda llamada si `nombre` NO tuviera valor por defecto.

### Kata 3 - Refactor a arrow function

Parte de esta declaración de función:

```javascript
function precioConIva(precio) {
  return precio * 1.21; // IVA general del 21 %
}
```

1. Reescríbela como una expresión de función guardada en una constante `precioConIvaExpr`.
2. Reescríbela como una *arrow function* guardada en una constante `precioConIvaArrow`, aprovechando el retorno implícito (sin llaves ni `return`).
3. Comprueba que las tres formas devuelven lo mismo para `precioConIva(80)`, `precioConIvaExpr(80)` y `precioConIvaArrow(80)`, e imprímelo.

### Kata 4 - Predecir el scope

Antes de ejecutar, predice en un comentario qué imprimirá cada `console.log` y cuál dará error. Después ejecútalo y comprueba tus predicciones.

```javascript
const tienda = "Tokio Store"; // ámbito global

function revisarStock() {
  if (true) {
    let disponible = 10; // scope de bloque
    var reservado = 3;   // scope de función
    console.log(tienda); // (a)
  }
  console.log(reservado);  // (b)
  console.log(disponible); // (c)
}

revisarStock();
```

En un comentario final, responde: ¿por qué `reservado` sobrevive fuera del `if` y `disponible` no? Corrige la línea que falla para que el programa se ejecute sin errores (por ejemplo, sacando la declaración de `disponible` fuera del `if`) y explica tu cambio.

### Kata 5 - Contador con closure

Escribe una función `crearContador()` que devuelva otra función. La función interior, cada vez que se llame, debe incrementar en 1 un contador que empieza en 0 y devolver el nuevo valor. El contador vive en el ámbito de `crearContador` y la función interior lo "recuerda" gracias al *closure*.

```javascript
const contador = crearContador();
console.log(contador()); // -> 1
console.log(contador()); // -> 2
console.log(contador()); // -> 3

const otro = crearContador();
console.log(otro()); // -> 1 (empieza de cero, no comparte estado)
```

Añade un comentario explicando por qué `contador` y `otro` llevan cuentas independientes aunque salgan de la misma función.

## Resultado final

* Un archivo `katas.js` (o `katas.ts`) con las 5 katas resueltas.
* Cada kata claramente separada con un comentario `// Kata N - ...`.
* Los comentarios de predicción y explicación que pide cada kata (Kata 1, 2, 4 y 5).
* Output simulado o real comentado bajo cada kata (lo que imprime al ejecutarse).

## Starter (para Classroom)

Cuando este ejercicio se sincronice con GitHub Classroom, el repo template incluirá:

```text
starter/
├── katas.js        # plantilla con las 5 secciones vacías y TODO
├── package.json    # node, sin dependencias adicionales
├── .nvmrc          # versión de Node sugerida
└── README.md       # enunciado completo + instrucciones de entrega (flujo PR)
```

---

# 4 Katas - Arrays, objetos y destructuring

## Brief

Cinco mini-katas (pequeños ejercicios cerrados) de dificultad creciente que recorren las ideas centrales del submódulo: manipular arrays, hacer un CRUD completo sobre un objeto, desempaquetar un objeto anidado con *destructuring*, combinar objetos con el operador *spread* y, por último, corregir un bug clásico de copia por referencia. Todo se apoya en un mismo hilo conductor: una pequeña lista de reproducción de música. Forman parte del entregable global del módulo (20 katas resueltas).

## Objetivos de aprendizaje

* Crear un array y leer, sustituir, añadir y quitar elementos por los extremos con `push`, `pop`, `unshift` y `shift`.
* Aplicar sobre un objeto las cuatro operaciones básicas: crear, leer, modificar y borrar propiedades (con acceso por punto y por corchetes, y con `delete`).
* Desempaquetar un objeto anidado con *destructuring*, usando renombrado y valores por defecto.
* Combinar y ampliar objetos con el operador *spread*, entendiendo que ante una clave repetida gana el último valor.
* Distinguir la copia por valor de la copia por referencia y arreglar un bug causado por compartir una estructura, usando una copia superficial.

## Enunciado

Crea un archivo `katas.js` (o `katas.ts` si prefieres) con las soluciones a las 5 katas siguientes. Cada kata debe ejecutarse en orden con `node katas.js` e imprimir su resultado por consola. Separa cada kata con un comentario `// Kata N ...` y escribe todos los comentarios en español.

### Kata 1 - Maneja la lista de reproducción

Declara un array `playlist` con al menos tres títulos de canciones.

1. Imprime el primer elemento por su índice y el último usando `playlist.length - 1` (sin escribir el número a mano).
2. Sustituye el segundo elemento por otro título.
3. Añade una canción al final con `push` y otra al principio con `unshift`.
4. Quita la primera con `shift`, guárdala en una variable e imprímela.
5. Imprime la playlist final y su `length`.

Comprueba de paso qué devuelve `playlist[99]` (una posición que no existe) e indícalo en un comentario.

### Kata 2 - CRUD de una canción

Declara con `const` un objeto `cancion` con las propiedades `titulo`, `artista` y `duracion` (en segundos).

1. Lee e imprime `titulo` con acceso por punto y `artista` con acceso por corchetes.
2. Modifica la `duracion` a un valor nuevo.
3. Añade una propiedad `anio` que no existía.
4. Borra la propiedad `artista` con `delete`.
5. Imprime el objeto final.

En un comentario, explica por qué has podido modificar el objeto aunque lo declaraste con `const`.

### Kata 3 - Desempaqueta un objeto anidado

Parte de este objeto con un nivel anidado:

```javascript
const cancion = {
  titulo: "Imagine",
  artista: { nombre: "John Lennon", pais: "Reino Unido" },
  duracion: 183,
};
```

Usando una sola instrucción de *destructuring* de objeto:

1. Extrae `titulo` y `duracion` en variables con su mismo nombre.
2. Extrae la propiedad anidada `artista.nombre` en una variable renombrada `autor`.
3. Extrae una propiedad `genero` que no existe en el objeto, dándole el valor por defecto `"desconocido"`.

Imprime las cuatro variables (`titulo`, `duracion`, `autor`, `genero`) y comprueba que `genero` muestra el valor por defecto.

### Kata 4 - Combina dos objetos con spread

Tienes los datos de una canción repartidos en dos objetos:

```javascript
const base = { titulo: "Imagine", duracion: 183 };
const extra = { artista: "John Lennon", duracion: 200 };
```

1. Crea un objeto nuevo `completa` que combine `base` y `extra` con el operador *spread*, poniendo `extra` en último lugar.
2. Imprime `completa` y observa qué valor tiene `duracion`.
3. En un comentario, explica por qué `duracion` acaba valiendo 200 y no 183.
4. Crea además una copia independiente de `base` con *spread*, cámbiale el `titulo` y comprueba que `base` no se ha modificado.

### Kata 5 - Caza el bug de valor vs referencia

El siguiente código intenta duplicar una canción para hacer una versión "remasterizada" sin tocar la original, pero tiene un bug: al final el título del original también cambia.

```javascript
const original = { titulo: "Imagine", duracion: 183 };

// Se intenta copiar el objeto para no modificar el original
const remaster = original;
remaster.titulo = "Imagine (Remaster)";

console.log(original.titulo); // imprime "Imagine (Remaster)" ¡bug!
```

1. Explica en un comentario por qué `original.titulo` cambió pese a que solo tocamos `remaster`.
2. Corrige el código para que `remaster` sea una copia independiente y `original.titulo` siga siendo `"Imagine"`.
3. Imprime ambos títulos para demostrar que el bug está resuelto.

## Resultado final

* Un archivo `katas.js` (o `katas.ts`) con las 5 katas resueltas.
* Cada kata claramente separada con un comentario `// Kata N ...`.
* Output simulado o real comentado bajo cada kata (lo que imprime al ejecutarse).
* Los comentarios explicativos que pide cada kata (el porqué del `const`, el porqué gana el último valor en el *spread*, y la causa del bug de la Kata 5).

## Starter (para Classroom)

Cuando este ejercicio se sincronice con GitHub Classroom, el repo template incluirá:

```text
starter/
├── katas.js        # plantilla con las 5 secciones vacías y TODO
├── package.json    # node, sin dependencias adicionales
├── .nvmrc          # versión de Node sugerida
└── README.md       # enunciado completo + instrucciones de entrega (flujo PR)
```

---

# 5 Katas - Métodos de array: map, filter y reduce

## Brief

Cinco mini-katas (pequeños ejercicios cerrados) que recorren las ideas centrales del submódulo: transformar con `map`, seleccionar con `filter`, condensar con `reduce` (acumulador y valor inicial), ordenar con `sort` y su comparador, y encadenar varios métodos en una sola expresión. Todas las katas trabajan sobre el mismo catálogo de productos del submódulo. Forman parte del entregable global del módulo (20 katas resueltas).

## Objetivos de aprendizaje

* Transformar cada elemento de un array con `map`, devolviendo un array nuevo del mismo tamaño.
* Seleccionar un subconjunto con `filter` según una condición booleana.
* Condensar un array en un único valor con `reduce`, eligiendo el acumulador y el valor inicial correctos.
* Ordenar números y objetos con `sort` usando el comparador `(a, b) => a - b`, protegiendo el array original con la propagación `[...array]`.
* Encadenar `filter`, `map` y `reduce` para resolver una pregunta completa en una sola expresión legible.

## Enunciado

Crea un archivo `katas.js` (o `katas.ts` si prefieres) con las soluciones a las 5 katas siguientes. Cada kata debe ejecutarse en orden con `node katas.js` e imprimir su resultado por consola.

Todas las katas parten del mismo catálogo. Declara este array una sola vez al principio del archivo y reutilízalo en cada kata:

```javascript
// Catálogo compartido por todas las katas: nombre, precio y categoría
const productos = [
  { nombre: "Teclado", precio: 25, categoria: "accesorios" },
  { nombre: "Monitor", precio: 180, categoria: "pantallas" },
  { nombre: "Ratón", precio: 15, categoria: "accesorios" },
  { nombre: "Portátil", precio: 900, categoria: "ordenadores" },
  { nombre: "Webcam", precio: 40, categoria: "accesorios" },
];
```

### Kata 1 - Etiquetas de precio con map

Usa `map` para transformar el catálogo en un array nuevo de textos, uno por producto, con el formato `"Teclado: 25 €"`. Imprime el array resultante por consola.

Comprueba que el array original `productos` no ha cambiado imprimiéndolo también después: `map` es inmutable y debe dejarlo intacto.

### Kata 2 - Solo los accesorios asequibles con filter

Usa `filter` para quedarte con los productos que sean de categoría `"accesorios"` y mecusten menos de 50 €. Compara la categoría con igualdad estricta (`===`) y el precio con `<`.

Imprime cuántos productos cumplen (`length`) y, en una segunda línea, sus nombres.

> **Pista:** puedes encadenar un `map` para extraer los nombres.

### Kata 3 - Precio total con reduce

Usa `reduce` para calcular la suma de todos los precios del catálogo. Parte de un valor inicial y ve acumulando el precio de cada producto.

Imprime el total. Añade un comentario explicando qué pasaría si omitieras el valor inicial y el array pudiera venir vacío.

### Kata 4 - Ranking de más caro a más barato con sort

Ordena el catálogo de más caro a más barato por precio, pero sin modificar el array `productos` original.

1. Copia primero el array con la propagación `[...productos]`.
2. Ordena la copia con un comparador que ordene de mayor a menor.
3. Imprime los nombres ya ordenados.
4. Imprime `productos` de nuevo para demostrar que conserva su orden inicial.

> **Pista:** recuerda que el comparador para descendente invierte la resta.

### Kata 5 - Gasto por categoría encadenando métodos

Dada una categoría objetivo (empieza con `"accesorios"`), calcula en una sola expresión encadenada cuánto suman los precios de los productos de esa categoría. Encadena en este orden: `filter` para seleccionar la categoría, `map` para quedarte con los precios y `reduce` para sumarlos.

Imprime el resultado (para `"accesorios"` debe dar 80). Después, cambia la categoría a `"pantallas"` y vuelve a ejecutar la cadena para comprobar que también funciona. Añade un comentario indicando por qué `reduce` va necesariamente al final de la cadena.

## Resultado final

* Un archivo `katas.js` (o `katas.ts`) con las 5 katas resueltas y el catálogo `productos` declarado una sola vez al principio.
* Cada kata claramente separada con un comentario `// Kata N - ...`.
* Output simulado o real comentado bajo cada kata (lo que imprime al ejecutarse).

## Starter (para Classroom)

Cuando este ejercicio se sincronice con GitHub Classroom, el repo template incluirá:

```
starter/
├── katas.js        # catálogo ya declarado + las 5 secciones vacías con TODO
├── package.json    # node, sin dependencias adicionales
├── .nvmrc          # versión de Node sugerida
└── README.md       # enunciado completo + instrucciones de entrega (flujo PR)
```

---

# 6 Katas - Introducción a tipos con TypeScript

## Brief
Cinco mini-katas (pequeños ejercicios cerrados) que cubren las ideas centrales del submódulo: anotaciones de tipo básicas, tipado de funciones, descripción de objetos con `interface`, `union types`, corrección de errores de tipo y propiedades opcionales. Cada kata sube un poco la dificultad respecto a la anterior.

## Objetivos de aprendizaje
- Anotar variables y funciones con los tipos básicos (`string`, `number`, `boolean`) y el patrón `nombre: tipo`.
- Describir la forma de un objeto con una `interface` y respetar su contrato al crear datos.
- Usar un `union type` (`string | number`) para un valor que admite varios tipos, comprobándolo antes de operar.
- Leer un mensaje de error de tipos de `tsc` y corregir la causa real.
- Marcar y usar una propiedad opcional con `?` sin que salten errores.

## Enunciado
Crea un archivo `katas.ts` con las soluciones a las 5 katas siguientes. Cada kata debe quedar claramente separada con un comentario `// Kata N - ...` y compilar sin errores con `tsc katas.ts` (salvo la Kata 4, cuyo enunciado empieza justamente por un error que debes corregir). Todos los comentarios de código van en español.

### Kata 1 - Anota la ficha
Declara tres variables anotando su tipo de forma explícita: `nombre` (un `string`), `edad` (un `number`) y `esAdmin` (un `boolean`). A continuación escribe una función `presentar` que reciba esos tres datos como parámetros tipados y devuelva un `string` con una frase de presentación. Imprime el resultado por consola con una template literal.

**Ejemplo de salida esperada:**
```text
Marta (30) administradora: false
```

### Kata 2 - Contrato de producto
Define una `interface Producto` con las propiedades `nombre` (`string`) y precio (`number`). Crea dos objetos que respeten ese contrato y guárdalos en un array tipado como `Producto[]`. Recorre el array con un método de array (por ejemplo `map` o `forEach`) e imprime cada producto por consola.

Comprueba, quitando temporalmente una propiedad, que `tsc` te avisa cuando un objeto no cumple el contrato. Deja el código final correcto.

### Kata 3 - Identificador flexible
Escribe una función `describirId` que reciba un parámetro `id` de tipo `string | number` y devuelva un `string`. Dentro de la función, usa `typeof` para distinguir los dos casos:
* Si `id` es un `number`, devuelve `"Id numérico: 42"` (con el valor real).
* Si `id` es un `string`, devuelve `"Id de texto: A42B"` (con el valor real, en mayúsculas).

Llama a la función con un número y con un texto y comprueba que cada rama funciona.

### Kata 4 - Caza el error de tipo
Partes del siguiente fragmento, que no compila:
```TypeScript
let total: number = 0;
total = "100";
console.log(total + 50);
```

1. Ejecuta mentalmente (o con `tsc`) y anota en un comentario qué error da y en qué línea.
2. Corrige la causa real del error para que `total` siga siendo un `number` y el programa imprima `150`.
3. En un segundo comentario, explica por qué la corrección es más segura que cambiar el tipo de `total` a `string` o a `any`.

### Kata 5 - Campo opcional
Define una `interface Usuario` con `nombre` (`string`), `edad` (`number`) y una propiedad opcional `telefono` (`string`). Crea dos usuarios: uno con teléfono y otro sin él. Escribe una función `mostrarContacto` que reciba un `Usuario` y devuelva un `string`:
* Si el usuario tiene `telefono`, incluye el número en el texto.
* Si no lo tiene, muestra `"sin teléfono"`.

_Pista: comprueba la propiedad opcional antes de usarla, igual que comprobamos un valor que puede ser `null` o `undefined`._

## Resultado final
* Un archivo `katas.ts` con las 5 katas resueltas.
* Cada kata claramente separada con un comentario `// Kata N - ...`
* Output simulado o real comentado bajo cada kata (lo que imprime al ejecutarse tras transpilar con `tsc`).

## Starter (para Classroom)
Cuando este ejercicio se sincronice con GitHub Classroom, el repo template incluirá:
```Plaintext
starter/
├── katas.ts         # plantilla con las 5 secciones vacías y TODO
├── tsconfig.json    # configuración mínima de TypeScript (strict)
├── package.json     # typescript como dependencia de desarrollo
└── README.md        # enunciado completo + instrucciones de entrega (flujo PR)
```

---

# 7 Katas - Asincronía y Promesas en JavaScript

## Brief
Cinco mini-katas (pequeños ejercicios cerrados) que cubren las ideas centrales de la asincronía en JavaScript/TypeScript: callbacks, Promesas (`Promise`), manejo de errores asíncronos y sintaxis `async/await`. Forman parte del entregable global del módulo (20 katas resueltas).

## Objetivos de aprendizaje
- Entender el bucle de eventos (*event loop*) y el comportamiento no bloqueante.
- Crear y consumir Promesas usando `.then()` y `.catch()`.
- Refactorizar código asíncrono basado en Promesas a la sintaxis moderna con `async/await`.
- Controlar errores asíncronos de forma segura usando bloques `try/catch`.

## Enunciado
Crea un archivo `katas.js` (o `katas.ts` si prefieres) con las soluciones a las 5 katas siguientes. Cada kata debe ejecutarse en orden con `node katas.js` e imprimir su resultado por consola.

### Kata 1 - Simulación de temporizador
Crea una función llamada `esperar(ms)` que devuelva una `Promise` que se resuelva después de transcurrir los milisegundos indicados por parámetro usando `setTimeout`.

```javascript
esperar(1000).then(() => {
  console.log("Han pasado 1 segundo");
});
```

### Kata 2 - Petición con Promesas
Simula una función `obtenerUsuario(id)` que devuelva una `Promise`:
- Si el `id` es mayor que 0, resuelve un objeto `{ id, nombre: "Usuario " + id }` en 500ms.
- Si el `id` es menor o igual a 0, rechaza la Promesa con un mensaje de error `"ID de usuario no válido"`.

Consúmela usando `.then()` y `.catch()`.

### Kata 3 - Migración a Async/Await
Toma la función de la Kata 2 y consúmela dentro de una función asíncrona `mostrarUsuario(id)` utilizando la sintaxis `async/await`. Captura posibles errores usando un bloque `try/catch`.

```javascript
async function mostrarUsuario(id) {
  try {
    const usuario = await obtenerUsuario(id);
    console.log("Usuario encontrado:", usuario);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

### Kata 4 - Ejecución en paralelo
Crea dos funciones que devuelvan Promesas: `obtenerDatosA()` y `obtenerDatosB()`, cada una con diferentes tiempos de espera.

Usa `Promise.all()` para ejecutar ambas peticiones en paralelo e imprimir los resultados de ambas una vez hayan finalizado.

### Kata 5 - Secuencia de pasos asíncronos
Escribe una función `procesarPedido(pedidoId)` que ejecute tres pasos asíncronos en orden utilizando `async/await`:
1. Validar pedido (`esperar(300ms)`)
2. Procesar pago (`esperar(500ms)`)
3. Enviar confirmación (`esperar(200ms)`)

Imprime por consola un mensaje al completar cada paso y al finalizar la secuencia completa.

## Resultado final
- Un archivo `katas.js` (o `katas.ts`) con las 5 katas resueltas.
- Cada kata claramente separada con un comentario `// Kata N - ...`
- Output formateado o comentado para cada ejercicio.

## Starter (para Classroom)
```text
starter/
├── katas.js        # plantilla con las secciones vacías
├── package.json    # node, sin dependencias adicionales
├── .nvmrc          # versión de Node sugerida
└── README.md       # enunciado completo + instrucciones de entrega
```