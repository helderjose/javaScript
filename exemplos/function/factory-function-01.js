/*
    Usando factory function para gerar encapsulamento.
    A variação dessa técnica é a constructor function.
*/
var createCounter = function() {
    var value = 0;
    // o que eu retorno é public
    return {
      add: function() {
        return ++value;
      }
    };
  };
  
  var counter = createCounter();
  console.log(counter.value); // undefined
  console.log(counter.add()); // 1
  console.log(counter.add()); // 2
  console.log(counter.add()); // 3
  console.log(counter); // { add: [Function: add] }