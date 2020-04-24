let numbers = [5, 10, 15];

// total vai começar com o valor do initialValue
function getSum(total, num) {
  console.log(total, num)
  return total + num;
}

/*
initialValue é o segundo parâmetro do reduce,
nesse caso é 0.
reduce(getSum, initialValue)

Se não passar o initialValeu, será usado o primerio elemento do array como initialValue
*/
let result = numbers.reduce(getSum, 0);

console.log("result: ", result); // 30
