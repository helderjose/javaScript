/*
https://www.w3schools.com/jsref/jsref_filter.asp

array.filter(function(currentValue, index, arr), thisValue)
*/



/*
exemplo 1: sintaxe
o segundo parâmentro (name) que é passado como this não funciona com arrow function.
*/
[0, 1, 2, 3].filter(function (element, index, arr) {
  console.log("element: ", element);
  console.log("index: ", index);
  console.log("arr: ", arr);
  console.log("this: ", this);
  console.log("-----------------------------");
}, name = "Maria");
