/*
https://www.w3schools.com/jsref/jsref_push.asp

Definition and Usage
The push() method adds new items to the end of an array, and returns the new length.
Note: The new item(s) will be added at the end of the array.
Note: This method changes the length of the array.
Tip: To add items at the beginning of an array, use the unshift() method.

Syntax
array.push(item1, item2, ..., itemX)

Parameter Values
Parameter 	                  Description
item1, item2, ..., itemX      Required. The item(s) to add to the array

Technical Details
Return Value: 	      A Number, representing the new length of the array
JavaScript Version: 	ECMAScript 1
*/

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi", "Lemon", "Pineapple"));   // 7
console.log(fruits);   // ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon", "Pineapple"]

