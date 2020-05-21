/*
array.map(function(currentValue, index, arr), thisValue)
*/

var persons = [
    {name: "maria", age: 20},
    {name: "joao", age: 30}
]


// O this nao funciona com arrow function.
function myFunc(item, index, arr) {
    console.log("index:", index); // index da iteracao
    console.log("item:", item); // elemento atual do array
    console.log("arr:", arr); // array que o elemento faz parte
    console.log("this:", this); // segundo parametro do map
    console.log("this.toString():", this.toString())
    console.log("-------------------------")
}


persons.map(myFunc, "myVar");
// persons.map(myFunc, 35);


/*
Saida da linha: persons.map(myFunc, "myVar");

index: 0
item: { name: 'maria', age: 20 }
arr: [ { name: 'maria', age: 20 }, { name: 'joao', age: 30 } ]
this: [String: 'myVar']
this.toString(): myVar
-------------------------
index: 1
item: { name: 'joao', age: 30 }
arr: [ { name: 'maria', age: 20 }, { name: 'joao', age: 30 } ]
this: [String: 'myVar']
this.toString(): myVar
-------------------------
*/


/*
Saida da linha: persons.map(myFunc, 35);

index: 0
item: { name: 'maria', age: 20 }
arr: [ { name: 'maria', age: 20 }, { name: 'joao', age: 30 } ]
this: [Number: 35]
this.toString(): 35
-------------------------
index: 1
item: { name: 'joao', age: 30 }
arr: [ { name: 'maria', age: 20 }, { name: 'joao', age: 30 } ]
this: [Number: 35]
this.toString(): 35
*/