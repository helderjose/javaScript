/*
https://www.w3schools.com/jsref/jsref_entries.asp

Definition and Usage:
The entries() method returns an Array Iterator object with key/value pairs.
For each item in the original array, the new iteration object
will contain an array with the index as the key, and the item value as the value:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

Note: This method does not change the original array.

Syntax:
array.entries()

Technical Details:
Return Value: 	An Array Iterator object
JavaScript Version: 	ECMAScript 6

*/

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitsEntries = fruits.entries();

console.log(fruitsEntries); // Object [Array Iterator] {}

for (fruitEntry of fruitsEntries) {
  console.log(fruitEntry)
  /*
  [ 0, 'Banana' ]
  [ 1, 'Orange' ]
  [ 2, 'Apple' ]
  [ 3, 'Mango' ]
  */
}
