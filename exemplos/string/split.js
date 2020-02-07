// https://www.w3schools.com/jsref/jsref_split.asp

/*
Definition and Usage

The split() method is used to split a string into an array of substrings, and returns the new array.

Tip: If an empty string ("") is used as the separator, the string is split between each character.

Note: The split() method does not change the original string.
*/

let asPath = 'http://localhost:3000/sac/faq?categoria=1000000000000000000000000000000000';

// asPath = 'http://localhost:3000/sac/faq?categoriaaaaaaaa=1000000000000000000000000000000000';

console.log('asPath: ', asPath)

asPath = asPath.split('categoria=')
asPath = asPath[1]

console.log('asPath: ', asPath)