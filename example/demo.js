var console = require('../lib/miconsola');

console.log('> console.info("This is information")');
console.info("This is information");

console.log('');
console.log('> console.error("Oops!")');
console.error("Oops!");

console.log('');
console.log("> var arr = [");
console.log("   ['a','b','c','d'],");
console.log("   ['e','f','h','j']");
console.log(" ];");
console.log("> console.table(arr);");

var arr = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'h', 'j']
];
console.table(arr);
console.log('> ');

for (let i = 1; i <= 5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(`El numero es: ${i}`);
  }, 1000);
}