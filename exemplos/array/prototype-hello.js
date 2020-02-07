let carros = ["Ka", "Corsa", "Palio", "Gol"];


/*
this representa o array.
*/
Array.prototype.teste = function() {
    console.log("hello array");
    console.log(this[0]);
    console.log(this);
}

carros.teste();


/*
--------------------
-----Prototype -----
--------------------
The prototype constructor allows you to add new properties and methods to the Array() object.
When constructing a property, ALL arrays will be given the property, and its value, as default.
When constructing a method, ALL arrays will have this method available.
Note: Array.prototype does not refer to a single array, but to the Array() object itself.
Note: Prototype is a global object constructor which is available for all JavaScript objects.
*/