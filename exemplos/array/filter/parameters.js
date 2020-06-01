/*
https://www.w3schools.com/jsref/jsref_filter.asp

array.filter(function(currentValue, index, arr), thisValue)
*/



/*
exemplo 1: sintaxe
o segundo parâmentro (name) que é passado como this não funciona com arrow function.

element: elemento atual do loop.
index: index atual do loop.
arr: array que o element faz parte

name = "Maria": será usado como "this" no filter
*/
[0, 1, 2, 3].filter(function (element, index, arr) {
  console.log("element: ", element);
  console.log("index: ", index);
  console.log("arr: ", arr);
  console.log("this: ", this);
  console.log("-----------------------------");
}, name = "Maria");


/*
  Saída

  element:  0
  index:  0
  arr:  [ 0, 1, 2, 3 ]
  this:  [String: 'Maria']
  -----------------------------
  element:  1
  index:  1
  arr:  [ 0, 1, 2, 3 ]
  this:  [String: 'Maria']
  -----------------------------
  element:  2
  index:  2
  arr:  [ 0, 1, 2, 3 ]
  this:  [String: 'Maria']
  -----------------------------
  element:  3
  index:  3
  arr:  [ 0, 1, 2, 3 ]
  this:  [String: 'Maria']
  -----------------------------
*/