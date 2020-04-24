carros = [
  {marca: "Ford", modelo: "Ka", preco: 28800},
  {marca: "Ford", modelo: "Fiesta", preco: 34750},
  {marca: "Ford", modelo: "Focus", preco: 32000},
  {marca: "Chevrolet", modelo: "Corsa", preco: 17568},
  {marca: "Fiat", modelo: "Palio", preco: 18900}
]

console.log("----- Exemplo 1 -----");
let minhaMarca = "Ford"
let someTeste = carros.some(function (carro) {
  return carro.marca === minhaMarca;
});

console.log(someTeste); // true