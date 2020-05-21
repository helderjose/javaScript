let numbers = [65, 44, 12, 4];

function multiplyArrayElement(num) {
    // num é cada elemento do array.
    return num * 10;
}

let multiplicado = numbers.map(multiplyArrayElement);

console.log(multiplicado); // [ 650, 440, 120, 40 ]
console.log(numbers); //  65, 44, 12, 4 ]   nao altera o array original