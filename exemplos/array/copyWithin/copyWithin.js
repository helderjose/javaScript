

// Copy the first two array elements to the fourth and fifth position:
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(3, 0, 2);
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Banana', 'Orange', 'Papaya' ]

/*
Copide de 0, 2 : "Banana", "Orange"
cole no index 3: ["Banana", "Orange", "Apple", "Banana", "Orange", "Papaya"]
*/
