/*
https://www.w3schools.com/jsref/jsref_charat.asp

Definition and Usage

The charAt() method returns the character at the specified index in a string.

The index of the first character is 0, the second character is 1, and so on.

Tip: The index of the last character in a string is string.length-1, the second
last character is string.length-2, and so on (See "More Examples").


Syntax
string.charAt(index)


Parameter Values
Parameter: index
Description: Required. An integer representing the index of the character you want to return


Technical Details
Return Value: 	A String, representing the character at the specified index, or an empty string if the index number is not found.

*/
let str = "HELLO WORLD"

console.log(str.charAt(0)); // H - Return the first character of a string
console.log(str.charAt(str.length-1)); // D - Return the last character of a string
console.log(str.charAt(999)); // string vazia