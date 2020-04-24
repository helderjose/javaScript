let animals = ["lion", "tiger", "crocodile", "monkey"];

/*
element - Required. The value of the current element.
index - Optional. The array index of the current element.

element é cada elemento do arry.
index é o index atual da iteração
*/
animals.some(function(element, index){
  console.log(index, element);
});

/*
Saída

0 'lion'
1 'tiger'
2 'crocodile'
3 'monkey'
*/


