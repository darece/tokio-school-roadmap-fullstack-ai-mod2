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