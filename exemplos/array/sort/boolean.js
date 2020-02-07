let cars = [
  { type: "Volvo", isNew: false },
  { type: "Saab", isNew: true },
  { type: "BMW", isNew: false }
];


cars.sort(function(a, b){return a.isNew - b.isNew});

console.log(cars)