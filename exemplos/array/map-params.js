/*
array.map(function(currentValue, index, arr), thisValue)
*/

var persons = [
    {name: "maria", age: 20},
    {name: "joao", age: 30}
]

function myFunc(item, index, arr) {
    console.log("index:", index)
    console.log("item:", item)
    console.log("arr:", arr)
    console.log("this:", this)
    console.log("this.toString():", this.toString())
    console.log("-------------------------")
}


persons.map(myFunc, "myVar");
// persons.map(myFunc, 35);