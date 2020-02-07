carros = [
  { marca: "Ford", modelo: "Ka", preco: 28800 },
  { marca: "Ford", modelo: "Fiesta", preco: 34750 },
  { marca: "Ford", modelo: "Focus", preco: 32000 },
  { marca: "Chevrolet", modelo: "Corsa", preco: 17568 },
  { marca: "Fiat", modelo: "Palio", preco: 18900 }
]

function verifyCar(car) {
  console.log("verifyCar: ", car);
  return car.marca === "Ford" && car.preco > 33000
}

var someTeste = carros.some(verifyCar);

console.log(someTeste);
