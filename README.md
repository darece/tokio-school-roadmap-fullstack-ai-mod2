# Katas - Variables, tipos primitivos y operadores

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