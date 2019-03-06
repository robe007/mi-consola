# Mi-Consola

![Screenshot](https://i.imgur.com/iyuNj6Z.png)

## Instalación

Con NPM:

```shell
$ npm i mi-consola
```

## Una mejor consola para Node.js


`mi-consola` es un reemplazo directo del objeto *console* predeterminado de *NodeJS* que le brinda colores y más métodos cuando se utiliza. La parte más importante de ello, es que antes de cada *salida* imprime la fecha y hora en formato `yyyy-mm-dd h:MM:ss.l` donde se obtiene el momento exacto de ejecución de esa llamada.

## Cómo usarla

Puedes sobreescribir el propio objeto `console` o asignarlo a otra variable. Es completamente seguro anular el objeto `console` nativo porque `mi-consola` llama a los métodos del `console` nativo sobre los que ya están disponibles en él.

```
const console = require('mi-consola');

console.log("Esto es un log");
console.info("Informacion");
console.warn("Advertencia!");
console.error("Error!");
```
#### Resultaría en:

<span style="color:green">2019-03-06 3:47:53.924  Esto es un log</span>

<span style="color:blue">2019-03-06 3:47:53.933  Informacion</span>

<span style="color:yellow">2019-03-06 3:47:53.944  Advertencia!</span>

<span style="color:red">2019-03-06 3:47:53.954  Error!</span>

### Otro ejemplo:

```
for (let i = 1; i <= 5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(`El numero es: ${i}`);
  }, 1000);
}
```

#### Resultaría en:

<span style="color:green">2019-03-06 3:55:53.506  1</span>

<span style="color:green">2019-03-06 3:55:53.507  2</span>

<span style="color:green">2019-03-06 3:55:53.507  3</span>

<span style="color:green">2019-03-06 3:55:53.508  4</span>

<span style="color:green">2019-03-06 3:55:53.509  5</span>

<span style="color:green">2019-03-06 3:55:54.507  El numero es: 1</span>

<span style="color:green">2019-03-06 3:55:54.510  El numero es: 2</span>

<span style="color:green">2019-03-06 3:55:54.510  El numero es: 3</span>

<span style="color:green">2019-03-06 3:55:54.511  El numero es: 4</span>

<span style="color:green">2019-03-06 3:55:54.512  El numero es: 5</span>



### Otros usos:

```
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