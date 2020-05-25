// Copy the first two array elements to the last two array elements:
let fruits = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];

// sempre o mesmo resultado porque estah usando os valores padrao
// fruits.copyWithin(2); // target
fruits.copyWithin(2, 0); // target, start: (default is 0)
// fruits.copyWithin(2, 0, fruits.length); // target, start, end: (default is array.length)

console.log(fruits); // [ 'Banana', 'Orange', 'Banana', 'Orange', 'Apple' ]

/*
Note que, mesmo copiando de 0 até array.length, o
array nunca muda seu length

fruits.copyWithin(2, 0)
Copide de 0 até array.lenght: "Banana", "Orange", "Apple", "Mango", "Watermelon"
cole no index 2: ["Banana", "Orange", "Banana", "Orange", "Apple", "Mango", "Watermelon", "Apple", "Mango", "Watermelon"]
resultado: ["Banana", "Orange", "Banana", "Orange", "Apple"]  manteve o mesmo length.
*/