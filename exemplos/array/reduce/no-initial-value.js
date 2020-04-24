
let numbers = [25, 10, 5];
let result = numbers.reduce(myFunc); // sem passar initialValue no .reduce()

/*
total: começa com o valor do primeiro elemento do array porque não foi passado o
segundo parâmetro (initialValue).

num: são os outros elementos
*/
function myFunc(total, num) {
  console.log(total, num)
  return total - num;
}

console.log(result)

