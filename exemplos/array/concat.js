/*
https://www.w3schools.com/jsref/jsref_concat_array.asp

Definition and Usage:
The concat() method is used to join two or more arrays.
This method does not change the existing arrays, but returns a new
array, containing the values of the joined arrays.

Syntax:
array1.concat(array2, array3, ..., arrayX)

Parameter Values:
Parameter 	                             Description
array2, array3, ..., arrayX 	           Required. The arrays to be joined

Technical Details:
Return Value: 	An Array object, representing the joined array
*/

let hege = ["Cecilie", "Lone"];
let stale = ["Emil", "Tobias", "Linus"];
let kai = ["Robin"];
let children = hege.concat(stale, kai);

console.log(children);  // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]