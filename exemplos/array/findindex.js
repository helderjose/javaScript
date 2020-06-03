/*
  https://www.w3schools.com/jsref/jsref_findindex.asp

  Definition and Usage:
  The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
  The findIndex() method executes the function once for each element present in the array:
      If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
      Otherwise it returns -1
  Note: findIndex() does not execute the function for array elements without values.
  Note: findIndex() does not change the original array.

  Syntax:
  array.findIndex(function(currentValue, index, arr), thisValue)

  Parameter Values:
  function(currentValue, index,arr)   - required
  thisValue    - optional



  function(currentValue, index,arr)
  Argument 	              Description
  currentValue 	          Required. The value of the current element
  index 	                Optional. The array index of the current element
  arr 	                  Optional. The array object the current element belongs to
*/