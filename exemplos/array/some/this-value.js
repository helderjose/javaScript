let animals = ["lion", "tiger", "crocodile", "monkey"];
let animalObject = {name: "", age: 0};

// animalObject vai ser o this em myFunc
animals.some(myFun, animalObject);

/*
this é o animalObject, se não passar nada
o this é undefined
*/
function myFun(animal) {
  this.name = "rex";
  this.age = 5;
  console.log(animal, this)
}

console.log();
console.log("fora da funcion: ", animalObject);
console.log();



// com arrow function o this é um objeto vazio {}, não funciona com arrow function.
["fox"].some((element) => {
  console.log(this); // {}
}, "myString");
console.log();

// string
["fox"].some(function (element) {
  console.log(this); // [String: 'myString']
  console.log(this.toString());  // myString
}, "myString");
console.log();

// number
["fox"].some(function (element) {
  console.log(this); // [Number: 5]
  console.log(this.toString());  // 5    // toString funciona porque é um método do Array
}, 5);
console.log();




