// retornar o index

var myArr = ['a', 'b'];

//tbm funciona com foreat
var teste = myArr.some((element, index, arr) => {
  if (element == 'b') {
    arr[index] = 'c';
  }
});

console.log(myArr);
console.log(teste)
