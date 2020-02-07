
carros = [
    {marca: "Ford", modelo: "Ka", preco: 28800},
    {marca: "Ford", modelo: "Fiesta", preco: 34750},
    {marca: "Ford", modelo: "Focus", preco: 32000},
    {marca: "Chevrolet", modelo: "Corsa", preco: 17568},
    {marca: "Fiat", modelo: "Palio", preco: 18900}
]

console.log("----- Exemplo 1 -----");
var minhaMarca = "Ford"
var someTeste = carros.some(function (elemento) {
    return elemento.marca === minhaMarca;
});

console.log(someTeste);
console.log();



console.log("----- Exemplo 2 -----");
/*
element - Required. The value of the current element.
index - Optional. The array index of the current element.
*/
carros.some(function(element, index){
    console.log(index, element);
});
console.log();



console.log("----- Exemplo 3 -----");
carros.some(function(element, index, arr){
    console.log(arr);
});
console.log();
