let animals = ["lion", "tiger", "crocodile", "monkey"];

/*
arr - Optional. The array object the current element belongs to.

Vai imprimir o array em cada iteração do some.
Imprime quatro vezes porque o array tem quatro elementos.
*/
animals.some(function(element, index, arr){
  console.log(arr);
});

/*
Saída:

[ 'lion', 'tiger', 'crocodile', 'monkey' ]
[ 'lion', 'tiger', 'crocodile', 'monkey' ]
[ 'lion', 'tiger', 'crocodile', 'monkey' ]
[ 'lion', 'tiger', 'crocodile', 'monkey' ]
*/