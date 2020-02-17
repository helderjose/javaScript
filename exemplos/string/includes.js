/*
  https://www.w3schools.com/jsref/jsref_includes.asp

  Definition and Usage
  The includes() method determines whether a string contains the characters of a specified string.
  This method returns true if the string contains the characters, and false if not.
  Note: The includes() method is case sensitive.

  Syntax:
  string.includes(searchvalue, start)

  Parameter Values:
  searchvalue: Required. The string to search for
  start: Optional. Default 0. At which position to start the search
*/

let str = "Hello world, welcome to the universe.";
let n = str.includes("world");
console.log(n); // true

str = "Hello world, welcome to the universe.";
n = str.includes("world", 12);
console.log(n); // false