
/*
Constructor function.

*/

var Contador = function() {
  var value = 0;
  // o que eu coloco this é public
  this.add = function() {
    return ++value;
  };
};

var contador = new Contador();
console.log(contador.value); // undefined
console.log(contador.add()); // 1
console.log(contador.add()); // 2
console.log(contador.add()); // 3
console.log(contador); // Contador { add: [Function] }
