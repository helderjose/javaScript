
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = array.splice(2,2);

/*
removed === [3, 4]
array === [1, 2, 5, 6, 7, 8, 9, 0]
*/

console.log(removed); // array com itens removidos
console.log(array); //array alterado


/*
The splice() method adds/removes items to/from an array, and returns the removed item(s).

Note: This method changes the original array.
*/