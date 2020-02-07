/*
The lastIndexOf() method returns the index of the last occurrence of
a specified text in a string.

return -1 if the text is not found.
accept a second parameter as the starting position for the search:
*/

var str = "Please locate where 'locate' occurs!";

console.log(str.lastIndexOf("locate"));
console.log(str.lastIndexOf("locate", 9));
console.log(str.lastIndexOf("locate", 30));