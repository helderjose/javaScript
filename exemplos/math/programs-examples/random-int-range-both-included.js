
/*
  returns a random number between min and max (both included).
*/
let min = 0;
let max = 5;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
  Exemplos de saída: com min = 0 e max = 5
  5
  2
  0
  5
  1
  4
  0
  1
  3
  5
  0
  1
  4
  0
*/