/*
The indexOf() method returns the index of (the position of) the first occurrence
of a specified text in a string.

return -1 if the text is not found.
accept a second parameter as the starting position for the search.
The indexOf() method cannot take powerful search values (regular expressions).
*/

var str = "Please locate where 'locate' occurs!";

console.log(str.indexOf("locate"));
console.log(str.indexOf("locate", 9));
console.log(str.indexOf("locate", 23));