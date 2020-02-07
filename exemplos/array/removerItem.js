var array = [2, 5, 9];
var index = array.indexOf(5);

console.log(array);  // [ 2, 5, 9 ]

if (index > -1) {
  array.splice(index, 1);
}

console.log(array);  // array = [2, 9]