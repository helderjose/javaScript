/*
Definition and Usage

The slice() method extracts parts of a string and returns the extracted parts in a new string.
Use the start and end parameters to specify the part of the string you want to extract.
The first character has the position 0, the second has position 1, and so on.
Tip: Use a negative number to select from the end of the string.

Syntax: string.slice(start, end)

Parameter Values
start: Required. The position where to begin the extraction. First character is at position 0

end: ptional. The position (up to, but not including) where to end the extraction. If
omitted, slice() selects all characters from the start-position to the end of the string
*/

let str = "Hello world!";

// Extract parts of a string
console.log(str.slice(0, 5)); // Hello

// Extract the whole string
console.log(str.slice(0)); // Hello world!

// Extract from position 3, and to the end
console.log(str.slice(3)); // lo world!

// Extract the characters from position 3 to 8
console.log(str.slice(3, 8)); // lo wo

// Extract only the first character
console.log(str.slice(0, 1)); // H

// Extract only the last character:
console.log(str.slice(-1)); // !
