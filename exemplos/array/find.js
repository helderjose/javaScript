/*
  https://www.w3schools.com/jsref/jsref_find.asp

  Definition and Usage:
  The find() method returns the value of the first element in an array that
  pass a test (provided as a function).

  The find() method executes the function once for each element present in the array:
  If it finds an array element where the function returns a true
  value, find() returns the value of that array element (and does not check the remaining values)
  Otherwise it returns undefined

  Note: find() does not execute the function for empty arrays.
  Note: find() does not change the original array.

  Syntax:
  array.find(function(currentValue, index, arr),thisValue)

  Technical Details:
  Return Value: 	Returns the array element value if any of the elements in the array pass the test, otherwise it returns undefined
  JavaScript Version: 	ECMAScript 6
*/

// Get the value of the first element in the array that has a value of 18 or more:
let ages = [4, 12, 16, 20];

function checkAdult(age) {
  return age >= 18;
}

let agesFiltered = ages.find(checkAdult);

console.log(agesFiltered); // 20