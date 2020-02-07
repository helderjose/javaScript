/*
The instanceof operator returns true if an object is created by a given constructor
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits instanceof Array); //true

var word = "my word";
console.log(word instanceof String); //false

var word2 = new String("My word");
console.log(word2 instanceof String); //true
console.log(word2 instanceof Object); //true