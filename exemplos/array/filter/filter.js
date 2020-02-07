/*
Definition and Usage
The filter() method creates an array filled with all array elements that pass a test (provided as a function).
Note: filter() does not execute the function for array elements without values.
Note: filter() does not change the original array.

Syntax:
array.filter(function(currentValue, index, arr), thisValue)

Parameter Values:
parameter-values.png

Nota:
[].ages retorna []
*/


// para usar com arrow function, olhar o exemplo de array some.
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  let agesFiltered = ages.filter(checkAdult);
  console.log(agesFiltered)
}

myFunction();
