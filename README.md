# Mi-Consola

![Screenshot](https://i.imgur.com/iyuNj6Z.png)

## Instalación

Con NPM:

```shell
$ npm i mi-consola
```

## Método `console` mejorado para Node.js


`mi-consola` es un reemplazo directo del objeto *console* predeterminado de *NodeJS* que le brinda colores y más métodos cuando se utiliza. La parte más importante de ello, es que antes de cada *salida* imprime la fecha y hora en formato `yyyy-mm-dd h:MM:ss.l` ([ ver aquí ](https://www.npmjs.com/package/dateformat#mask-options)) donde se obtiene el momento exacto de ejecución de esa llamada.

## Cómo usarla

Se puede sobreescribir el propio objeto `console` o asignarlo a otra variable. De hecho, es completamente seguro anular el objeto `console` nativo porque `mi-consola` llama a los mismos métodos nativos , es decir, los que ya están disponibles en el objeto.

```js
const console = require('mi-consola');

console.log("Esto es un log");
console.info("Informacion");
console.warn("Advertencia!");
console.error("Error!");
```

#### Resultaría en:

![Screenshot](https://i.imgur.com/ecUCIDO.png)

### Otro ejemplo:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(`El numero es: ${i}`);
  }, 1000);
}
```

#### Resultaría en:

![Screenshot](https://i.imgur.com/QcqFjXB.png)

### Otros usos:

```js
console.table([ [1,2], [3,4] ]);
console.time("Timer");
console.timeEnd("Timer");
console.dir(myObject);
```

## Methods

### `console.log`, `console.warn`, `console.error`, `console.info`, `console.debug`, `console.dir`, `console.trace`
These methods work exactly same as native console methods but with colors for `warn`, `info` or `error`

### `console.clear`

Clears the screen

### `console.table`

Draws a table of data if a 2d array or object passed to it

### `console.time`

Creates a new timer under the given name. Call `console.timeEnd(name)`
 with the same name to stop the timer and print the time elapsed.

### `console.timeEnd`

Stops a timer created by a call to console.time(name) and write the time

### `console.trace`

Prints a stack trace of JavaScript execution at the point
where it is called. The stack trace details the functions on the stack,
as well as the values that were passed as arguments to each function.

### `console.count`

Writes number of times each argument is called with blue color

## TODOs

 * Use Unicode icons to mimic browser console icons in OSX
 * Make `console.trace` more detailed with V8 flags