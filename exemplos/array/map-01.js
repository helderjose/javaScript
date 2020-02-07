/*
https://www.w3schools.com/jsref/jsref_map.asp

The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
Note: map() does not execute the function for array elements without values.
Note: map() does not change the original array.
*/

var numbers = [4, 9, 16, 25];
var raizesQuadradas = numbers.map(Math.sqrt);
console.log(raizesQuadradas); // [ 2, 3, 4, 5 ]

