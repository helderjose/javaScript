/*
https://www.w3schools.com/jsref/jsref_fill.asp

Definition and Usage:
The fill() method fills the specified elements in an array with a static value.
You can specify the position of where to start and end the
filling. If not specified, all elements will be filled.

Note: this method overwrites the original array.

Syntax:
array.fill(value, start, end)

Parameter Values:
Parameter 	        Description
value 	            Required. The value to fill the array with
start 	            Optional. The index to start filling the array (default is 0)
end 	              Optional. The index to stop filling the array (default is array.length)

Technical Details:
Return Value: 	      An Array, the changed array
JavaScript Version: 	ECMAScript 6


*/

// Fill all the array elements with a static value:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
console.log(fruits); // [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]


// Fill the last two array elements with a static value:
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.fill("Kiwi", 2, 4); // [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]
console.log(fruits2);