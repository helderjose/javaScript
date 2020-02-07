/*
Verificar se uma variável é um array.

 */

var cars = ["A", "B"];
console.log(Array.isArray(cars));

var word = "my word";
console.log(Array.isArray(word));


/*
var cars = ["A", "B"];
typeof cars //returns object

To solve this problem ECMAScript 5 defines a new method Array.isArray():
The problem with this solution is that ECMAScript 5 is not supported in older browsers.

To solve this problem you can create your own isArray() function:

Esse funciona em navegador antigo
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

olhar instanceOf
*/