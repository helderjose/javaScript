/*
https://www.w3schools.com/jsref/jsref_some.asp

Definition and Usage

The some() method checks if any of the elements in an array pass a test (provided as a function).

The some() method executes the function once for each element present in the array:
- If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
- Otherwise it returns false

Note: some() does not execute the function for array elements without values.
Note: some() does not change the original array.

Syntax:
array.some(function(currentValue, index, arr), thisValue)

Parameters: olhar paremeter-values.png

Technical Details:
Return Value: 	A Boolean. Returns true if any of the elements in the array pass the test, otherwise it returns false
JavaScript Version: 	ECMAScript 3
*/

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  let result = ages.some(checkAdult);
  console.log(result)
}

myFunction();// true
